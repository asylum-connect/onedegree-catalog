import { createMuiTheme } from 'material-ui/styles';
import breakpoints from './breakpoints';


/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default createMuiTheme({
  "maxColumnWidth": "1300px",
  "direction": "ltr",
  "palette": {
    "common": {
      "black": "#000",
      "blue": "#6988c1",
      "white": "#fff",
      "transparent": "rgba(0, 0, 0, 0)",
      "fullBlack": "rgba(0, 0, 0, 1)",
      "darkBlack": "rgba(0, 0, 0, 0.87)",
      "lightBlack": "rgba(0, 0, 0, 0.54)",
      "minBlack": "rgba(0, 0, 0, 0.26)",
      "faintBlack": "rgba(0, 0, 0, 0.12)",
      "fullWhite": "rgba(255, 255, 255, 1)",
      "darkWhite": "rgba(255, 255, 255, 0.87)",
      "lightWhite": "rgba(255, 255, 255, 0.54)",
      "darkGrey": "#e9e9e9",
      "lightGrey": "#f7f7f7",
      "gold": "#ffd04a"
    },
    "type": "light",
    "primary": {
      "50": "#6a88c0",
      "100": "#6a88c0",
      "200": "#6a88c0",
      "300": "#6a88c0",
      "400": "#6a88c0",
      "500": "#6a88c0",
      "600": "#6a88c0",
      "700": "#6a88c0",
      "800": "#6a88c0",
      "900": "#6a88c0",
      "A100": "#6a88c0",
      "A200": "#6a88c0",
      "A400": "#6a88c0",
      "A700": "#6a88c0",
      "contrastDefaultColor": "light"
    },
    "secondary": {
      "50": "#f26f6f",
      "100": "#f26f6f",
      "200": "#f26f6f",
      "300": "#f26f6f",
      "400": "#f26f6f",
      "500": "#f26f6f",
      "600": "#bb3e44",
      "700": "#f26f6f",
      "800": "#f26f6f",
      "900": "#f26f6f",
      "A100": "#f26f6f",
      "A200": "#f26f6f",
      "A400": "#f26f6f",
      "A700": "#f26f6f",
      "contrastDefaultColor": "light"
    },
    "error": {
      "50": "#ffebee",
      "100": "#ffcdd2",
      "200": "#ef9a9a",
      "300": "#e57373",
      "400": "#ef5350",
      "500": "#f44336",
      "600": "#e53935",
      "700": "#d32f2f",
      "800": "#c62828",
      "900": "#b71c1c",
      "A100": "#ff8a80",
      "A200": "#ff5252",
      "A400": "#ff1744",
      "A700": "#d50000",
      "contrastDefaultColor": "light"
    },
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A100": "#d5d5d5",
      "A200": "#aaaaaa",
      "A400": "#303030",
      "A700": "#616161",
      "contrastDefaultColor": "dark"
    },
    "shades": {
      "dark": {
        "text": {
          "primary": "rgba(255, 255, 255, 1)",
          "secondary": "rgba(255, 255, 255, 0.7)",
          "disabled": "rgba(255, 255, 255, 0.5)",
          "hint": "rgba(255, 255, 255, 0.5)",
          "icon": "rgba(255, 255, 255, 0.5)",
          "divider": "rgba(255, 255, 255, 0.12)",
          "lightDivider": "rgba(255, 255, 255, 0.075)"
        },
        "input": {
          "bottomLine": "rgba(255, 255, 255, 0.7)",
          "helperText": "rgba(255, 255, 255, 0.7)",
          "labelText": "rgba(255, 255, 255, 0.7)",
          "inputText": "rgba(255, 255, 255, 1)",
          "disabled": "rgba(255, 255, 255, 0.5)"
        },
        "action": {
          "active": "rgba(255, 255, 255, 1)",
          "disabled": "rgba(255, 255, 255, 0.3)"
        },
        "background": {
          "default": "#303030",
          "paper": "#424242",
          "appBar": "#212121",
          "contentFrame": "#212121",
          "status": "#000"
        }
      },
      "light": {
        "text": {
          "primary": "rgba(0, 0, 0, 0.87)",
          "secondary": "rgba(0, 0, 0, 0.54)",
          "disabled": "rgba(0, 0, 0, 0.38)",
          "hint": "rgba(0, 0, 0, 0.38)",
          "icon": "rgba(0, 0, 0, 0.38)",
          "divider": "rgba(0, 0, 0, 0.12)",
          "lightDivider": "rgba(0, 0, 0, 0.075)"
        },
        "input": {
          "bottomLine": "rgba(0, 0, 0, 0.42)",
          "helperText": "rgba(0, 0, 0, 0.54)",
          "labelText": "rgba(0, 0, 0, 0.54)",
          "inputText": "rgba(0, 0, 0, 0.87)",
          "disabled": "rgba(0, 0, 0, 0.42)"
        },
        "action": {
          "active": "rgba(0, 0, 0, 0.54)",
          "disabled": "rgba(0, 0, 0, 0.26)"
        },
        "background": {
          "default": "#fafafa",
          "paper": "#fff",
          "appBar": "#fff",
          "contentFrame": "#eeeeee"
        }
      }
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)",
      "icon": "rgba(0, 0, 0, 0.38)",
      "divider": "rgba(0, 0, 0, 0.12)",
      "lightDivider": "rgba(0, 0, 0, 0.075)"
    },
    "input": {
      "bottomLine": "rgba(0, 0, 0, 0.42)",
      "helperText": "rgba(0, 0, 0, 0.54)",
      "labelText": "rgba(0, 0, 0, 0.54)",
      "inputText": "rgba(0, 0, 0, 0.87)",
      "disabled": "rgba(0, 0, 0, 0.42)"
    },
    "action": {
      "active": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.26)"
    },
    "background": {
      "default": "#fafafa",
      "paper": "#fff",
      "appBar": "rgba(0, 0, 0, 0.87)",
      "contentFrame": "#eeeeee"
    }
  },
  "typography": {
    "fontFamily": "\"Open Sans\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 600,
    "display4": {
      "fontSize": 12,
      "fontWeight": 600,
      "fontFamily": "\"Open Sans\", sans-serif",
      "letterSpacing": "-.04em",
      "lineHeight": 1,
      "color": "rgba(0, 0, 0, 0.87)",
      "textTransform": "uppercase"
    },
    "display3": {
      "fontSize": 16,
      "fontWeight": 700,
      "fontFamily": "\"Open Sans\", sans-serif",
      "letterSpacing": "-.02em",
      "lineHeight": 1.35,
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "display2": {
      "fontSize": 18,
      "fontWeight": 500,
      "fontFamily": "\"Roboto\", sans-serif",
      "lineHeight": "inherit",
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "display1": {
      "fontSize": 22,
      "fontWeight": 700,
      "fontFamily": "\"Roboto\", sans-serif",
      "lineHeight": "40px",
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "headline": {
      "fontSize": 24,
      "fontWeight": 400,
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "lineHeight": "32px",
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "title": {
      "fontSize": 21,
      "fontWeight": 700,
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "lineHeight": 1,
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "subheading": {
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "lineHeight": "24px",
      "color": "rgba(0, 0, 0, 0.87)"
    },
    "body2": {
      "fontSize": 14,
      "fontWeight": 300,
      "fontFamily": "\"Open Sans\", sans-serif",
      "lineHeight": "20px",
      "color": "rgba(0, 0, 0, 0.38)"
    },
    "body1": {
      "fontSize": 13,
      "fontWeight": 300,
      "fontFamily": "\"Open Sans\", sans-serif",
      "lineHeight": "20px",
      "color": "rgba(0, 0, 0, 0.54)"
    },
    "caption": {
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "lineHeight": 1,
      "color": "rgba(0, 0, 0, 0.54)"
    },
    "button": {
      "fontSize": 14,
      "textTransform": "uppercase",
      "fontWeight": 700,
      "fontFamily": "\"Open Sans\", sans-serif",
      "letterSpacing": "1px",
    }
  },
  "mixins": {
    "toolbar": {
      "minHeight": 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        "minHeight": 48
      },
      "@media (min-width:600px)": {
        "minHeight": 64
      }
    }
  },
  "breakpoints": {
    "keys": Object.keys(breakpoints),
    "values": breakpoints,
  },
  "shadows": [
    "none",
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
    "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)",
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
    "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    "0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
    "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
    "0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
    "0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
    "0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
    "0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
    "0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
    "0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
    "0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
    "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
    "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
    "0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
    "0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
  ],
  "transitions": {
    "easing": {
      "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
      "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    "duration": {
      "shortest": 150,
      "shorter": 200,
      "short": 250,
      "standard": 300,
      "complex": 375,
      "enteringScreen": 225,
      "leavingScreen": 195
    }
  },
  "spacing": {
    "unit": 8
  },
  "zIndex": {
    "mobileStepper": 900,
    "menu": 1000,
    "appBar": 1100,
    "drawerOverlay": 1200,
    "navDrawer": 1300,
    "dialogOverlay": 1400,
    "dialog": 1500,
    "layer": 2000,
    "popover": 2100,
    "snackbar": 2900,
    "tooltip": 3000
  },
  "custom": {
    "inputLabel": {
      "fontSize": 17,
      "fontWeight": 700,
      "fontFamily": "\"Open Sans\", sans-serif",
      "letterSpacing": "-.02em",
      "& p": {
        "fontSize": 12,
        "fontWeight": 600,
        "color": "#000"
      },
      '& span': {
        "height": '20px',
        "fontSize": '20px'
      },
    },
    "inputText": {
      "fontSize": 13,
      "fontWeight": 400,
      "fontFamily": "\"Open Sans\", sans-serif",
      "color": "rgba(0, 0, 0, 0.90)",
    }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        height: 'auto'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
        height: "0.8px"
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#fff",
        color: "rgba(0, 0, 0, 0.87)"
      }
    },
    MuiPaper: {
      shadow4: {
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.2)'
      }
    },
    MuiTextarea: {
      root: {
        width: '100%',
        marginTop: '0px'
      }
    }
  }
});