import { useState } from "react";

export const useInput = (inicialValue) => {
    const [value, setValue] = useState(inicialValue);

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }
    return [value, onChangeValue];
}