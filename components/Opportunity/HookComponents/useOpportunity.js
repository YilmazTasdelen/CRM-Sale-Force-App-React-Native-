import React, { useState } from "react";
import * as Statics from './../../Static/constants';
import axios from "axios";

const useOpportunity = () => {
  const [activeSections, setActiveSections] = useState([2, 0]);
  const [customers, setCustomers] = useState([]);
  const customerStaticList = [
      {
        "id": 1,
        "customer": "ARMARİN BİLİŞİM SİSTEMLERİ AŞ",
        "text": "Teklif Verildi",
        "deviceCount": "2",
       "city": "Çanakkale"
      },
     {
        "id": 2,
        "customer": "AYTAŞLAR ULUSLARARASI NAKLİYAT İTHALAT İHRACAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
        "text": "Teklif Verildi",
        "deviceCount": "6",
       "city": "İstanbol"
      },
    {
        "id": 3,
        "customer": "XYZ SYSTEMS ASD AŞ",
        "text": "Teklif Verildi",
        "deviceCount": "2",
       "city": "Ankara"
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