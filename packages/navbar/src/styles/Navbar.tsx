import React from "react"
import { makeStyles, Theme } from "@material-ui/core"

const navHeight = "50px"
const stdTransition = "0.2s all ease-in-out"

const caretBase = {
  content: "''",
  width: "0px",
  height: "0px",
  position: "absolute",
  top: "0",
  bottom: "0",
  margin: "auto",
}

export const navbarStyles = makeStyles((theme: Theme) => ({
  navbar: {
    background: theme.palette.primary.main,
    color: "#fff",
    fontFamily: theme.typography.fontFamily,
    height: navHeight,

    "&& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },

  // Desktop nav
  desktopNavContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    listStyle: "none",
    height: navHeight,
    margin: "0px",
    padding: "0px",
  },
  desktopNavItemRoot: {
    display: "flex",
    height: "inherit",
  },
  desktopNavItem: {
    height: "inherit",
    padding: "0px 20px 0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    transition: stdTransition,

    "&&:hover, &&:focus, &&:active": {
      background: theme.palette.secondary.main,
      transition: stdTransition,
    },
  },
  desktopMenuItem: {
    "&&:hover": {
      color: "#fff",
      background: theme.palette.primary.main,
      transition: stdTransition,
    },
  },

  // Mobile nav
  mobileMenuButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: navHeight,
  },
  mobileMenuButton: {
    height: "15px",
    width: "20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    cursor: "pointer",
    position: "relative",

    "&& > span": {
      height: "2px",
      transition: stdTransition,
      background: "#fff",
      display: "block",
      width: "100%",
      transform: "rotate(0deg)",
    },
  },
  hamOpen: {
    "&& :nth-child(1)": {
      transform: "rotate(45deg)",
      position: "absolute",
      top: "50%",
    },
    "&& :nth-child(2)": {
      position: "absolute",
      top: "50%",
      opacity: "0",
    },
    "&& :nth-child(3)": {
      transform: "rotate(-45deg)",
      position: "absolute",
      top: "50%",
    },
  },
  mobileMenuContainer: {
    background: theme.palette.primary.main,
    transition: stdTransition,
    "&& > div": {
      background: theme.palette.primary.main,
      color: "#fff",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
      transition: stdTransition,
    },
    "&& a": {
      color: "#fff!important",
    },
  },
  // Styles from "react-slidedown". See: https://github.com/frankwallis/react-slidedown/blob/master/lib/slidedown.css
  reactSlidedown: {
    height: "0",
    transition: stdTransition,

    "&&.transitioning": {
      overflowY: "hidden",
    },
    "&&.closed": {
      display: "none",
    },
  },
  mobileCaret: {
    width: "24px",
    height: "24px",
    display: "relative",
    "&&:after": {
      ...caretBase,
      borderTop: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: 0,
      left: 0,
    },
  },
  mobileNavContainer: {
    width: "100%",
    padding: "0px",
  },
  mobileSelectedItem: {
    background: `${theme.palette.primary.dark}!important`,
  },
  mobileNavSubItem: {
    paddingLeft: "25px",
  },

  // Utils
  focused: {
    background: theme.palette.secondary.main,
  },
  caretDown: {
    position: "relative",
    "&&:after": {
      ...caretBase,
      borderTop: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: "4px",
    },
  },
  caretUp: {
    position: "relative",
    "&&:after": {
      ...caretBase,
      borderBottom: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: "4px",
    },
  },
}))
