import React from 'react';
import Nav from './component/Nav';
import FancyPill from './component/FancyPill';
// import { ChevronRight, Illustration, Logo, Menu } from './svg';
import './App.css';



function App() {

  return (
    <div className="App" style={{backgroundImage: "url(/svg/illustration.svg)"}}>
     <Nav />
     <main className="App-main">
      <FancyPill cta="Visit our careers page" href="/jobs" text="we're hiring" />
      <h1>A better way to <span>ship web apps</span></h1>
      <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
      <form className="App-form">
        <input type="text" placeholder="Enter your email" />
        <input type="submit" value="Start free trial" />
        <p className="App-legal">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/terms-of-service">terms or service</a>.</p>
      </form>
     </main>
    </div>
  );
}

export default App;
