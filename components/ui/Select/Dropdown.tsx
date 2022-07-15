import { useState, useEffect, FC, useCallback, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Tick from "../../Icons/Tick";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ContextProps } from "../../../context/Ui";
import { useMovieContext } from "../../../context/Data";
import { CardMovieSmall } from "../Card";
import { propsMovieLocal } from "../../../context/MovieLocal";
import { MovieFromLocalstorageContext } from "../../../context/MovieLocal/index";

const options = ["Populares", "Mis películas"];

export interface Result {
  backdrop_path?: string;
  id?: number;
  release_date?: string;
  title?: string;
  image?: string;
  vote_average?: number;
}

export interface propsdropdown {
  Listmovies?: Result[];
  movieVote?: [] | number;
  movieTitle?: [] | string;
  year?: [] | string;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export const Dropdown: FC<propsdropdown> = ({ Listmovies }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const [localMovie, setlocalMovie] = useState(false);

  const { useMovies } = useMovieContext();
  const { movies, isLoading } = useMovies("/now_playing");

  const { movieLocalstorage, getMovieLocalstorage } = useContext(
    MovieFromLocalstorageContext
  ) as propsMovieLocal;

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setlocalMovie(!selectedIndex);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getMovieLocalstorage();
  }, [localMovie]);

  return (
    <>
      <List>
        <ListItem
          onClick={handleClickListItem}
          sx={{
            width: "15rem",
          }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: "18px",
              fontWeight: 200,
              marginRight: "20px",
              color: "white",
            }}>
            Ver
          </Typography>
          <ListItemText sx={{ width: "1rem" }}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: 1,
              }}>
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
        disableScrollLock
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
      <CardMovieSmall
        Listmovies={selectedIndex ? movieLocalstorage : movies?.results ?? []}
      />
    </>
  );
};
