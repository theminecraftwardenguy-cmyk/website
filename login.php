<?php
error_reporting(0);
ini_set('display_errors', '0');
session_start();

$db = new SQLite3('users.db');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $db->prepare('SELECT * FROM users WHERE email = :email');
    $stmt->bindValue(':email', $email);
    $result = $stmt->execute();
    $user = $result->fetchArray();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        $_SESSION['user_email'] = $user['email'];
        header('Location: /profile');
        exit();
    } else {
        $error = 'Invalid email or password.';
    }
}

$message = isset($_SESSION['message']) ? $_SESSION['message'] : '';
unset($_SESSION['message']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon-64x64.png">
    <title>Log In - Website Hero</title>
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #0f172a;
            color: #f8fafc;
        }
        .page-shell {
            display: flex;
            min-height: 100vh;
        }
        .sidebar {
            width: 260px;
            background: #111827;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            padding: 2rem 1.25rem;
            box-sizing: border-box;
        }
        .brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
        }
        .brand-logo {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            background: #3b82f6;
            color: #fff;
            font-weight: 700;
            font-size: 1.15rem;
        }
        .brand-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
        }
        .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .nav-link {
            display: block;
            padding: 0.85rem 1rem;
            border-radius: 0.9rem;
            color: #cbd5e1;
            text-decoration: none;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover,
        .nav-link.active {
            background: rgba(59, 130, 246, 0.15);
            color: #fff;
        }
        .main-content {
            flex: 1;
            padding: 2rem;
            background: linear-gradient(135deg, #1e293b 0%, #111827 100%);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .content {
            max-width: 400px;
            text-align: center;
        }
        .title {
            font-size: clamp(2.5rem, 5vw, 3rem);
            line-height: 1.05;
            margin: 0 0 1rem;
        }
        .copy {
            font-size: 1.05rem;
            line-height: 1.8;
            margin: 0 0 2rem;
            color: #cbd5e1;
        }
        .form-group {
            margin-bottom: 1rem;
            text-align: left;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            color: #f8fafc;
        }
        input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 0.5rem;
            background: rgba(255, 255, 255, 0.08);
            color: #f8fafc;
            font-size: 1rem;
        }
        input::placeholder {
            color: #94a3b8;
        }
        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.95rem 1.8rem;
            border-radius: 999px;
            border: none;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s ease, background-color 0.2s ease;
            background: #3b82f6;
            color: #fff;
            width: 100%;
            margin-top: 1rem;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .back-link {
            display: block;
            margin-top: 1rem;
            color: #93c5fd;
            text-decoration: none;
        }
        .back-link:hover {
            text-decoration: underline;
        }
        .error {
            color: #ef4444;
            margin-bottom: 1rem;
        }
        .success {
            color: #10b981;
            margin-bottom: 1rem;
        }
        @media (max-width: 900px) {
            .page-shell {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
                border-right: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .sidebar-nav {
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
            }
            .nav-link {
                padding: 0.5rem 1rem;
            }
            .main-content {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="page-shell">
        <aside class="sidebar">
            <div class="brand">
                <div class="brand-logo">W</div>
                <div class="brand-title">Website Hero</div>
            </div>
            <nav class="sidebar-nav">
                <a href="/" class="nav-link">Home</a>
                <a href="/get-started" class="nav-link">Get Started</a>
                <a href="/learn-more" class="nav-link">Learn More</a>
                <?php if (!isset($_SESSION['user_id'])): ?>
                <a href="/login" class="nav-link active">Log in</a>
                <a href="/register" class="nav-link">Register</a>
                <?php else: ?>
                <a href="/profile" class="nav-link">Profile</a>
                <a href="/delete-account" class="nav-link">Delete Account</a>
                <a href="/logout" class="nav-link">Log out</a>
                <?php endif; ?>
            </nav>
        </aside>
        <main class="main-content">
            <div class="content">
                <h1 class="title">Log In</h1>
                <p class="copy">
                    Enter your credentials to access your account.
                </p>
                <?php if (isset($error)): ?>
                    <div class="error"><?php echo $error; ?></div>
                <?php endif; ?>
                <?php if ($message): ?>
                    <div class="success"><?php echo $message; ?></div>
                <?php endif; ?>
                <form method="post">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required>
                    </div>
                    <button type="submit" class="button">Log In</button>
                </form>
                <a href="/register" class="back-link">Don't have an account? Register</a>
                <a href="/" class="back-link">Back to Home</a>
            </div>
        </main>
    </div>
</body>
</html></content>