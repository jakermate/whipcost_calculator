import React, {useState} from 'react'
import MonthlyCalculator from './MonthlyCalculator'
import MaximumPriceCalculator from './MaximumPriceCalculator'
import styled from 'styled-components'
export default function Calculator() {
    const [mode, setMode] = useState(0)
    return (
        <div className="container mx-auto max-w-2xl flex flex-col shadow-2xl sm:rounded-lg relative bg-white  my-4 " style={{minHeight:'300px', marginTop:'-160px', zIndex:200, position: 'relative'}}>
            {/* <div className="title-container text-lg font-bold ml-3">
                Loan Calculator
            </div> */}
            <div className="input-container h-full flex-grow flex flex-col">
                <div className="mode-switcher-container bg-gray-200 sm:rounded-md text-center flex flex-row w-full">
                    <ModeSelect active={mode === 0} className="monthly-mode-container font-bold text-gray-500 flex-grow py-3 bg-white" onClick={e=>setMode(0)}>
                        Monthly Payment
                    </ModeSelect>
                    <ModeSelect active={mode === 1} className="max-cost-mode-container font-bold text-gray-500 flex-grow py-3 bg-white" onClick={e=>setMode(1)}>
                        Maximum Price
                    </ModeSelect>
                </div>
                <div className="calculator-content bg-white sm:rounded-lg flex-grow">
                    {
                        mode === 0 ? 
                        <MonthlyCalculator></MonthlyCalculator> :
                        <MaximumPriceCalculator></MaximumPriceCalculator>

                    }
                </div>
                <div className="px-8">
                <hr/>

                </div>
                <div id="warning" className="text-center mt-4 text-xs px-6 pb-8 opacity-50">
                    <h6>All prices and loan amounts are estimates, and may not reflect actual final pricing of your purchase.  Use this calculator as but one of many tools in helping you save money.</h6>
                    <h6>WhipCost accepts no liability.</h6>
                </div>
                
            </div>
        </div>
    )
}
const ModeSelect = styled.div`
    cursor: pointer;
    color: ${props => props.active === true && '#9F7AEA'};
    background: ${props => props.active === false && 'transparent'};
    border-top-left-radius: ${props => props.active ? '8px' : '0px'};
    border-top-right-radius: ${props => props.active ? '8px' : '0px'};
    box-shadow:${props => props.active ? '0px 0px 8px rgba(0,0,0,.3)' : 'none'};
    border-color: ${props => props.active === true && 'blue'};
    /* border-bottom-width: 1px; */

`