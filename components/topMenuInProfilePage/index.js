import { color, style } from "@mui/system";
import { useState } from "react";
import styles from "../../styles/topMenuInProfilePage.module.css";
import { useTopMenuInProfilePage } from "./useTopMenuInProfilePage";
const TopMenuInProfilePage = ({item}) => {
  const{  menuItemState,setmenuItemState,menuItemVisableState,setmenuItemVisableState}=useTopMenuInProfilePage();
  // type={showHidePasswordBtn ? "text" : "password"}
  // style={color="red"}

  return (
   <>
   {!menuItemState &&( <div  className={styles.menuItems} onClick={()=>{setmenuItemState(true)}} >{item}</div>)}
   {menuItemState&&( <div  className={styles.menuItemsNewStyle} onClick={()=>{setmenuItemState(false)}} >{item}
   <div className={styles.line}></div></div> )}
   
   </>
  );
};
export { TopMenuInProfilePage };
