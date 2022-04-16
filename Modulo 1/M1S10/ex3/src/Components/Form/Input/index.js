import React from "react";

function Input({ label, ...rest }) {
  return (
    <div>
      <label>
        {label}
        <input {...rest}></input>
      </label>
    </div>
  );
}

export default Input;
