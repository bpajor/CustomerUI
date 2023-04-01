import classes from "./EditCustomer.module.css";
import { useState } from "react";

const EditCustomer = (props) => {
  const [name, setName] = useState(props.personToEdit.name);
  const [address, setAddress] = useState(props.personToEdit.address);
  const [vat, setVat] = useState(props.personToEdit.vat);

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

    const person = {
      name: name,
      address: address,
      vat: vat,
      date: props.personToEdit.date,
    };

    props.onCustomerEdited(person, props.id);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label className={classes.label}>Edit name:</label>
      <input
        type="text"
        onChange={onNameChangeHandler}
        defaultValue={props.personToEdit.name}
      />
      <label className={classes.label}>Edit VAT identification number:</label>
      <input
        type="text"
        onChange={onVatChangeHandler}
        defaultValue={props.personToEdit.vat}
      />
      <label className={classes.label}>Edit address:</label>
      <input
        type="email"
        onChange={onAddressChangeHandler}
        defaultValue={props.personToEdit.address}
      />
      <div className={classes["button--container"]}>
        <button type="submit" className={classes.button}>
          Edit customer
        </button>
      </div>
    </form>
  );
};

export default EditCustomer;
