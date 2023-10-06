import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ onClickHandler, value, title }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () =>{
    setIsActive(!isActive)
    onClickHandler(value)
  }
  const buttonClassName = isActive? 'btn btn-success active' : 'btn btn-success';
    return (
      <button onClick={onClickHandler} value={value} className={buttonClassName}>
        {title}
      </button>
    );
  };
  
  export default Button;