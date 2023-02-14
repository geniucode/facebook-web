import Image from "next/image";
import { useRecoilState } from "recoil";
import savedIcon from "./images/saved-icon.png";
import pagesIcon from "./images/pages-icon.png";
import { userState } from "../../atoms/user.js";
import friendsIcon from "./images/friends-icon.png";
import memoriesIcon from "./images/memories-icon.png";
import { homeIconState } from "../../atoms/home-icon";
import marketplaceIcon from "./images/marketplace-icon.png";
import { useGoToProfilePage } from "../../generalHooks/goToProfilePage";

const useHomePageMenu = () => {
  const { onClickToGoToProfilePage } = useGoToProfilePage();
  const [user, setUser] = useRecoilState(userState);
  const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);

  const onClickHomeIcon = () => {
    setHomeIcon(true);
  };
  const onClickNotHomeIcon = () => {
    setHomeIcon(false);
  };
  const items = [
    {
      icon: <Image src={friendsIcon} alt=""/>,
      title: "Find friends",
      href: "",
    },
    {
      icon: <Image src={marketplaceIcon} alt=""/>,
      title: "Marketplace",
      href: "",
    },
    {
      icon: <Image src={memoriesIcon} alt=""/>,
      title: "Memories",
      href: "",
    },
    {
      icon: <Image src={savedIcon} alt=""/>,
      title: "Saved",
      href: "",
    },
    {
      icon: <Image src={pagesIcon} alt=""/>,
      title: "Pages",
      href: "",
    },
  ];

  return {
    items,
    user,
    homeIcon,
    setUser,
    onClickHomeIcon,
    onClickNotHomeIcon,
    onClickToGoToProfilePage,
  };
};
export { useHomePageMenu };
