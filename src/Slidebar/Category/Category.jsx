import Input from '../../components/Input'
import './Category.css'
// eslint-disable-next-line react/prop-types
const Category = ({ handleChange }) => {
  return (
    <div>
      <h3 className="sidebar-title"> Category</h3>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name='test' />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />


      </div>
    </div>
  )
}
export default Category