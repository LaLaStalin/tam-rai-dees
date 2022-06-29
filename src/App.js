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
  const [authToken, setAuthToken] = useState(null);
  const { setUser } = AuthContext();

  useEffect(() => {
    console.log("load");
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  useEffect(() => {
    console.log("ath");
    const authCheck = localStorage.getItem("user_setup");
    if (authCheck) {
      //SET USER FROM DATABASE

      //MOCK DATA
      setAuthToken(JSON.parse(authCheck));
      setUser({ email: "lala@gmail.com", password: "1234" });
    }
  }, []);

  return (
    <div>
      {loading ? (
        <MainLoading />
      ) : (
        <Suspense fallback={<MainLoading />}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/login"
                element={<Login setAuthToken={setAuthToken} />}
              />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/profile"
                element={!authToken ? <Navigate to="/" /> : <Profile />}
              />
              <Route
                exact
                path="/myrecipes"
                element={!authToken ? <Navigate to="/" /> : <MyRecipes />}
              />

              {/*RECIPE*/}
              <Route exact path="/recipe/:idRecipe" element={<Recipe />} />
              <Route
                exact
                path="/recipe/create"
                element={!authToken ? <Navigate to="/" /> : <RecipeCreate />}
              />
              <Route
                exact
                path="/recipe/edit/:idRecipe"
                element={!authToken ? <Navigate to="/" /> : <RecipeEdit />}
              />
              {/*Admin Page*/}
              <Route exact path="/admin" element={<AdminPage />} />
            </Routes>
          </Layout>
        </Suspense>
      )}
    </div>
  );
}

export default App;
