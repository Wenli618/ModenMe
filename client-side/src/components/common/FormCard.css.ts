import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css"

export const container = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
})

export const leadCard = style({
    background: vars.colors.primary,
    color: vars.colors.complementary,
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    minWidth: "25vw"
})

export const cardTitle = style({
    color: vars.colors.brand,
    paddingBottom: vars.space["2x"],
    fontSize: vars.fontSizes["5x"],
    fontWeight: vars.fontWeights.bolder,
    textAlign: "center"
})