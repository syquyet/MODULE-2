import { RegisterService } from "./register.service.js";
window.onRegister = function () {
  const inputElements = document.querySelectorAll(".input-form");
    let userModal = {};
  inputElements.forEach((input) => {
    if (input.name) {
      const { name, value } = input;
      userModal[name] = value;
    }
  });
  const registerService = new RegisterService();
  const error = registerService.validator(userModal);
  registerService.renderValidator(error);
  if (error.isError) {
    return;
  }
  const response = registerService.register(userModal);
  if (response.status === "fail") {
    alert("email đã tồn tại vui lòng nhập lại email để đăng ký");
  } else {
    if (response.status === "success") {
      alert("Đăng ký thành công!!!!!!");
    }
  }
};
