import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css"

export const userNav = style({
    fontSize: vars.fontSizes["2x"],
    fontStyle: "italic",
    marginTop: vars.space["2x"],
    paddingTop: vars.space["2x"],
    textAlign: "center"
});

export const lable = style({
    display: "none",
})

export const form = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem"
})

globalStyle(`${userNav} a`, {
    textDecoration: "none",
    color: vars.colors.brand,
});

globalStyle(`${userNav} a:hover`, {
    textDecoration: "underline",
    color: vars.colors.brandDark,
});

