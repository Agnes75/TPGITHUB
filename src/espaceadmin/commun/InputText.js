import React from "react";

const InputText = ({label,type, name,onChange}) => {

    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} className="form-control"  id={name} name={name} onChange={onChange}/>
        </div>
    )
}

export default InputText