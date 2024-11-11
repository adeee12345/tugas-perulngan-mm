function setup() {
  createCanvas(400, 400);
  background(255);
  
  // Menggunakan while loop untuk membuat pola zig-zag
  let y = 0;
  let direction = 1;
  let x = 50;
  while (y < height) {
    stroke(50, 100, 200);
    line(x, y, x + direction * 50, y + 204); // Menggambar garis zig-zag
    y += 2;
    direction *= -1; // Ubah arah zig-zag
    x += 3; // Geser posisi horizontal secara bertahap
  }
}
