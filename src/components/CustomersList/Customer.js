import classes from "./Customer.module.css";

const Customer = (props) => {
  console.log(props.id);

  const onDeleteClickHandler = () => {
    props.onDeleteCustomer(props.id);
  };

  const onEditClickHandler = () => {
    props.onEditCustomer(props.id);
  };

  return (
    <li className={classes.item}>
      <div className={classes.div}>Name: {props.name}</div>
      <div className={classes.div}>Address: {props.address}</div>
      <div className={classes.div}>VAT Identification number: {props.vat}</div>
      <div className={classes.div}>Creation date: {props.date}</div>
      <button
        type="button"
        onClick={onDeleteClickHandler}
        className={classes.button}
      >
        Delete customer
      </button>
      <button
        type="button"
        onClick={onEditClickHandler}
        className={classes.button}
      >
        Edit customer data
      </button>
    </li>
  );
};

export default Customer;
