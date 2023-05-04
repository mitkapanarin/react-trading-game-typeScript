import React, { useState, useEffect } from "react";
import InputField from "../components/Form/InputField";
import Display from "../components/Display/Display";

interface iData {
  buy: number;
  shares: number;
  sell: number;
  fees: number;
  Net: number;
  totalFees: Number;
  currency: any;
}

const initialState: iData = {
  buy: 0,
  sell: 0,
  shares: 0,
  fees: 0.1,
  Net: 0,
  totalFees: 0,
  currency: "$",
};

// we buy low, sell high
// buy, sell, quantity

// 80% -> generics, T, ts for arrays, ?, any, enums

const ProfitCalculator = () => {
  const [data, setData] = useState<iData>({
    ...initialState,
    currency: "$",
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
    const totalFees = buyingFees + sellingFees;
    const NetProfit = (sell - buy) * shares - totalFees;

    setData({
      ...data,
      totalFees,
      Net: +NetProfit.toFixed(3),
    });
  }, [data.buy, data.sell, data.shares, data.fees]);

  const displayText = data.Net > 0 ? "Profit" : "Loss";

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center items-center">
                Profit Calculator
              </h1>
              <div className="flex justify-center gap-10">
                <div className="">
                  {data.Net > 0 && (
                    <Display
                      color="text-green-400"
                      currency={data.currency}
                      text={displayText}
                      digits={+data.Net}
                    />
                  )}

                  {data.Net < 0 && (
                    <Display
                      color="text-red-400"
                      currency={data.currency}
                      text={displayText}
                      digits={+data.Net}
                    />
                  )}

                  {data.Net == 0 && (
                    <Display
                      color="text-red-400"
                      currency={data.currency}
                      text="No Profit / Loss"
                      digits={+data.Net}
                    />
                  )}
                </div>
                <Display
                  color="text-blue-400"
                  currency={data.currency}
                  text="Total Fees"
                  digits={+data.totalFees}
                />
              </div>
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full flex justify-center items-center">
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
