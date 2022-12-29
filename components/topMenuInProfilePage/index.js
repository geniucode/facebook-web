import styles from "../../styles/topMenuInProfilePage.module.css";
const TopMenuInProfilePage = ({item,menuItemState,setmenuItemState}) => {
    return (
   <>
   <div  className={menuItemState==item?styles.menuItemsNewStyle:styles.menuItems} onClick={()=>{setmenuItemState(item)}} >{item}</div>
   </>
  );
};
export { TopMenuInProfilePage };
