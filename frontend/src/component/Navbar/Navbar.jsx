import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
   const handleAvatarClick = () => {
      if(auth.user?.role === "ROLE_CUSTOMER") {
         navigate("/profile")
      } else {
         navigate("/admin/restaurants")
      }
   };
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between sticky top-0">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <p onClick={() => navigate("/")} className="logo font-semibold text-gray-300 text-2xl">Yum Yum</p>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="cursor-pointer">
          {auth.user ? (
            <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
