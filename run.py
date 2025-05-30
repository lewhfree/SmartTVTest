from pathlib import Path
import zipfile
import http.server
import socketserver
import os

zip_filename = 'zip.zip'

zip_path = Path(zip_filename)

if zip_path.exists():
    zip_path.unlink()


excluded_files = {'widgetlist.xml', zip_filename, ".gitignore", ".project", "run.py"}
excluded_dirs = {'__pycache__', '.git', ".settings"}

base_dir = Path('.')

with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for file_path in base_dir.rglob('*'):
        if any(part in excluded_dirs for part in file_path.parts):
            continue

        if file_path.is_file() and file_path.name in excluded_files:
            continue

        zipf.write(file_path, file_path.relative_to(base_dir))

class UploadAndServeHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        filename = self.headers.get('X-Filename', 'upload.dat')

        data = self.rfile.read(content_length)

        # Save uploaded file
        with open(filename, 'wb') as f:
            f.write(data)

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Upload successful\n')

# Use port 80 (you may need sudo)
PORT = 80
with socketserver.TCPServer(("", PORT), UploadAndServeHandler) as httpd:
    print(f"Serving on port {PORT} (GET + POST supported)")
    httpd.serve_forever()

#Handler = http.server.SimpleHTTPRequestHandler
#
#with socketserver.TCPServer(("", 80), Handler) as httpd:
#    httpd.serve_forever()
