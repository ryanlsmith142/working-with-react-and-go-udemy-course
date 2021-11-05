const Textarea = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                Description
            </label>
            <textarea
                className="form-control"
                id={props.name}
                name={props.name}
                rows="3"
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Textarea;