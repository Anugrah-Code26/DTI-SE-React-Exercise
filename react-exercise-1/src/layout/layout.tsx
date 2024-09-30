import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export function Layout () {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
