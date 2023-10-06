import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ onClickHandler, value, title }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () =>{
    setIsActive(!isActive)
    onClickHandler(value)
  }
  
    return (
      <button onClick={onClickHandler} value={value} className='btn'>
        {title}
      </button>
    );
  };
  
  export default Button;