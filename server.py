from http.server import HTTPServer, SimpleHTTPRequestHandler

server = HTTPServer(("localhost", 8000), SimpleHTTPRequestHandler)

print("Сервер запущен: http://localhost:8000")

server.serve_forever()