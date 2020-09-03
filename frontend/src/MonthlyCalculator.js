import React, { useState } from "react"

export default function MonthlyCalculator() {
  const [totalCost, setTotalCost] = useState(0)
  const [monthly, setMonthly] = useState(0)
  return (
    <div id="monthly-price-calc " className="py-3 px-4">
      <div className="flex flex-row flex-wrap p-3 box-border">
        <div className="pr-4 mb-4 w-full sm:w-1/3">
          <label className="mb-2 block text-gray-700 text-sm" htmlFor="loan">
            Loan Amount
          </label>
          <input
            type="text"
            name="loan"
            className="border-b-2 w-full bg-transparent outline-none border-gray-600"
          />
        </div>
        <div className="box-border pr-4 w-6/12 sm:w-1/3">
          <label
            className="mb-2 block text-gray-700 text-sm"
            htmlFor="interest"
          >
            Interest %
          </label>
          <input
            type="text"
            name="interest"
            className="border-b-2 bg-transparent w-full outline-none border-gray-600"
          />
        </div>
        <div className="box-border pr-4 w-6/12 sm:w-1/3">
          <label
            className="mb-2 block text-gray-700 text-sm"
            htmlFor="duration"
          >
            Loan Duration
          </label>
          <input
            type="text"
            name="duration"
            className="border-b-2 bg-transparent w-full outline-none border-gray-600"
          />
          <p className="text-gray-500 text-sm">months</p>
        </div>
      </div>
      <div className="flex flex-row p-3 results-container">
        <div className="w-1/2">
          <label htmlFor="" className="text-gray-700">Total Cost</label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div>{totalCost}</div>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="" className="text-gray-700">Monthly Payment</label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div>{monthly}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
