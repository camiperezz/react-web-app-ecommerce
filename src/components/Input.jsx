function Input({ labelText, description, ...props }) {
    return (
        <div className="input-styles">
            <label className="input-label" htmlFor={props.name}>{labelText}</label>
            <input className="input-element" autoComplete="off" {...props} />
            {description ? <p className="input-description">{description}</p> : null}
        </div>
    );
}

export default Input;
