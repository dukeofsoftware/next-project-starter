import { ChangeEvent, useState } from 'react';
export const useInput = (initialValue="") => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange
    };
};