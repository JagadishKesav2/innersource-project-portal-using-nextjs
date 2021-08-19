import { useState } from "react";

const Select = () => {
    const [defaultOptions, setDefaultOptions] = useState('');
    const handleChange = (event: any) => {
        const { value } = event.target;
        setDefaultOptions(value)
    }
    return (
        <>
            <select
                id="dropdown"
                value={defaultOptions}
                onChange={handleChange}
            >
                <option value="">None</option>
                <option value="0">Column 1</option>
                <option value="1">Column 2</option>

            </select>
        </>
    )
}

export default Select;