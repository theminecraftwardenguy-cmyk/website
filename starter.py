from flask import Flask, request, Response, redirect, session
import os
import subprocess
import urllib.parse

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = 'your-secret-key-change-this'
ROOT = os.path.dirname(__file__) or '.'
PHP_CGI = 'php-cgi'


def parse_cgi_output(output):
    header_data, sep, body = output.partition('\r\n\r\n')
    if not sep:
        header_data, sep, body = output.partition('\n\n')

    headers = {}
    cookies = []
    for line in header_data.splitlines():
        if ':' not in line:
            continue
        name, value = line.split(':', 1)
        name = name.strip().lower()
        value = value.strip()
        if name == 'set-cookie':
            cookies.append(value)
        else:
            headers[name] = value
    return headers, cookies, body


def run_php(script_name):
    path = request.path
    query_string = request.query_string.decode('utf-8')
    input_data = None
    if request.method == 'POST':
        input_data = urllib.parse.urlencode(request.form)

    env = os.environ.copy()
    env.update({
        'GATEWAY_INTERFACE': 'CGI/1.1',
        'SERVER_PROTOCOL': 'HTTP/1.1',
        'REQUEST_METHOD': request.method,
        'REQUEST_URI': request.full_path,
        'QUERY_STRING': query_string,
        'PATH_INFO': path,
        'SCRIPT_NAME': path,
        'SCRIPT_FILENAME': os.path.join(ROOT, script_name),
        'DOCUMENT_ROOT': ROOT,
        'SERVER_NAME': request.host.split(':')[0],
        'SERVER_PORT': request.host.split(':')[1] if ':' in request.host else '80',
        'HTTP_HOST': request.host,
        'REDIRECT_STATUS': '200',
        'CONTENT_TYPE': request.content_type or 'application/x-www-form-urlencoded',
        'CONTENT_LENGTH': str(len(input_data.encode('utf-8')) if input_data else 0),
        'HTTP_COOKIE': session.get('php_cookie', ''),
    })

    result = subprocess.run([PHP_CGI, '-f', script_name], cwd=ROOT, env=env, input=input_data, capture_output=True, text=True)
    headers, cookies, body = parse_cgi_output(result.stdout)

    if cookies:
        session['php_cookie'] = '; '.join(cookies)

    if 'location' in headers:
        response = redirect(headers['location'])
    else:
        status_code = int(headers.get('status', '200').split()[0])
        response = Response(body, status=status_code)

    for name, value in headers.items():
        if name not in ('status', 'location'):
            response.headers[name] = value

    for cookie in cookies:
        response.headers.add('Set-Cookie', cookie)

    if 'location' in headers:
        response.headers.add('Content-Type', headers.get('content-type', 'text/html'))
        response.set_data(body)

    return response


@app.route('/')
def index():
    return run_php('index.php')


@app.route('/get-started')
def get_started():
    return run_php('get-started.php')


@app.route('/learn-more')
def learn_more():
    return run_php('learn-more.php')


@app.route('/login', methods=['GET', 'POST'])
def login():
    return run_php('login.php')


@app.route('/register', methods=['GET', 'POST'])
def register():
    return run_php('register.php')


@app.route('/profile', methods=['GET', 'POST'])
def profile():
    return run_php('profile.php')


@app.route('/logout')
def logout():
    return run_php('logout.php')


@app.route('/delete-account', methods=['GET', 'POST'])
def delete_account():
    return run_php('delete-account.php')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
