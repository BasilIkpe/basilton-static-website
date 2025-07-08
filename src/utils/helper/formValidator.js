import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (msg) => {
  return toast.error(msg);
};

export const formValidation = (form) => {
  for (const [key, value] of Object.entries(form)) {
    if (value === "") {
      alert("Error");
      notify(`${key} cannot be left blank`);
      return false;
    }
  }
  return true;
};
