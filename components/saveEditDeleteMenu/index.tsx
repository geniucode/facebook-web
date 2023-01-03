import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function SaveEditDeleteMenu({userId,postUserId}) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if(true){};

  return (
    <div>
      <div
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div style={{fontSize:"20px",color:"#7d7f82",fontWeight:"bolder" ,paddingBottom:"10px"}}>...</div>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <MenuItem onClick={handleClose}>Save post</MenuItem>
       {userId ==postUserId ? <MenuItem onClick={handleClose}>Edit post</MenuItem>:""}
        {userId ==postUserId ? <MenuItem onClick={handleClose}>Delete post</MenuItem>:""}
      </Menu>
    </div>
  );
}
