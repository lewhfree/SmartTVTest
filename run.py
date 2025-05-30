from pathlib import Path
import zipfile
import http.server
import socketserver

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

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", 80), Handler) as httpd:
    httpd.serve_forever()
