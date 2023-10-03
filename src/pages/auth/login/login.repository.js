import {
  getDataFormLocalStorage,
  setDataFormLocalStorage,
} from "../../../../utils/method.js";

export class LoginRepository {
  loginUser(userModal) {
    const accouts = getDataFormLocalStorage("accounts");
    let user;
    for (const userDB of accouts) {
      if (userDB.email === userModal.email) {
        if (userDB.password === userModal.password) {
          user = { ...userModal };
          break;
        }
      }
    }
    console.log(4444, user);
    if (user) {
      delete user.password;
      setDataFormLocalStorage("userLogin", user);
      return {
        status: "success",
      };
    }
    return {
      status: "fail",
    };
  }
}
