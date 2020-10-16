import { MenuItem, ListItemText, Menu, Button } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";

type Props = {
  menu_titles: string[];
  button_title: string;

  setButtonTitle: (title: string) => void;
};

const CategoryBtn = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (title: string) => {
    setAnchorEl(null);
    props.setButtonTitle(title);
  };

  const menu_items = props.menu_titles.map((title: string) => (
    <div>
      <MenuItem onClick={() => handleClose(title)}>
        <ListItemText primary={title} />
      </MenuItem>
    </div>
  ));

  return (
    <>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {menu_items}
      </Menu>
      <Button onClick={handleClick} endIcon={<ExpandMore />}>
        {props.button_title}
      </Button>
    </>
  );
};

export default CategoryBtn;
