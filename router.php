<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

$routes = [
    '/' => '/index.php',
    '/index.html' => '/index.php',
    '/login' => '/login.php',
    '/login/' => '/login.php',
    '/register' => '/register.php',
    '/register/' => '/register.php',
    '/profile' => '/profile.php',
    '/profile/' => '/profile.php',
    '/logout' => '/logout.php',
    '/logout/' => '/logout.php',
    '/delete-account' => '/delete-account.php',
    '/delete-account/' => '/delete-account.php',
    '/get-started' => '/get-started.html',
    '/get-started/' => '/get-started.html',
    '/learn-more' => '/learn-more.html',
    '/learn-more/' => '/learn-more.html',
];

if (isset($routes[$uri])) {
    return require __DIR__ . $routes[$uri];
}

$path = __DIR__ . $uri;
if ($uri !== '/' && file_exists($path)) {
    return false;
}

header("HTTP/1.1 404 Not Found");
echo "404 Not Found";
return null;
?>