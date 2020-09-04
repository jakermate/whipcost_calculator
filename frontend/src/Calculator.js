import React, {useState} from 'react'
import MonthlyCalculator from './MonthlyCalculator'
import MaximumPriceCalculator from './MaximumPriceCalculator'
import styled from 'styled-components'
export default function Calculator() {
    const [mode, setMode] = useState(0)
    return (
        <div className="container mx-auto max-w-2xl flex flex-col shadow-xl rounded-md relative bg-white border-gray-100 border-2 my-4 pt-4" style={{minHeight:'300px', top:'-100px', zIndex:200}}>
            <div className="title-container text-lg font-bold ml-3">
                Loan Calculator
            </div>
            <div className="input-container h-full flex-grow flex flex-col">
                <div className="mode-switcher-container text-center flex flex-row w-full">
                    <ModeSelect active={mode === 0} className="monthly-mode-container text-gray-500 flex-grow py-3" onClick={e=>setMode(0)}>
                        Monthly Payment
                    </ModeSelect>
                    <ModeSelect active={mode === 1} className="max-cost-mode-container text-gray-500 flex-grow py-3" onClick={e=>setMode(1)}>
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
                
            </div>
        </div>
    )
}
const ModeSelect = styled.div`
    cursor: pointer;
    color: ${props => props.active === true && 'purple'};
    background: ${props => props.active === false && 'rgba(200,200,200,.2)'};

    border-color: ${props => props.active === true && 'purple'};
    border-bottom-width: 1px;

`