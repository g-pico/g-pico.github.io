import http.server
import socketserver
import os
from time import time

"""
this sever may have better security capability, but not sure why
it can't enter the product page .... 
still pending for issue checking 
"""


PORT = 80
DIRECTORY = "."
RATE_LIMIT_SECONDS = 1  # 限制每个 IP 每 1 秒只能发出一次请求

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    last_request_time = {}

    def __init__(self, *args, **kwargs):
        '''初始化 HTTP 请求处理程序，设置目录为指定的 DIRECTORY'''
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        '''处理 GET 请求，检查路径是否合法，若非法则导向首页'''
        # 如果请求的是根路径（/），则返回index.html
        if self.path == '/':
            self.path = '/index.html'

        # 路径安全检查
        sanitized_path = self.sanitize_path(self.path)
        if sanitized_path is None:
            self.send_error(400, "Bad Request: Path traversal detected")
            return
        
        # 请求速率限制
        client_ip = self.client_address[0]
        now = time()
        if client_ip in self.last_request_time and now - self.last_request_time[client_ip] < RATE_LIMIT_SECONDS:
            self.send_error(429, "Too Many Requests")
            return
        self.last_request_time[client_ip] = now
        
        # 取得实际文件路径
        requested_path = self.translate_path(self.path)
        
        # 检查文件是否存在且在指定目录中
        if not os.path.exists(requested_path) or not requested_path.startswith(os.path.abspath(DIRECTORY)):
            # 如果文件不存在或超出指定目录，导向首页
            self.path = '/index.html'
        
        # 调用父类的 do_GET 方法以处理请求
        return super().do_GET()

    def sanitize_path(self, path):
        '''禁止路径穿越'''
        sanitized_path = os.path.normpath(path)
        if ".." in sanitized_path:
            return None  # 禁止路径穿越
        return sanitized_path

    def list_directory(self, path):
        '''禁止目录列出'''
        self.send_error(403, "Directory listing not allowed")
        return None

    def log_message(self, format, *args):
        '''日志记录与监控，日志存放在根目录下'''
        log_file_path = os.path.join(DIRECTORY, "server.log")
        with open(log_file_path, "a") as log_file:
            log_file.write("%s - - [%s] %s\n" %
                           (self.client_address[0],
                            self.log_date_time_string(),
                            format % args))

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
