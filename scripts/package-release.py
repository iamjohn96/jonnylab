"""Package only the static export for Cloudflare Pages direct upload."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path(__file__).resolve().parents[1]
revision = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()
if subprocess.check_output(["git", "status", "--porcelain"], cwd=root, text=True).strip():
    raise SystemExit("Commit source changes before packaging a traceable release.")
output = root / "out"
files = sorted(p for p in output.rglob("*") if p.is_file())
if not (output / "index.html").exists() or not files:
    raise SystemExit("Missing static export: run npm run release.")
if len(files) > 1000 or any(p.stat().st_size > 25 * 1024 * 1024 for p in files):
    raise SystemExit("Export exceeds the dashboard direct-upload limits; review before uploading.")
if any(p.is_symlink() or any(part.startswith(".env") for part in p.relative_to(output).parts) for p in files):
    raise SystemExit("Unexpected private or linked file in export.")
release = root / ".releases" / revision[:12]
release.mkdir(parents=True, exist_ok=True)
archive = release / "jonnylab.zip"
with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as z:
    for path in files:
        z.write(path, path.relative_to(output).as_posix())
manifest = {"revision": revision, "file_count": len(files), "archive_sha256": hashlib.sha256(archive.read_bytes()).hexdigest(), "files": {p.relative_to(output).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest() for p in files}}
(release / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
print(archive)
print(f"{len(files)} static files; manifest saved alongside archive, outside public output.")
