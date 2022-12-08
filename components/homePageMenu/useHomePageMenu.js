
import { useRecoilValue ,useRecoilState} from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import Image from "next/image";
import savedIcon from "./images/saved-icon.png";
import pagesIcon from "./images/pages-icon.png";
import friendsIcon from "./images/friends-icon.png";
import memoriesIcon from "./images/memories-icon.png";
import marketplaceIcon from "./images/marketplace-icon.png";
import { userState } from "../../atoms/user.js";
import { useState } from 'react';

const useHomePageMenu=()=>{
    const [user,setUser]=useRecoilState(userState);
    const [homeIcon,setHomeIcon]=useRecoilState(homeIconState)
    const onClickHomeIcon=()=>{
        setHomeIcon(true);
    }
    const onClickNotHomeIcon=()=>{
        setHomeIcon(false);
    }
    const items =[
        {
            icon: <Image src={friendsIcon} />,
            title:"Find friends",
            href:""
        },
        {
            icon:  <Image src={marketplaceIcon} />,
            title:"Marketplace",
            href:""
        },
        {
            icon:  <Image src={memoriesIcon} />,
            title:"Memories",
            href:""
        },
        {
            icon:  <Image src={savedIcon} />,
            title:"Saved",
            href:""
        },
        {
            icon:  <Image src={pagesIcon} />,
            title:"Pages",
            href:""
        },
        // {
        //     icon:  <Image src={seeAllIcon} />,
        //     title:"See all"
        // },
    ]
   
    return{
        items,
        user,
        homeIcon,
        setUser,
        onClickHomeIcon,
        onClickNotHomeIcon
    };

};
export {useHomePageMenu}