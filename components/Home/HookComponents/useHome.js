import React, { useState } from "react";

const useHome = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([
        { label: 'Açık Fırsatlar', value: 0 },
        { label: 'Kapalı Fırsatlar', value: 1 },
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