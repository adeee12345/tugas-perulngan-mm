function setup() {
  createCanvas(400, 400);
  background(255);
  
  // Menggunakan for loop untuk membuat segitiga bertumpuk
  let size = 200;
  for (let i = 0; i < 10; i++) {
    fill(100 + i * 15, 50, 150 + i * 10, 150); // Warna dengan transparansi
    triangle(width / 2, height / 2 - size / 2, width / 2 - size / 2, height / 2 + size / 2, width / 2 + size / 2, height / 2 + size / 2);
    size -= 20; // Mengurangi ukuran segitiga
  }
}
