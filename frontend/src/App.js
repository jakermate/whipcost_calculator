import React from 'react';
import logo from './logo.svg';
import './style/styles.css';
import styled from 'styled-components'
import r8 from './r8.jpg'
import cent from './cent.svg'
import Calculator from './Calculator'
function App() {
  return (
    <div className="App relative bg-gray-800">
      <Header className="App-header relative w-full text-white ">
        <Overlay></Overlay>
        <div className="navbar p-4 text-white w-full relative mx-auto container justify-start flex flex-row items-center" style={{zIndex:18}}>
          <div className="logo-container tracking-widest  text-teal-100">
             <a href="/">WHIPCOST</a>
          </div>
          
        </div>
        <div className="container mt-12 align-center mx-auto relative header-content py-6 px-3 text-center" style={{zIndex:20,}}>
          <img src={cent} alt="" className="inline-block w-32" alt="Whipcost Car Loan Calculator" />
          <h1 className="md:text-5xl mt-8 text-4xl font-bold text-white">
            WHIPCOST
          </h1>
          <h4 className="text-white text-2xl font-bold">
            Car Loan Calculator
          </h4>
          {/* <button className="mt-4 bg-gray-300 text-black py-3 px-6 w-48 hover:bg-gray-600 rounded-md ">
            PRICE
          </button> */}
        </div>
      </Header>
      <Calculator></Calculator>
      <section id="about">
        <div id="about-content" className="mt-16 container mx-auto text-center text-white max-w-2xl px-6">
          <h1 className="text-3xl font-bold text-white">Buying a car is stressful.</h1>
          <p className="mt-4 text-lg">
            Most people dread the idea of visiting a dealership.  Dealerships use predatory tactics in order to maximize their profit, and minimize your savings.  A salesman can either use your monthly budget to increase their margins by padding out your loan duration.  Knowing your total expected costs in addition to your monthly payment (with taxes included) before walking into the dealerships gives you a fighting chance.
          </p>
        </div>
      </section>
      <footer className="flex flex-col justify-center items-center bg-gray-800 pt-16 pb-16 mt-16 text-white">
          <img src={cent} style={{
            width: '70px',

            }} alt=""/>
            <div className="mt-6 text-center">
              Helping you budget your next car purchase.
              <br/>
              <em className="mt-2 font-bold">Don't get surprised at the dealership.</em>
            </div>
            <div id="copyright" className="text-lg mt-6">
              &copy; Whipcost, 2020
            </div>
      </footer>
    </div>
  );
}

export default App;

const Header = styled.header`
  min-height: 70vh;
  background: url(${r8});
  background-size: cover;
  position: relative;
`
const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index: 1;
  background: rgba(60,60,60,.8);
`