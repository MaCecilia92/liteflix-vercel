import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Tick from "../../Icons/Tick";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const options = ["Populares", "Mis películas"];

export const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const [tick, setTick] = useState(false);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    // setTick(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component='nav' aria-label='Device settings'>
        <ListItem
          button
          id='lock-button'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{
            width: "70%",
          }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: "1.5rem",
              fontWeight: 200,
              marginRight: "20px",
              color: "white",
            }}>
            Ver
          </Typography>
          <ListItemText sx={{ width: "10rem", fontSize: "2rem" }}>
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: 600, color: "white" }}>
              {options[selectedIndex]}
            </Typography>
          </ListItemText>
          <KeyboardArrowDownIcon sx={{ color: "white" }} />
        </ListItem>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        sx={{ bgcolor: "transparent" }}>
        <Box
          sx={{
            bgcolor: "#242424",
            color: "white",
            fontSize: "16px",
            width: 241,
            ":after": {
              content: '""',
              display: "block",
              position: "absolute",
              top: "-5px",
              marginLeft: 0,
              right: "7px",
              width: 0,
              height: 0,
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              borderRight: "15px solid #242424",
              transform: "rotate(90deg)",
            },
          }}>
          {options.map((option, index) => (
            <MenuItem
              sx={{ justifyContent: "space-between" }}
              key={index}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
              {index === selectedIndex ? <Tick /> : null}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </div>
  );
};
