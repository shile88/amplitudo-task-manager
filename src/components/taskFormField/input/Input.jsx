const Input = ({ name, type, defaultValue, setFormTaskData, placeholder, required }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormTaskData((prevData) => ({ ...prevData, [name]: value }));
      };


  return (
    <input
      name={name}
      type={type ? type : 'text'}
      defaultValue={defaultValue}
      onChange={handleChange}
      placeholder={placeholder}
      required={required ? true : false}
    />
  );
};

export default Input;
