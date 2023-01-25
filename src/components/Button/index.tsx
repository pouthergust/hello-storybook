import React from "react";
import "./styles.css";

type ButtonProps = {
    children: React.ReactNode
    theme?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
}

function Button({ children, theme = 'primary' }: ButtonProps) {
    return <button className={`button ${theme}`}>{children}</button>
}

export default Button;