import React, { useState, useEffect } from "react";
import "../App.css";
function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/customers")
      .then(res => res.json())
      .then(customers => setCustomers(customers));
  }, []);
  return (
    <div>
      <h4>Customers:</h4>
      {customers.map(customer => {
        return <li key={customer.id}>{customer.name}</li>;
      })}
    </div>
  );
}

export default Customers;
