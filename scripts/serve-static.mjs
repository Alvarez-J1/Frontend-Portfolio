import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.argv[2] ?? "out");
const port = Number(process.env.PORT ?? process.argv[3] ?? 3000);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function resolveRequest(url) {
  const safePath = normalize(decodeURIComponent(url.split("?")[0] ?? "/")).replace(
    /^(\.\.[/\\])+/,
    "",
  );
  const requested = resolve(join(root, safePath));
  if (!requested.startsWith(root)) {
    return null;
  }

  if (existsSync(requested) && statSync(requested).isFile()) {
    return requested;
  }

  const withIndex = join(requested, "index.html");
  if (existsSync(withIndex)) {
    return withIndex;
  }

  return join(root, "index.html");
}

createServer((request, response) => {
  const filePath = resolveRequest(request.url ?? "/");
  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Portfolio preview running at http://localhost:${port}`);
});
