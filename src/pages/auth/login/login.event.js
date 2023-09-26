import { LoginService } from "./login.service.js";

window.onLogin = function () {
  const inputElements = document.querySelectorAll(".input-form");
  let userModal = {};
  inputElements.forEach((input) => {
    if (input.name) {
      const { name, value } = input;
      userModal[name] = value;
    }
  });
  console.log(111,userModal);
  const loginService = new LoginService();
  const error = loginService.validator(userModal);
  loginService.renderValidator(error);
  if (error.isError) {
    return;
  }
  const response = loginService.login(userModal);
  if(response.status==="success"){
    alert("Đăng nhập thành công")
  }else{
    if(response.status==="fail"){
      alert("Đăng nhập thất bại kiểm tra lại e mail và mật khẩu")
    }
  }
};
