import classes from "./CustomersList.module.css";
import Customer from "./Customer";

const CustomersList = (props) => {
  const onDeleteCustomerHandler = (id) => {
    props.onDeleteCustomer(id);
  };

  const onEditCustomerHandler = (id) => {
    props.onEditCustomer(id);
  };

  return (
    <ul className={classes.list}>
      {props.customers.map((person, index) => {
        return (
          <Customer
            name={person.name}
            vat={person.vat}
            address={person.address}
            date={person.date}
            key={index}
            id={index}
            onDeleteCustomer={onDeleteCustomerHandler}
            onEditCustomer={onEditCustomerHandler}
          />
        );
      })}
    </ul>
  );
};

export default CustomersList;
