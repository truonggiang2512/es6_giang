import {
  CustomerList,
  EmployeeList,
  ListPerson,
  StudentList,
} from "./ListPerson.js";

document.getElementById("selLoai").onchange = (event) => {
  const listPerson = JSON.parse(localStorage.getItem("DSP"));

  // lấy danh sách từ aplication về listPerson
  const newList = new ListPerson();
  const newStu = new StudentList();
  const newEpl = new EmployeeList();
  const newCus = new CustomerList();
  newList.listPerson = listPerson;
  newStu.listPerson = listPerson;
  newEpl.listPerson = listPerson;
  newCus.listPerson = listPerson;
  if (event.target.value !== "all") {
    const personRegency = listPerson.filter(
      (person) => person.loai == event.target.value
    );

    newList.listPerson = personRegency;
    newStu.listPerson = personRegency;
    newEpl.listPerson = personRegency;
    newCus.listPerson = personRegency;
  }
  switch (event.target.value) {
    case "Student":
      newStu.renderStudent("#tbodyFood");
      break;
    case "Employee":
      newEpl.renderEmployee("#tbodyFood");
      break;
    case "Customer":
      newCus.renderCustomer("#tbodyFood");
      break;
    default:
      newList.renderTable("#tbodyFood");
      break;
  }
};
