
function Button ({ text, children, ...props }) {

    return (
        <button className="button-styles" {...props}>
            {text}
            {children}
        </button>
    )
}

export default Button
