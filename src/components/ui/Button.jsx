import React from "react";

const Button = ({
    hoverText = "hover:text-accent",
    text = "Get Started",
    onClick,
    color = "bg-blue-500",
    hoverColor = "hover:bg-blue-600",
    textColor = "text-white",
    padding = "px-4 py-2",
    borderRadius = "rounded",
    additionalClass = "",
    hiddenOnSmall = false,
}) => {
    return (
        <button
            onClick={onClick}
            className={`${
                hiddenOnSmall ? "hidden md:block" : "block"
            } ${color} ${textColor} ${padding} ${borderRadius} font-semibold shadow-lg transform transition duration-300 ${hoverColor} ${additionalClass} ${hoverText}`}
        >
            {text}
        </button>
    );
};

export default Button;
