// eslint-disable-next-line react/prop-types
const Input = ({ handleInputChange, value, title, name, color }) => {
    return (
      <label className="pointer text-xl">
        <input className="w-4 h-4 mx-1" onChange={handleInputChange} type="radio" value={value} name={name} />
        <span className="bg-[#eee]" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;