import { getDataFormLocalStorage, setDataFormLocalStorage } from "../../../../utils/method.js";

export class RegisterRepository {
  registerUser(userModal) {
    const accountsDB = getDataFormLocalStorage("accounts");
    for (const user of accountsDB) {
      if (user.email === userModal.email) {
        return {
          status: "fail",
          data: "",
        };
      }
    }
    delete userModal.repeatPassword;
    accountsDB.push(userModal);
    setDataFormLocalStorage("accounts", accountsDB);
    return {
      status: "success",
      data: "",
    };
  }
}
