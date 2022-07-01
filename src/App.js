import Layout from "./layout";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLoading from "./components/Loading/mainLoading";
import { AuthContext } from "./util/context";

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
  const { user, setUser } = AuthContext();

  useEffect(() => {
    console.log("load");
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  useEffect(() => {
    //ถ้ามี user เคย login แล้ว
    const authCheck = localStorage.getItem("user_setup");
    if (authCheck) {
      // const parseUser = JSON.parse(authCheck);
      // setUser(parseUser);

      //mock
      setUser({
        user_firstname: "Kwai",
        user_lastname: "stupid",
        user_email: "benz@gmail.com",
        user_urole: "M",
      });
    }
  }, []);

  console.log("userroles: ", user);

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
                element={!user.user_email ? <Navigate to="/" /> : <Profile />}
              />
              <Route
                exact
                path="/myrecipes"
                element={!user.user_email ? <Navigate to="/" /> : <MyRecipes />}
              />

              {/*RECIPE*/}
              <Route exact path="/recipe/:idRecipe" element={<Recipe />} />
              <Route
                exact
                path="/recipe/create"
                element={
                  !user.user_email ? <Navigate to="/" /> : <RecipeCreate />
                }
              />
              <Route
                exact
                path="/recipe/edit/:idRecipe"
                element={
                  !user.user_email ? <Navigate to="/" /> : <RecipeEdit />
                }
              />
              {/*Admin Page*/}
              <Route
                exact
                path="/admin"
                element={
                  user.user_urole !== "A" ? <Navigate to="/" /> : <AdminPage />
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
