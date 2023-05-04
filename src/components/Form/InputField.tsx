import React, { FC } from "react";

interface iInputField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const InputField: FC<iInputField> = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
};

export default InputField;
