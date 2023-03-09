import { ChangeEvent, useCallback, useState } from 'react';
export const useInput = (initialValue="") => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback((event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    },[setValue])

    return {
        value,
        onChange: handleChange
    };
};