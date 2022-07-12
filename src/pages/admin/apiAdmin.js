import Swal from "sweetalert2";
import axios from "axios";

//MEMBER
export const addListMember = (apiUrl, setListMember) => {
  axios.get(`${apiUrl}/user/fetchAllUser.php`).then((res) => {
    console.log("res: ", typeof res.data.dataUser);
    const rows = res.data.dataUser.map((users) => ({
      id: users.user_id,
      user_firstname: users.user_firstname,
      user_lastname: users.user_lastname,
      user_email: users.user_email,
      user_datetime: users.user_datetime,
      user_urole: users.user_urole,
      user_img: users.user_img,
      user_password: users.user_password,
      user_firstname_index: users.user_firstname[0],
    }));
    console.log("list Members:", rows);
    setListMember(rows);
  });
};

export const handleApiDeleteMember = (
  username,
  apiUrl,
  id,
  listMember,
  setRefreshMemberWhenDelete
) => {
  Swal.fire({
    title: "Are you sure?",
    text: `อยากจะลบบัญชีของ${username}จริงๆหรอ><`,
    icon: "warning",
    cancelButtonText: "ไม่ลบ",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, ลบเลย!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(`${apiUrl}/user/deleteUser.php`, {
          user_id: id,
        })
        .then((res) => {
          if (res.data.success) {
            const newArrayListMember = [...listMember];
            const findIndex = newArrayListMember.findIndex(
              (object) => object.id === id
            );
            newArrayListMember.splice(findIndex, 1);
            setRefreshMemberWhenDelete(newArrayListMember.length);
            Swal.fire({
              position: "center",
              icon: "success",
              title: `บัญชีถูกลบแล้ว`,
              text: `${username} Account has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  });
};

//MEMBER EDIT
export const handleSubmitEditMember = (
  values,
  memberSelected,
  apiUrl,
  uploadImgUrl,
  file
) => {
  Swal.fire({
    title: "Are you sure?",
    text: `อยากจะแก้ไขโปรไฟล์ของ${memberSelected.user_firstname}จริงๆหรอ><`,
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
        user_id: parseInt(memberSelected.id),
        role: !values.role ? memberSelected.user_urole : values.role,
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        uploadImg: file.length > 0 ? uploadImgUrl : null,
        deleteOldImg: memberSelected.user_img
          ? file.length > 0
            ? memberSelected.user_img
            : null
          : null,
        exist_img: file.length < 1 ? memberSelected.user_img : null,
      })
      .then((res) => {
        console.log("data:s: ", res.data);
        if (res.data.success) {
          window.location.reload();
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

export const handleCancelEditMember = (memberSelected) => {
  Swal.fire({
    title: "Are you sure?",
    text: `อยากจะยกเลิกการแก้ไขโปรไฟล์ของ${memberSelected.user_firstname}จริงๆหรอ><`,
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
        text: `${memberSelected.user_firstname} prfile has been canceled.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  });
};

//MEMBER RECIPE
export const addListRecipe = (apiUrl, setListMemberIsRecipe) => {
  axios.get(`${apiUrl}/user/fetchMemberIsRecipe.php`).then((res) => {
    if (res.data.success) {
      console.log("res: ", typeof res.data.dataUser);
      const rows = res.data.dataUser.map((recipes) => ({
        id: recipes.recipe_id,
        recipe_id: recipes.recipe_id,
        recipe_name: recipes.recipe_name,
        recipe_description: recipes.recipe_description,
        user_firstname: recipes.user_firstname,
        user_lastname: recipes.user_lastname,
        user_id: recipes.user_id,
        recipe_datetime: recipes.recipe_datetime,
        recipe_img: recipes.recipe_img,
        recipe_amount: recipes.recipe_amount,
        recipe_duration_hr: recipes.recipe_duration_hr,
        recipe_duration_m: recipes.recipe_duration_m,
      }));
      setListMemberIsRecipe(rows);
    }
  });
};

export const handleDeleteRecipe = (
  apiUrl,
  recipe_name,
  recipe_id,
  recipe_img,
  setRefreshRecipeWhenDelete
) => {
  Swal.fire({
    title: "Are you sure?",
    text: `อยากจะลบสูตรอาหารของ${recipe_name}จริงๆหรอ><`,
    icon: "warning",
    cancelButtonText: "ไม่ลบ",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ใช่, ลบเลย!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(`${apiUrl}/recipe/deleteRecipe.php`, {
          id_recipe: recipe_id,
          deleteImg: recipe_img,
        })
        .then((res) => {
          console.log("dada", res.data);
          if (res.data.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "สูตรอาหารถูกลบแล้ว",
              text: `${recipe_name} recipe has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
            });
            setRefreshRecipeWhenDelete(recipe_id);
          }
        });
    }
  });
};

// ADMIN RECIPE
export const addListMemberIsRecipe = (apiUrl, setListMemberIsRecipe) => {
  axios.get(`${apiUrl}/admin/fetchAdminIsRecipe.php`).then((res) => {
    if (res.data.success) {
      console.log("res: ", typeof res.data.dataUser);
      const rows = res.data.dataUser.map((recipes) => ({
        id: recipes.recipe_id,
        recipe_id: recipes.recipe_id,
        recipe_name: recipes.recipe_name,
        recipe_description: recipes.recipe_description,
        user_firstname: recipes.user_firstname,
        user_lastname: recipes.user_lastname,
        user_id: recipes.user_id,
        recipe_datetime: recipes.recipe_datetime,
        recipe_img: recipes.recipe_img,
        recipe_amount: recipes.recipe_amount,
        recipe_duration_hr: recipes.recipe_duration_hr,
        recipe_duration_m: recipes.recipe_duration_m,
      }));
      console.log("list Member recipe:", rows);
      setListMemberIsRecipe(rows);
    }
  });
};
