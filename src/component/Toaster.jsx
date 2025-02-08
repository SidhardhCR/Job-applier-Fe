import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to show toast messages from anywhere
export const triggerToast = (message, type = "info") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

// Main component that holds the ToastContainer
export default function Toaster() {
  return <ToastContainer />
}
