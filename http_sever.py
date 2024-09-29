import http.server
import socketserver
import os

"""
this is the easy version of http sever, it's able to connect to all pages 
of web page design but need to be careful about the website security
"""


"""
this is the easy version of http sever, it's able to connect to all pages 
of web page design but need to be careful about the website security
"""


PORT = 5000
DIRECTORY = "."

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # 如果请求的是根路径（/），则返回index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()