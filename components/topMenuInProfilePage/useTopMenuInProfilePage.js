import { useEffect, useState } from "react";


const useTopMenuInProfilePage = () => {
  const [menuItemState,setmenuItemState]=useState(false)
  const [menuItemVisableState,setmenuItemVisableState]=useState(true)

  return {
    menuItemState,
    setmenuItemState,
    menuItemVisableState,
    setmenuItemVisableState
  };
};

export { useTopMenuInProfilePage };
