import { useState } from "react";
import classes from "./AddCustomer.module.css";

const AddCustomerForm = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [vat, setVat] = useState(0);

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const onVatChangeHandler = (event) => {
    setVat(event.target.value);
  };
  const onAddressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(name.trim() === "" || address.trim() === "" || vat.trim() === "") {
      return;
    }
    
    let person = { name: name, address: address, vat: vat };
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = day + "-" + month + "-" + year;

    person = { ...person, date: formattedDate };

    props.onCustomerAdded(person);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label className={classes.label}>Add name:</label>
      <input type="text" onChange={onNameChangeHandler} />
      <label className={classes.label}>Add VAT identification number:</label>
      <input type="text" onChange={onVatChangeHandler} />
      <label className={classes.label}>Add address:</label>
      <input type="email" onChange={onAddressChangeHandler} />
      <div className={classes["button--container"]}>
        <button
          type="submit"
          className={classes.button}
        >
          Add customer
        </button>
      </div>
    </form>
  );
};

export default AddCustomerForm;
