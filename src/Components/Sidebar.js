import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" title="Neeraj Bhardwaj"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
};

export default Sidebar;