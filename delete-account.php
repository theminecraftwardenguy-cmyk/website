<?php
error_reporting(0);
ini_set('display_errors', '0');
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: /login');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['confirm']) && $_POST['confirm'] === 'yes') {
        $db = new SQLite3('users.db');
        $stmt = $db->prepare('DELETE FROM users WHERE id = :id');
        $stmt->bindValue(':id', $_SESSION['user_id'], SQLITE3_INTEGER);
        $stmt->execute();

        session_destroy();
        header('Location: /login');
        exit();
    }

    header('Location: /profile');
    exit();
}
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
    <title>Delete Account - Website Hero</title>
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
            max-width: 580px;
            width: 100%;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            padding: 2rem;
        }
        .title {
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.05;
            margin: 0 0 1rem;
        }
        .copy {
            font-size: 1.05rem;
            line-height: 1.8;
            margin: 0 0 2rem;
            color: #cbd5e1;
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
            color: #fff;
            margin: 0.5rem;
            min-width: 140px;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .button-yes {
            background: #10b981;
        }
        .button-no {
            background: #ef4444;
        }
        .back-link {
            display: block;
            margin-top: 1.25rem;
            color: #93c5fd;
            text-decoration: none;
        }
        .back-link:hover {
            text-decoration: underline;
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
                <a href="/profile" class="nav-link">Profile</a>
                <a href="/logout" class="nav-link">Log out</a>
                <a href="/delete-account" class="nav-link active">Delete Account</a>
            </nav>
        </aside>
        <main class="main-content">
            <div class="content">
                <h1 class="title">Are you sure you want to delete your account?</h1>
                <p class="copy">
                    This action cannot be undone. Please choose "Yes" to confirm or "No" to keep your account.
                </p>
                <form method="post">
                    <button type="submit" name="confirm" value="yes" class="button button-yes">Yes</button>
                    <button type="submit" name="confirm" value="no" class="button button-no">No</button>
                </form>
                <a href="/profile" class="back-link">Back to Profile</a>
            </div>
        </main>
    </div>
</body>
</html>
