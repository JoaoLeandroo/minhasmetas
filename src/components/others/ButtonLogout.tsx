"use client"
import { IoMdLogOut } from "react-icons/io";
import { Button } from "../ui/button";
import Cookie from "js-cookie";

const ButtonLogout = () => {

  function deleteCookie() {
    Cookie.remove("metas_token")
    window.location.href = "/"
  }

  return (
    <Button onClick={deleteCookie} variant={"destructive"} className="w-full">
      <IoMdLogOut className="w-14 h-14" />
    </Button>
  );
};

export default ButtonLogout;
