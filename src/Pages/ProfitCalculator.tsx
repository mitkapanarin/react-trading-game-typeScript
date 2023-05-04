import React, { useState, useEffect } from "react";
import InputField from "../components/Form/InputField";

interface iData {
  buy: number;
  shares: number;
  sell: number;
  fees: number;
  Net: number;
  totalFees: Number
}

// we buy low, sell high
// buy, sell, quantity

// 80% -> generics, T, ts for arrays, ?, any, enums

const ProfitCalculator = () => {
  const [data, setData] = useState<iData>({
    buy: 0,
    sell: 0,
    shares: 0,
    fees: 0.1,
    Net: 0,
    totalFees: 0
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const { buy, fees, sell, shares } = data;
    const buyingFees = (buy * shares * fees) / 100;
    const sellingFees = (sell * shares * fees) / 100;
    const totalFees = buyingFees + sellingFees
    const NetProfit = (sell - buy)*shares - totalFees

    setData({
      ...data,
      Net: +NetProfit.toFixed(3)
    })

  }, [data.buy, data.sell, data.shares, data.fees]);

  const displayText = data.Net > 0 ? "Profit" : "Loss"

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Profit Calculator
              </h1>
              <h4 className="text-3xl">$ {data.Net}</h4>
              {displayText}
              <form
                onChange={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <InputField
                  onChange={handleInput}
                  label="Buying price / share"
                  name="buy"
                  placeholder="Your buying price"
                  type="number"
                  value={data.buy}
                />

                <InputField
                  onChange={handleInput}
                  label="Total Shares"
                  name="shares"
                  placeholder="Total Shares you own"
                  type="number"
                  value={data.shares}
                />
                <InputField
                  onChange={handleInput}
                  label="Selling price / share"
                  name="sell"
                  placeholder="Your selling price"
                  type="number"
                  value={data.sell}
                />
                <InputField
                  onChange={handleInput}
                  label="Platform Fee (%)"
                  name="fees"
                  placeholder="Platform Fees in Pecentage"
                  type="number"
                  value={data.fees}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfitCalculator;
