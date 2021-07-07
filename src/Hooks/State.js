import { useState } from "react";

export default State => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const resetInput = () => {
        setValue("");
    }

    return [value, handleChange, resetInput];
}
