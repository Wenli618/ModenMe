import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import colors from "tailwindcss/colors";
import { Row } from "react-bootstrap";

export const navbar = style({
    width: "100vw",
    fontFamily: vars.fonts.brand,
    backgroundColor: vars.colors.primary,
    padding: `${vars.space['3x']} 0`,
})

export const span = style({
    color: vars.colors.brand
})

export const navMenu = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexGrow: "0.7 !important"
})

export const brandLink = style({
    display: 'flex',
    flexDirection: 'row',
    gap: vars.space['2x'],
    alignItems: 'center',
    color: vars.colors.complementary,
})

export const logo = style({
    width: "50px"
})

export const logoTextBox = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0
})

export const brand = style({
    fontSize: vars.fontSizes["4x"],
    alignSelf: "flex-start",
    fontWeight: vars.fontWeights.bolder,
    lineHeight: "20px"
})

export const brandSub = style({
    fontSize: vars.fontSizes["2x"],
    fontWeight: vars.fontWeights.light,
    color: vars.colors.grey600
})

export const navLink = style({
    color: vars.colors.complementary,
    fontSize: vars.fontSizes["3x"],
    transition: "0.2s ease-in",
    ":hover": {
        color: `${vars.colors.brand} !important`
    }
})



