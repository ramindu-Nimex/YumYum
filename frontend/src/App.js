import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./component/Theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/State/Authentication/Action";
import { findCart } from "./component/State/Cart/Action";
import Routers from "./Routers/Routers";
import { getRestaurantByUserId } from "./component/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt])

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
