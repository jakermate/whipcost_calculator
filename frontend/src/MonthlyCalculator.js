import React, { useState, useEffect } from "react"

export default function MonthlyCalculator() {
// inputs
const [price, setPrice] = useState(25000)
const [taxRate, setTaxRate] = useState(1)
const [duration, setDuration] = useState(12)

// totals
  const [totalCost, setTotalCost] = useState(0)
  const [monthly, setMonthly] = useState(0)

// callback
useEffect(()=>{
    getMonthly()
}, [price, taxRate, duration])

  function getMonthly(e){
    console.log('update')
    if(price < .01){
        setMonthly(0)
        return
    }
    if(taxRate < .01){
        setMonthly((price / duration).toFixed(2))
        return
    }
    if(duration < 1){
        setMonthly(0)
        return
    }

    let monthly = (price * (taxRate / 100) / 12) / (1 - Math.pow((1 + (taxRate/100) / 12), - duration))
    setMonthly(monthly.toFixed(2))
  }
  function unfocus(e){
      console.log('unfocused')
    if(e.target.value === ''){
        e.target.value = 0
    }
  }
  return (
    <div id="monthly-price-calc " className="py-3 px-4">
      <div className="flex flex-row flex-wrap p-3 box-border">
        <div className="pr-4 mb-4 w-full sm:w-1/3">
          <label className="mb-2 block text-gray-700 text-sm" htmlFor="loan">
            Loan Amount
          </label>
          <input
            onChange={e=> setPrice(e.target.value)}
            type="text"
            name="loan"
            value={price}
            onBlur={e=> unfocus(e)}
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
            value={taxRate}
            onBlur={e=> unfocus(e)}
            onChange={e=> setTaxRate(e.target.value)}
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
            value={duration}
            onBlur={e=> unfocus(e)}
            onChange={e=> setDuration(e.target.value)}
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
            <div>
                
                {
                    monthly
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
