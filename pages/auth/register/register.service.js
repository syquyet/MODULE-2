import { RegisterRepository } from "./register.repository.js";

export class RegisterService {
  register(userModal) {
    const registerRepository = new RegisterRepository();
    const response = registerRepository.registerUser(userModal);
    return response;
  }

  validator(userModal) {
    const error = {
      isError: false,
      fullname: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
    };
    if (!userModal.fullname) {
      error.isError = true;
      error.fullname = "fullname không được để trống";
    }
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userModal.email.match(validRegex)) {
      error.isError = true;
      error.email = "*nhập đúng định dạng email";
    }
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(userModal.phone) == false) {
      error.isError = true;
      error.phone = "*Định dạng số đt sai, vui lòng nhập lại";
    }
    if (userModal.password.length < 8) {
      error.isError = true;
      error.password = "*mật khẩu 8 ký tự trở lên";
    }
    if (userModal.password !== userModal.repeatPassword) {
      error.isError = true;
      error.repeatPassword = "Mật khẩu không trùng";
    }
    return error;
  }
  renderValidator(error) {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
      for (const key in error) {
        if (key == element.id.slice(6)) {
          element.textContent = error[key];
        }
      }
    });
  }
}
