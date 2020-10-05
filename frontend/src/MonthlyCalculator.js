import React, { useState, useEffect } from "react"
import styled from "styled-components"
import comma from 'comma-number'
export default function MonthlyCalculator() {
  // inputs
  const [price, setPrice] = useState(25000)
  const [taxRate, setTaxRate] = useState(1)
  const [duration, setDuration] = useState(12)

  // totals
  const [totalCost, setTotalCost] = useState(0)
  const [monthly, setMonthly] = useState(0)

  const nationalAverage = 554
  // callback
  useEffect(() => {
    getMonthly()
  }, [price, taxRate, duration])

  function getMonthly(e) {
    console.log("update")
    if (price < 0.01) {
      setMonthly(0)
      setTotalCost(0)
      return
    }
    if (taxRate < 0.01) {
      setMonthly((price / duration).toFixed(2))
      setTotalCost(price)
      return
    }
    if (duration < 1) {
      setMonthly(0)
      setTotalCost(price)
      return
    }

    let monthly =
      (price * (taxRate / 100)) /
      12 /
      (1 - Math.pow(1 + taxRate / 100 / 12, -duration))
    setTotalCost((duration * monthly).toFixed(2))
    setMonthly(monthly.toFixed(2))
  }
  function unfocus(e) {
    console.log("unfocused")
    if (e.target.value === "") {
      e.target.value = 0
    }
  }
  function handlePriceChange(value){
    if(value){
      setPrice(value)
      return
    }
    setPrice()
  }
  function getVersusAverage(){
      if(monthly < nationalAverage){
          return Math.abs((nationalAverage / monthly) * 100) -100
      }
      return Math.abs((monthly / nationalAverage) * 100) -100
  }
  return (
    <div id="monthly-price-calc " className="py-3 px-4">
      <div className="flex flex-row flex-wrap p-3 box-border">
        <div className="pr-4 mb-4 sm:mb-0 w-full sm:w-1/3 relative">
          <label className="mb-2 block text-gray-700 text-sm" htmlFor="loan">
            Loan Amount
          </label>
          <Input
            onChange={(e) => handlePriceChange(e.target.value)}
            type="text"
            name="loan"
            style={{ paddingLeft: "16px" }}
            value={price}
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
          <label htmlFor="" className="text-gray-700 opacity-75 font-bold text-sm">
            Total Cost
          </label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div className="font-boldest">{comma(totalCost)}</div>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="" className="text-gray-700 opacity-75 font-bold text-sm">
            Monthly Payment
          </label>
          <div className="flex flex-row justify-start text-xl font-bold w-full text-right">
            <div>$</div>
            <div className="font-boldest">{comma(monthly)}</div>
          </div>
        </div>
        
      </div>
      <div className="ml-3 mt-4 mb-2 text-xl">
          This is <span className="font-bold">{(getVersusAverage().toFixed(0))}%</span> {monthly > nationalAverage ? <span className="font-bold text-red-400">higher</span> : <span className="font-bold text-green-400">lower</span>} than the national avarage car payment.
        </div>
    </div>
  )
}
const Input = styled.input`
  padding-bottom: 6px;
`
