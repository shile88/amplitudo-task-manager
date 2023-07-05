import classes from './DropDown.module.scss';

const DropDown = ({name, value, setFormTaskData, required}) => {

const options = ['wishlist', 'to-do', 'in-progress', 'done']

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTaskData((prevData) => ({ ...prevData, [name]: value }));
  };


  return (
    <div className={classes.dropdown}>
          <label>
            Choose Status:
            <select
              name={name}
              value={value}
              onChange={handleChange}
              required={required ? true : false}
            >
              {options.map((option, index) => 
                    <option key={index} value={option}>{option.toUpperCase()}</option>
                )}
            </select>
          </label>
        </div>
  )
}

export default DropDown