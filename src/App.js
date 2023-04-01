import AddCustomerForm from "./components/AddCustomer/AddCustomerForm";
import classes from "./App.module.css";
import { Fragment, useState } from "react";
import CustomersList from "./components/CustomersList/CustomersList";
import EditCustomer from "./components/EditCustomer/EditCustomer";

function App() {
  const [db, setDb] = useState([]);
  const onCustomerAddedHandler = (person) => {
    setDb((prevDb) => {
      const tableToReturn = [...prevDb, person];
      return tableToReturn;
    });
  };

  const initial_message = <p className={classes.initial}>No results found!</p>;

  const [formToDisplay, setFormToDisplay] = useState(
    <AddCustomerForm onCustomerAdded={onCustomerAddedHandler} />
  );

  const onDeleteCustomerHandler = (id) => {
    setDb((prevDb) => {
      return prevDb.filter((el, index) => {
        return index !== id;
      });
    });
  };

  const onCustomerEditedHandler = (person, id) => {
    setDb((prevDb) => {
      prevDb[id] = person;
      return prevDb;
    });
    setFormToDisplay(
      <AddCustomerForm onCustomerAdded={onCustomerAddedHandler} />
    );
  };

  const onEditCustomerHandler = (id) => {
    setFormToDisplay(
      <EditCustomer
        personToEdit={db[id]}
        id={id}
        onCustomerEdited={onCustomerEditedHandler}
      />
    );
  };

  return (
    <Fragment>
      <header className={classes.header}>{formToDisplay}</header>
      <main className={classes.main}>
        {db.length === 0 ? (
          initial_message
        ) : (
          <CustomersList
            customers={db}
            onDeleteCustomer={onDeleteCustomerHandler}
            onEditCustomer={onEditCustomerHandler}
          />
        )}
      </main>
    </Fragment>
  );
}

export default App;
