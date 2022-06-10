import React, { useState } from "react";

const userOffer = () => {
    const [activeSections, setActiveSections] = useState([2, 0]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'TC Kimlik', value: 'TC Kimlik' },
        { label: 'Vergi No', value: 'Vergi No' },
        { label: 'Firma', value: 'Firma' }
    ]);
    const onChange = (activeSections) =>{
        setActiveSections(activeSections)
    }

    return {
        activeSections,
        setActiveSections,
        open, 
        setOpen, 
        value,
        setValue,
        items,
        setItems,
        onChange

    }
};

export default userOffer;