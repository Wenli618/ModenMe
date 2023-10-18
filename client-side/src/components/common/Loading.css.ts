import { style, keyframes } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css'

export const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
})

export const loading = style({
    border: `4px solid ${vars.colors.grey200}`,
    borderTop: `4px solid ${vars.colors.grey600}`,
    borderRadius: "50%",
    animation: `${spin} 2s liner infinite`
})

