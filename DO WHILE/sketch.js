function setup() {
  createCanvas(400, 400);
  background(255);
  
  // Menggunakan do...while loop untuk membuat pola garis melingkar
  let angle = 0;
  do {
    let x1 = width / 2 + cos(angle) * 100;
    let y1 = height / 2 + sin(angle) * 100;
    let x2 = width / 2 + cos(angle) * 200;
    let y2 = height / 2 + sin(angle) * 200;
    
    stroke(100, 50, 200, 150); // Warna dengan transparansi
    line(x1, y1, x2, y2); // Menggambar garis melingkar
    
    angle += PI / 20; // Ubah sudut untuk garis berikutnya
  } while (angle < TWO_PI);
}
