import React, {useState} from 'react'
import MonthlyCalculator from './MonthlyCalculator'
import MaximumPriceCalculator from './MaximumPriceCalculator'
import styled from 'styled-components'
export default function Calculator() {
    const [mode, setMode] = useState(0)
    return (
        <div className="container mx-auto max-w-2xl flex flex-col shadow-2xl sm:rounded-md relative bg-white border-gray-100 border-2 my-4 " style={{minHeight:'300px', marginTop:'-60px', zIndex:200, position: 'relative'}}>
            {/* <div className="title-container text-lg font-bold ml-3">
                Loan Calculator
            </div> */}
            <div className="input-container h-full flex-grow flex flex-col">
                <div className="mode-switcher-container text-center flex flex-row w-full">
                    <ModeSelect active={mode === 0} className="monthly-mode-container font-bold text-gray-500 flex-grow py-3" onClick={e=>setMode(0)}>
                        Monthly Payment
                    </ModeSelect>
                    <ModeSelect active={mode === 1} className="max-cost-mode-container font-bold text-gray-500 flex-grow py-3" onClick={e=>setMode(1)}>
                        Maximum Price
                    </ModeSelect>
                </div>
                <div className="calculator-content bg-gray-100 flex-grow">
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
    color: ${props => props.active === true && 'blue'};
    background: ${props => props.active === false && 'rgba(200,200,200,.2)'};

    border-color: ${props => props.active === true && 'blue'};
    border-bottom-width: 1px;

`