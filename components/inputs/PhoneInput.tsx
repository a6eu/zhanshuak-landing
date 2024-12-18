'use client';
import React, { useState } from "react";

const PhoneInput = ({setPhone}: {setPhone: (value: string) => void}) => {
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formattedPhone = formatPhone(e.target.value)
        setInputValue(formattedPhone)
        setPhone(formattedPhone)
    }

    return (
        <input
            className="p-2 rounded-lg border bg-slate-100 w-full focus:outline-primary"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your phone number"
            value={inputValue}
        />
    );
};

function formatPhone(value: string): string {
    const phoneNumber = value.replace(/\D/g, "");

    if (!phoneNumber) return "";

    const formatted = phoneNumber.startsWith("7")
        ? phoneNumber
        : `7${phoneNumber}`;

    if (formatted.length <= 1) return "+7";
    if (formatted.length <= 4) return `+7 (${formatted.slice(1)}`;
    if (formatted.length <= 7)
        return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4)}`;
    if (formatted.length <= 11)
        return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)} ${formatted.slice(7)}`;

    return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)} ${formatted.slice(7, 11)}`;
}

export default PhoneInput;
