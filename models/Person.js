export class Person {
  constructor(hoTen, diaChi, maNguoiDung, email, loai) {
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.maNguoiDung = maNguoiDung;
    this.email = email;
    this.loai = loai;
  }
}
export class Student extends Person {
  constructor(
    hoTen,
    diaChi,
    maNguoiDung,
    email,
    diemToan,
    diemLy,
    diemHoa,
    loai
  ) {
    super(hoTen, diaChi, maNguoiDung, email);
    this.diemToan = diemToan;
    this.diemHoa = diemHoa;
    this.diemLy = diemLy;
    this.loai = loai;
  }

  TinhDiemTrungBinh() {
    let diemTrungBinh =
      (Number(this.diemToan) + Number(this.diemHoa) + Number(this.diemLy)) / 3;
    return diemTrungBinh;
  }
}
export class Employee extends Person {
  constructor(hoTen, diaChi, maNguoiDung, email, soNgayLam, luongTheoNgay) {
    super(hoTen, diaChi, maNguoiDung, email);
    this.soNgayLam = soNgayLam;
    this.luongTheoNgay = luongTheoNgay;
  }
  tinhTienLuong() {
    let tienLuong = this.luongTheoNgay * this.soNgayLam;
    return tienLuong;
  }
}
export class Customer extends Person {
  constructor(hoTen, diaChi, maNguoiDung, email, tenCongTy, triGia, danhGia) {
    super(hoTen, diaChi, maNguoiDung, email);
    this.tenCongTy = tenCongTy;
    this.triGia = triGia;
    this.danhGia = danhGia;
  }
}
