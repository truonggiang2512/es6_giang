import {
  CustomerList,
  EmployeeList,
  ListPerson,
  StudentList,
} from "../models/ListPerson.js";
import { Person } from "../models/Person.js";
import { validPerson } from "../models/Validate.js";
document.querySelector("#loai").addEventListener("change", showOnChange);
function showOnChange(eve) {
  let cardMenu = eve.target;
  console.log(eve);
  console.log(cardMenu);
  let types = document.getElementsByClassName("type");
  for (let index = 0; index < types.length; index++) {
    types[index].style.display = "none";
  }

  document.getElementById(cardMenu.value).style.display = "inline-block";
}
var list = new ListPerson();
var stu = new StudentList();
var cus = new CustomerList();
var empl = new EmployeeList();
list.getPerson();

list.renderTable("#tbodyFood");
document.querySelector("#btnThemMon").onclick = function () {
  let person = new Person();
  var arrInput = document.querySelectorAll(
    "#person input,#loai,#Student input ,#Employee input,#Customer input ,#danhGia"
  );
  for (let per of arrInput) {
    let { id, value } = per;
    person[id] = value;
  }
  if (!validPerson()) {
    return;
  }

  list.addPerson(person);
  list.renderTable("#tbodyFood");
  list.saveListPerson();
};

window.deletePerSon = function (id) {
  list.xoaPerSon(id);
  list.renderTable("#tbodyFood");
  list.saveListPerson();
};

window.updatePerson = function (id) {
  document.querySelector("#btnThem").click();
  let personUpdate = list.Sua(id);
  if (personUpdate) {
    var arrInput = document.querySelectorAll(
      "#person input,#loai,#Student input ,#Employee input,#Customer input ,#danhGia"
    );
    for (let input of arrInput) {
      let { id } = input;
      input.value = personUpdate[id];
    }
    if (personUpdate.loai == "Student") {
      document.getElementById("Student").style.display = "inline-block";
      document.getElementById("Customer").style.display = "none";
      document.getElementById("Employee").style.display = "none";
      return;
    }
    if (personUpdate.loai == "Employee") {
      document.getElementById("Student").style.display = "none";
      document.getElementById("Customer").style.display = "none";
      document.getElementById("Employee").style.display = "inline-block";
      return;
    }
    if (personUpdate.loai == "Customer") {
      document.getElementById("Customer").style.display = "inline-block";
      document.getElementById("Student").style.display = "none";
      document.getElementById("Employee").style.display = "none";
      return;
    }
  }
};
document.querySelector("#btnCapNhat").onclick = function () {
  var perUpdate = new Person();
  let arrInput = document.querySelectorAll(
    "#person input,#loai,#Student input ,#Employee input,#Customer input ,#danhGia"
  );
  for (let input of arrInput) {
    let { id, value } = input;
    perUpdate[id] = value;
  }
  list.capNhat(perUpdate);
  list.renderTable("#tbodyFood");
  list.saveListPerson();
  resetForm();
};

function resetForm() {
  document.querySelector("#loai").value = "Chọn loại người dùng";
  document.querySelector("#hoTen").value = "";
  document.querySelector("#diaChi").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#maNguoiDung").value = "";

  document.querySelector("#diemToan").value = "";
  document.querySelector("#diemLy").value = "";
  document.querySelector("#diemHoa").value = "";

  document.querySelector("#soNgayLam").value = "";
  document.querySelector("#luongTheoNgay").value = "";
  document.querySelector("#tenCongTy").value = "";

  document.querySelector("#triGia").value = "";
  document.querySelector("#danhGia").value = "";
}
