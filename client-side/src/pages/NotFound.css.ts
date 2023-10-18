import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const notFoundBox = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "50px",
    textDecoration: "none",
    color: vars.colors.complementary
})

export const notFoundImg = style({
    width: "300px",

})


