// import http from "node:http";
import express from "express";
import { writeFile } from "node:fs/promises";
import { rename } from "node:fs/promises";
import { mkdir } from "node:fs/promises";

// const server = http.createServer((req, res) => {
//   if (req.url === "/a" && req.method === "GET") {
//     res.end("Hello world");
//   } else {
//     res.end("Not found.");
//   }
// });
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/file", async () => {
  await mkdir("./data.txt");
});

app.get("/api/ubah", async () => {
  await rename("./data.txt", "./data");
});

app.get("/api/tampil", async (req, res) => {
  await writeFile("./data/data.txt", "Tri wulandari", "UTF8");
  res.send("berhasil");
});

app.listen(3000);

console.log("server berjalan di http://localhost:3000");
