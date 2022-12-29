import styles from "../../styles/topMenuInProfilePage.module.css";
import { useTopMenuInProfilePage } from "./useTopMenuInProfilePage";
const TopMenuInProfilePage = ({item}) => {
  const{  menuItemState,setmenuItemState}=useTopMenuInProfilePage();
  // type={showHidePasswordBtn ? "text" : "password"}
  // style={color="red"}
  // console.log(currentTab)

  return (
   <>

   {!menuItemState &&( <div  className={styles.menuItems} onClick={()=>{setmenuItemState(true)}} >{item}</div>)}
   {menuItemState&&( <div  className={styles.menuItemsNewStyle} onClick={()=>{setmenuItemState(false)}} >{item}
   <div className={styles.line}></div></div> )}
   
   </>
  );
};
export { TopMenuInProfilePage };
