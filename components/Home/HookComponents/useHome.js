import React, { useState } from "react";

const useHome = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([
        { label: 'Open Opportunities', value: 0 },
        { label: 'Closed Opportunities', value: 1 },
    ]);

    return {
        open,
        setOpen,
        value, 
        setValue, 
        items,
        setItems, 
    }
};

export default useHome;