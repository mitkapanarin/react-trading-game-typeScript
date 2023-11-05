import { useState, FC } from "react";
import { iCurrencyObject } from "../../Constants";

interface iDropDown {
  options: iCurrencyObject[];
}

const Dropdown: FC<iDropDown> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown button{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute ${
          !isOpen && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options?.map((item:iCurrencyObject)=>{
            return <div
            onClick={()=>setIsOpen(!isOpen)}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {item.label}
          </div>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
