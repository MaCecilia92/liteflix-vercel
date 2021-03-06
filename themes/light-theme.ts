import { BorderBottom, BorderRight, BorderTop } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
//import { red,  } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '##1E1E1E'
    },
    secondary: {
      main: '#3A64D8'
    }
  },

  typography: {
    
    fontFamily: ["Bebas Neue", "sans-serif"].join(","),

  },

  
  
  components: {


    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          height: 90,
          zIndex: 1,
        },
      }
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          "@media screen and (max-width:599px)": {
            display: "none"
          },
          
        },
      },
    },

    MuiTypography: {

      styleOverrides: {
        root: {
          padding: 0,
        },

        h1: {
          fontSize: 30,
          fontWeight: 400,
          letterSpacing: 4
        },
        h2: {
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: 2
        },

        h3: {
          fontSize: 22,
          fontWeight: 400,
          letterSpacing: 2
        },

        subtitle1: {
          fontSize: 14,
          fontWeight: 200,
          letterSpacing: 2
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          padding: 10,
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out',
            borderRadius: 0,
            padding: 10
          }
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 0,
          padding: 0,
          boxShadow:"none"
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          left: -20,
        },
      },
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '4px'
        }
      }
    },

    MuiInput: {

      styleOverrides: {
        root: {
          color: 'white',
    
          ":hover": {
            color:"white"
          },
          ":before": {
            borderBottom: "1px solid white"
          },
          ":hover:not(.Mui-disabled):before":{
            borderBottom: "3px solid white"
          }
        }
      }
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          "@media screen and (max-width:599px)": {
            top:70,
          },
        }
      }
    },


    MuiListItem : {
      styleOverrides: {
        root: {
          flex: "0 0 0",
          paddingLeft: "41px",
          width: "90%"
        }
      }
    },

    MuiList : {
      styleOverrides: {
        root: {
          paddingTop: 13,
        }
      }
    },
    
    MuiLinearProgress: {
      
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          height:10
        }
      }
    }
  }
});