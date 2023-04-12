const VALID_STRING = "Thông tin không hợp lệ";
const NUMBER_STRING = "Chỉ được phép nhập số ở đây";
const NUMBER = /^[0-9]*$/;
const SCORE_VALID = "Điểm phải nằm trong phạm vi từ 0 - 10";

function validPerson() {
  let flag = true;

  // kiểm tra loại người dùng
  let regency = document.querySelector("#loai").selectedIndex;
  if (regency === 0) {
    flag = false;
    document.querySelector("#invalidRegency").innerHTML =
      "Vui lòng chọn loại người dùng";
  } else {
    document.querySelector("#invalidRegency").innerHTML = "";
  }
  let loai = document.querySelector("#loai").value;
  if (loai == "Student") {
    // kiểm tra điểm toán
    let math = document.querySelector("#diemToan").value;
    if (!math) {
      flag = false;
      document.querySelector("#invalidDiemToan").innerHTML = VALID_STRING;
    } else if (Number(math) > 10 || Number(math) < 0) {
      flag = false;
      document.querySelector("#invalidDiemToan").innerHTML = SCORE_VALID;
    } else {
      document.querySelector("#invalidDiemToan").innerHTML = "";
    }

    // kiểm tra điểm hóa
    let chemistry = document.querySelector("#diemHoa").value;
    if (!chemistry) {
      flag = false;
      document.querySelector("#invalidVan").innerHTML = VALID_STRING;
    } else if (Number(chemistry) > 10 || Number(chemistry) < 0) {
      flag = false;
      document.querySelector("#invalidVan").innerHTML = SCORE_VALID;
    } else {
      document.querySelector("#invalidVan").innerHTML = "";
    }

    // kiểm tra điểm lý
    let physics = document.querySelector("#diemLy").value;
    if (!physics) {
      flag = false;
      document.querySelector("#invalidDiemly").innerHTML = VALID_STRING;
    } else if (Number(physics) > 10 || Number(physics) < 0) {
      flag = false;
      document.querySelector("#invalidDiemly").innerHTML = SCORE_VALID;
    } else {
      document.querySelector("#invalidDiemly").innerHTML = "";
    }
  } else if (loai == "Employee") {
    // kiểm tra lương ngày
    let salaryOneDay = document.querySelector("#luongTheoNgay").value;

    if (!salaryOneDay.trim()) {
      flag = false;
      document.querySelector("#invalidluong").innerHTML = VALID_STRING;
    } else if (!salaryOneDay.match(NUMBER)) {
      flag = false;
      document.querySelector("#invalidluong").innerHTML = NUMBER_STRING;
    } else {
      document.querySelector("#invalidluong").innerHTML = "";
    }
    let dayOfWork = document.querySelector("#soNgayLam").value;

    if (!dayOfWork) {
      flag = false;
      document.querySelector("#invalidSoNgay").innerHTML = VALID_STRING;
    } else {
      document.querySelector("#invalidSoNgay").innerHTML = "";
    }
  } else if (loai == "Customer") {
    let invoiceValue = document.querySelector("#triGia").value;

    if (!invoiceValue.trim()) {
      flag = false;
      document.querySelector("#invalidTriGia").innerHTML = VALID_STRING;
    } else if (!invoiceValue.match(NUMBER)) {
      flag = false;
      document.querySelector("#invalidTriGia").innerHTML = NUMBER_STRING;
    } else {
      document.querySelector("#invalidTriGia").innerHTML = "";
    }

    // kiểm tra đánh giá
    let review = document.querySelector("#danhGia").value;

    if (!review) {
      flag = false;
      document.querySelector("#invalidDanhGia").innerHTML = VALID_STRING;
    } else {
      document.querySelector("#invalidDanhGia").innerHTML = "";
    }
    let nameCompany = document.querySelector("#tenCongTy").value;

    if (!nameCompany) {
      flag = false;
      document.querySelector("#invalidtenCongTy").innerHTML = VALID_STRING;
    } else {
      document.querySelector("#invalidtenCongTy").innerHTML = "";
    }
  }
  //-----------------------
  // kiểm tra name
  let name = document.querySelector("#hoTen").value;
  if (!name) {
    flag = false;
    document.querySelector("#invalidTen").innerHTML = VALID_STRING;
  } else {
    document.querySelector("#invalidTen").innerHTML = "";
  }

  // kiểm tra address
  let address = document.querySelector("#diaChi").value;
  if (!address) {
    flag = false;
    document.querySelector("#invalidDiaChi").innerHTML = VALID_STRING;
  } else {
    document.querySelector("#invalidDiaChi").innerHTML = "";
  }

  let id = document.querySelector("#maNguoiDung").value;
  if (id === "") {
    flag = false;
    document.querySelector("#invalidID").innerHTML =
      "Vui lòng nhập id người dùng";
  } else {
    document.querySelector("#invalidID").innerHTML = "";
  }

  // kiểm tra email
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.querySelector("#email").value;
  if (!email) {
    flag = false;
    document.querySelector("#invalidEmail").innerHTML = VALID_STRING;
  } else if (!email.match(mailFormat)) {
    flag = false;
    document.querySelector("#invalidEmail").innerHTML = "Email không hợp lệ";
  } else {
    document.querySelector("#invalidEmail").innerHTML = "";
  }

  // kiểm tra trị giá hóa đơn

  return flag;
}

export { validPerson };
