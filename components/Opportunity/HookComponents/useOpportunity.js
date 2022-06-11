import React, { useState } from "react";
import * as Statics from './../../Static/constants';
import axios from "axios";

const useOpportunity = () => {
  const [activeSections, setActiveSections] = useState([2, 0]);
  const [customers, setCustomers] = useState([]);
  const customerStaticList = [
      {
        "id": 1,
        "customer": "Test Customer 1",
        "text": " Offer Made",
        "deviceCount": "2",
       "city": "City 1"
      },
     {
        "id": 2,
        "customer": "Test Customer 2 with long name Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": " Offer Made",
        "deviceCount": "6",
        "city": "City 2"
      },
    {
        "id": 3,
        "customer": "Test Customer 3",
        "text": " Offer Made",
        "deviceCount": "2",
        "city": "City 3"
      }
    ];

  const onChange = (activeSections) => {
    setActiveSections(activeSections)
  };

  const getCustomers = () => {
    console.log(Statics.defaultDevUrl);
    axios
      .get(Statics.defaultDevUrl)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch(error => console.log(error));
  };
  return {
    activeSections,
    setActiveSections,
    onChange,
    getCustomers,
    customers,
    customerStaticList
  };





};

export default useOpportunity;