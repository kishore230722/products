import Input from "./Input";
import "./price.css";


const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value='0-500'
          title="Rs 0-500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
        value='500-1000'
          title="Rs 500-1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value='1000-2000'
          title="Rs 1000-2000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value='2000above'
          title="Rs 2000above"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
