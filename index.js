// index.js

const http = require("http");
const usaha = require("./data");
const { generateHtml } = require("./utils");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(generateHtml("Selamat Datang", `<p>Selamat datang di <strong>${usaha.nama}</strong>!</p>`));
  } else if (req.url === "/info") {
    res.end(generateHtml("Informasi Usaha", `<p>${usaha.deskripsi}</p>`));
  } else if (req.url === "/menu" || req.url === "/services") {
    const daftar = usaha.layanan.map(item => `<li>${item}</li>`).join("");
    res.end(generateHtml("Daftar Layanan", `<ul>${daftar}</ul>`));
  } else if (req.url === "/open") {
    res.end(generateHtml("Jam Operasional", `<p>${usaha.jamOperasional}</p>`));
  } else {
    res.statusCode = 404;
    res.end(generateHtml("404 - Not Found", `<p>Halaman tidak ditemukan.</p>`));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
