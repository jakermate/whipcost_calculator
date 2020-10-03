import React, { useState, useEffect } from "react"
import styled from "styled-components"
const comma = require('comma-number')
export default function MonthlyCalculator() {
  // inputs
  const [monthlyBudget, setMonthlyBudget] = useState(360)
  const [taxRate, setTaxRate] = useState(1)
  const [duration, setDuration] = useState(12)

  // totals
  const [borrowed, setBorrowed] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const nationalAverage = 36718
  // callback
  useEffect(() => {
    getTotals()
  }, [monthlyBudget, taxRate, duration])

  function getTotals() {
    let parsedTaxRate = taxRate
    if(isNaN(parsedTaxRate)){
      parsedTaxRate = .01
    }
    let totalCost = monthlyBudget * duration
    setTotalCost(totalCost)
    let borrowedAmount = ((1- Math.pow((1+((parsedTaxRate/100)/12)), - duration)  ) * monthlyBudget) / ((parsedTaxRate/100)/12)
    setBorrowed(borrowedAmount.toFixed(2))
  }

  function unfocus(e) {
    console.log("unfocused")
    if (e.target.value === "") {
      e.target.value = 0
    }
  }
  // get vs national average
  function getVersusAverage(){
    if(totalCost < nationalAverage){
        return Math.abs((nationalAverage / totalCost) * 100) -100
    }
    return Math.abs((totalCost / nationalAverage) * 100) -100
}
  return (
    <div id="monthly-price-calc " className="py-3 px-4">
      <div className="flex flex-row flex-wrap p-3 box-border">
        <div className="pr-4 mb-4 sm:mb-0 w-full sm:w-1/3 relative">
          <label className="mb-2 block text-gray-700 text-sm" htmlFor="loan">
            Monthly Budget
          </label>
          <Input
            onChange={(e) => setMonthlyBudget(e.target.value)}
            type="text"
            name="loan"
            style={{ paddingLeft: "16px" }}
            value={monthlyBudget}
            onBlur={(e) => unfocus(e)}
            className="border-b-2 w-full bg-transparent outline-none border-gray-400"
          />
          <div className="absolute text-lg font-bold" style={{ top: "27px" }}>
            $
          </div>
        </div>
        <div className="box-border pr-4 w-6/12 sm:w-1/3 relative">
          <label
            className="mb-2 block text-gray-700 text-sm"
            htmlFor="interest"
          >
            Interest %
          </label>
          <Input
            value={taxRate}
            onBlur={(e) => unfocus(e)}
            onChange={(e) => setTaxRate(e.target.value)}
            type="text"
            name="interest"
            className="border-b-2 bg-transparent w-full outline-none border-gray-400"
          />
        </div>
        <div className="box-border pr-4 w-6/12 sm:w-1/3 relative">
          <label
            className="mb-2 block text-gray-700 text-sm"
            htmlFor="duration"
          >
            Loan Duration
          </label>
          <Input
            value={duration}
            onBlur={(e) => unfocus(e)}
            onChange={(e) => setDuration(e.target.value)}
            type="text"
            name="duration"
            className="border-b-2 bg-transparent w-full outline-none border-gray-400"
          />
          <p className="text-gray-500 text-sm">months</p>
        </div>
      </div>
      <div className="flex flex-row p-3 results-container">
        <div className="w-1/2">
          <label htmlFor="" className="text-gray-700">
            Amount Borrowed
          </label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div>{comma(borrowed)}</div>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="" className="text-gray-700">
            Total Cost
          </label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div>{comma(totalCost)}</div>
          </div>
        </div>
      </div>
      <div className="ml-3 mb-2 mt-4 text-xl">
          This is <span className="font-bold">{(getVersusAverage().toFixed(0))}%</span> {totalCost > nationalAverage ? <span className="font-bold text-red-400">higher</span> : <span className="font-bold text-green-400">lower</span>} than the national avarage car purchase.
        </div>
    </div>
  )
}
const Input = styled.input`
  padding-bottom: 6px;
`
