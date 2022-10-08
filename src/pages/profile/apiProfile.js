import Swal from "sweetalert2";
import axios from "axios";

//ACCOUNT

export const handleSubmitAccount = (
  values,
  apiUrl,
  uploadImgUrl,
  user,
  file,
  setUser
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "อยากจะแก้ไขโปรไฟล์ของคุณจริงๆหรอ><",
    icon: "warning",
    cancelButtonText: "ไม่แก้ไข",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, แก้ไขเลย!",
  }).then((result) => {
    if (result.dismiss) return;
    axios
      .post(`${apiUrl}/auth/account.php`, {
        user_id: parseInt(user.user_id),
        firstname: values.firstname,
        lastname: values.lastname,
        uploadImg: file.length > 0 ? uploadImgUrl : null,
        deleteOldImg: user.user_img
          ? file.length > 0
            ? user.user_img
            : null
          : null,
        exist_img: file.length < 1 ? user.user_img : null,
      })
      .then((res) => {
        console.log("data:s: ", res.data);
        if (res.data.success) {
          setUser(res.data.dataUser);
        }
      });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: "ข้อมูลถูกบันทึกเรียบร้อย><",
      showConfirmButton: false,
      timer: 1500,
    });
  });
};

export const handleCancelAccount = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "อยากจะยกเลิกการแก้ไขโปรไฟล์ของคุณจริงๆหรอ><",
    icon: "warning",
    cancelButtonText: "แก้ไขต่อ",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, ยกเลิกเลย!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "ยกเลิกสำเร็จ",
        text: "Your prfile has been canceled.",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  });
};

//PASSWORD
export const handleSubmitPassword = (values, user, apiUrl, setUser) => {
  Swal.fire({
    title: "Are you sure?",
    text: "อยากจะแก้ไขรหัสผ่านของคุณจริงๆหรอ><",
    icon: "warning",
    cancelButtonText: "ไม่แก้ไข",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, แก้ไขเลย!",
  }).then((result) => {
    if (result.dismiss) return;
    axios
      .post(`${apiUrl}/auth/password.php`, {
        user_id: user.user_id,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
      .then((res) => {
        if (res.data.exist) {
          return Swal.fire({
            icon: "error",
            title: "รหัสผ่าน",
            text: res.data.warning,
          });
        }
        if (res.data.success) {
          setUser(res.data.dataUser);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            text: "ข้อมูลถูกบันทึกเรียบร้อย><",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload(false);
        }
      });
  });
};

export const handleCancelPassword = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "อยากจะยกเลิกการแก้ไขรหัสผ่านของคุณจริงๆหรอ><",
    icon: "warning",
    cancelButtonText: "แก้ไขต่อ",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, ยกเลิกเลย!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "ยกเลิกสำเร็จ",
        text: "Your Password has been canceled.",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  });
};
