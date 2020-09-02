import React from 'react';
import logo from './logo.svg';
import './style/styles.css';
import styled from 'styled-components'
import r8 from './r8.jpg'
import cent from './cent.svg'
function App() {
  return (
    <div className="App">
      <Header className="App-header w-full text-white">
        <Overlay></Overlay>
        <div className="navbar p-4 text-white w-full relative mx-auto container justify-start flex flex-row items-center" style={{zIndex:18}}>
          <div className="logo-container tracking-widest text-teal-100">
            WHIPCOST
          </div>
          
        </div>
        <div className="container mt-24 align-center mx-auto relative header-content py-6 px-3 text-center" style={{zIndex:20,}}>
          <img src={cent} alt="" className="inline-block w-32" />
          <h1 className="md:text-5xl text-4xl font-bold text-white">
            Whipcost
          </h1>
          <h4 className="text-white text-2xl font-thin">
            Car Loan Calculator
          </h4>
          <button className="mt-4 bg-gray-300 text-black py-3 px-6 w-48 hover:bg-gray-600 rounded-md ">
            PRICE
          </button>
        </div>
      </Header>
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
  background: rgba(70,70,70,.5);
`