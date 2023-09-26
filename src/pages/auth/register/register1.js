const formElement = document.querySelector("form");
const inputElements = formElement.querySelectorAll(".input-form");

let user = {};
// const names = [];

inputElements.forEach((input) => {
  // names.push(input.name);
  // console.log(names);
  input.addEventListener("input", (event) => {
    // lắng nghe suwk kiện input lấy name và value
    const { name, value } = event.target;
    console.log({ name, value } );
    user[name] = value;
    const error = validator(user);
    renderValidator(error);
    
  });
});
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const error = validator(user);
  renderValidator(error);
  if (error.isError) {
    return;
  }
  const accountsDB = JSON.parse(localStorage.getItem("accounts")) || [];
 
  //   kiểm tra email đã tồn tại trong dữ liệu chưa
  let isExist = false;
  for (const account of accountsDB) {
    if (account.email === user.email) {
      isExist = true;
      break;
    }
  }
  //   nếu chưa tồn tại thì thêm user vào mảng và lưu lại
  if (!isExist) {
    delete user.repeatPassword;
    accountsDB.push(user);
    localStorage.setItem("accounts", JSON.stringify(accountsDB));
    //  navigation("");
  } else {
    error.isError = true;
    error.email = "*email đã tồn tại vui lòng đăng nhập hoặc đăng ký email mới";
    renderValidator(error);
  }
});

function validator(user) {
  const error = {
    isError: false,
    fullname: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  };
  if (!user.fullname) {
    error.isError = true;
    error.fullname = "fullname không được để trống";
  }
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!user.email.match(validRegex)) {
    error.isError = true;
    error.email = "*nhập đúng định dạng email";
  }
  const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (vnf_regex.test(user.phone) == false) {
    error.isError = true;
    error.phone = "*Định dạng số đt sai, vui lòng nhập lại";
  }
  if (user.password.length<8) {
    error.isError = true;
    error.password = "*mật khẩu 8 ký tự trở lên";
  }
  if (user.password !== user.repeatPassword) {
    error.isError = true;
    error.repeatPassword = "Mật khẩu không trùng";
  }
 return error;
}
function renderValidator(error) {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    for (const key in error) {
      if (key == element.id.slice(6)) {
        element.textContent = error[key];
      }
    }
  });
}
