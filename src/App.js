import Layout from "./layout";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLoading from "./components/Loading/mainLoading";
import { AuthContext } from "./util/context";
import axios from "axios";

const Homepage = lazy(() => import("./pages/homepage/index"));
const Register = lazy(() => import("./pages/register/register"));
const Login = lazy(() => import("./pages/login/login"));
const Profile = lazy(() => import("./pages/profile/index"));
const MyRecipes = lazy(() => import("./pages/myrecipes/index"));
const Recipe = lazy(() => import("./pages/recipe/index"));
const RecipeCreate = lazy(() =>
  import("./pages/recipe/recipeForm/recipeCreate")
);
const RecipeEdit = lazy(() => import("./pages/recipe/recipeForm/recipeEdit"));
const AdminPage = lazy(() => import("./pages/admin/index"));

function App() {
  const [loading, setLoading] = useState(true);
  const { user, setUser, apiUrl } = AuthContext();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log("load");
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  useEffect(() => {
    //ถ้ามี user เคย login แล้ว#
    const authCheck = localStorage.getItem("user_setup");
    if (authCheck) {
      console.log("sdds");
      const parseUser = JSON.parse(authCheck);
      setCheck(true);
      console.log("parse: ", parseUser);
      axios
        .post(`${apiUrl}/user/fetchUserById.php`, {
          id: parseInt(parseUser),
        })
        .then((res) => {
          if (res.data.dataUser) {
            console.log("data: ", res.data.dataUser);
            setUser(res.data.dataUser);
          }
        })
        .catch((err) => {
          console.log("err ", err);
        });
    }
  }, [check]);

  return (
    <div>
      {loading ? (
        <MainLoading />
      ) : (
        <Suspense fallback={<MainLoading />}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/profile"
                element={!user ? <Navigate to="/" /> : <Profile />}
              />
              <Route
                exact
                path="/myrecipes"
                element={!user ? <Navigate to="/" /> : <MyRecipes />}
              />

              {/*RECIPE*/}
              <Route exact path="/recipe/:idRecipe" element={<Recipe />} />
              <Route
                exact
                path="/recipe/create"
                element={!user ? <Navigate to="/" /> : <RecipeCreate />}
              />
              <Route
                exact
                path="/recipe/edit/:idRecipe"
                element={!user ? <Navigate to="/" /> : <RecipeEdit />}
              />
              {/*Admin Page*/}
              <Route
                exact
                path="/admin"
                element={
                  user.user_urole !== null && user.user_urole !== "A" ? (
                    <Navigate to="/" />
                  ) : (
                    <AdminPage />
                  )
                }
              />
            </Routes>
          </Layout>
        </Suspense>
      )}
    </div>
  );
}

export default App;
