import socket, os, mimetypes, threading

ROOT = "/Users/guadalupe/Documents/morning-math"

TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css":  "text/css; charset=utf-8",
    ".js":   "application/javascript; charset=utf-8",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".ico":  "image/x-icon",
}

def handle(conn):
    try:
        data = b""
        while b"\r\n\r\n" not in data:
            chunk = conn.recv(4096)
            if not chunk: break
            data += chunk
        line = data.split(b"\r\n")[0].decode()
        parts = line.split()
        if len(parts) < 2:
            conn.close(); return
        path = parts[1].split("?")[0]
        if path == "/": path = "/index.html"
        filepath = ROOT + path
        if os.path.isfile(filepath):
            ext = os.path.splitext(filepath)[1]
            ct = TYPES.get(ext, "application/octet-stream")
            with open(filepath, "rb") as f:
                body = f.read()
            resp = (f"HTTP/1.1 200 OK\r\nContent-Type: {ct}\r\n"
                    f"Content-Length: {len(body)}\r\nConnection: close\r\n\r\n").encode()
            conn.sendall(resp + body)
        else:
            msg = b"Not Found"
            conn.sendall(b"HTTP/1.1 404 Not Found\r\nContent-Length: 9\r\nConnection: close\r\n\r\nNot Found")
    except Exception as e:
        pass
    finally:
        conn.close()

srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
srv.bind(("", 5500))
srv.listen(16)
while True:
    conn, _ = srv.accept()
    threading.Thread(target=handle, args=(conn,), daemon=True).start()
