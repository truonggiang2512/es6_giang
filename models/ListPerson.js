import { Customer, Employee, Student } from "./Person.js";

export class ListPerson {
  listPerson = []; // [{,,,},{...},{....}]
  //   listPersonSort = listPerson.sort((a, b) => a.localeCompare(b));

  addPerson(pers) {
    this.listPerson.push(pers);
  }

  renderTable(selectorTbody) {
    let htmlContent = "";
    let listPersonSort = this.listPerson.sort(compare);
    for (let pers of listPersonSort) {
      htmlContent += `
      <tr>
      <td>${pers.maNguoiDung}</td>
      <td>${pers.loai}</td>
      <td>${pers.hoTen}</td>
      <td>${pers.email}</td>
      <td>${pers.diaChi}</td>
      <td>
      <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="updatePerson(
          '${pers.maNguoiDung}'
        )">Sửa</button>
        <button class="btn btn-danger my-1" onclick="deletePerSon('${pers.maNguoiDung}')">Xóa</button>
        </td>

      </tr>
      `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
    return htmlContent;
  }
  saveListPerson() {
    let stringDSP = JSON.stringify(this.listPerson);
    localStorage.setItem("DSP", stringDSP);
  }
  getPerson() {
    if (localStorage.getItem("DSP")) {
      let stringDSP = localStorage.getItem("DSP");
      this.listPerson = JSON.parse(stringDSP);
      this.listPerson.sort(compare);
      console.log(this.listPerson);
    }
    function compare(a, b) {
      // Dùng toUpperCase() để không phân biệt ký tự hoa thường
      const hoTenA = a.hoTen.toUpperCase();
      const hoTenB = b.hoTen.toUpperCase();

      let comparison = 0;
      if (hoTenA > hoTenB) {
        comparison = 1;
      } else if (hoTenA < hoTenB) {
        comparison = -1;
      }
      return comparison;
    }
  }
  xoaPerSon(id) {
    for (let index in this.listPerson) {
      if (this.listPerson[index].maNguoiDung === id) {
        this.listPerson.splice(index, 1);
        break;
      }
    }
  }

  // Sửa
  Sua(id) {
    for (let pers of this.listPerson) {
      if (pers.maNguoiDung === id) {
        console.log(pers);
        return pers;
      }
    }
    return undefined;
  }
  // update
  capNhat(persCapNhat) {
    for (let pers of this.listPerson) {
      if (pers.maNguoiDung === persCapNhat.maNguoiDung) {
        for (let key in pers) {
          pers[key] = persCapNhat[key];
        }
      }
    }
  }
}
export class StudentList {
  listPerson = [];
  themDanhSach(std) {
    this.listPerson.push(std);
  }
  renderStudent(selectorTbody) {
    let htmlContent = "";
    let listPersonSort = this.listPerson.sort(compare);
    for (let son of listPersonSort) {
      let std = new Student();
      Object.assign(std, son);
      htmlContent += `
          <tr>
            <td>${std.maNguoiDung}</td>
            <td>${std.loai}</td>
            <td>${std.hoTen}</td>
            <td>${std.diaChi}</td>
            <td>${
              std.email
            }</td> <td class="ms-2">${std.TinhDiemTrungBinh()}</td>
            <td></td>
            <td>
            <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="updatePerson('${
              std.maNguoiDung
            }')">Sửa</button>
            <button class="btn btn-danger my-1" onclick="deletePerSon('${
              std.maNguoiDung
            }')">Xóa</button>
          </td>
         
          </tr>
        `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
export class EmployeeList {
  listPerson = [];
  themDanhSach(epl) {
    this.listPerson.push(epl);
  }
  renderEmployee(selectorTbody) {
    let htmlContent = "";
    let listPersonSort = this.listPerson.sort(compare);
    for (let son of listPersonSort) {
      let epl = new Employee();
      Object.assign(epl, son);
      console.log(epl);
      htmlContent += `
        <tr>
         <td>${epl.maNguoiDung}</td>
         <td>${epl.loai}</td>
         <td>${epl.hoTen}</td>
         <td>${epl.diaChi}</td>
         <td>${epl.email}</td>
         <td></td>
           <td>${epl.tinhTienLuong()}</td>
         <td>
         <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="updatePerson(
             '${epl.maNguoiDung}'
           )">Sửa</button>
           <button class="btn btn-danger my-1" onclick="deletePerSon('${
             epl.maNguoiDung
           }')">Xóa</button>
           </td>
           <td></td>
         
  
        </tr>
        `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
export class CustomerList {
  listPerson = [];
  themDanhSach(cus) {
    this.listPerson.push(cus);
  }
  renderCustomer(selectorTbody) {
    let htmlContent = "";
    let listPersonSort = this.listPerson.sort(compare);
    for (let son of listPersonSort) {
      let cus = new Customer();
      Object.assign(cus, son);
      console.log(cus);
      htmlContent += `
            <tr>
             <td>${cus.maNguoiDung}</td>
             <td>${cus.loai}</td>
             <td>${cus.hoTen}</td>
             <td>${cus.diaChi}</td>
             <td>${cus.email}</td>
             <td>
             <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="updatePerson(
                 '${cus.id}'
               )">Sửa</button>
               <button class="btn btn-danger my-1" onclick="deletePerSon('${cus.id}')">Xóa</button>
               </td>
                          
               </td>
          <tr>
          
            `;
    }
    document.querySelector(selectorTbody).innerHTML = htmlContent;
  }
}
function compare(a, b) {
  // Dùng toUpperCase() để không phân biệt ký tự hoa thường
  const hoTenA = a.hoTen.toUpperCase();
  const hoTenB = b.hoTen.toUpperCase();

  let comparison = 0;
  if (hoTenA > hoTenB) {
    comparison = 1;
  } else if (hoTenA < hoTenB) {
    comparison = -1;
  }
  return comparison;
}
