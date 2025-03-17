function Button({ text, children, variant = "button-styles", ...props }) {
    return (
        <button className={variant} {...props}>
            {text}
            {children}
        </button>
    );
}

export default Button;
