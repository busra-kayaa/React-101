import React from "react";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
// Componenetlerin baş harfi büyük olmali(Header), html taglari ile karişmamasi için.

const name = "Büşra"
const age = 21
let surname = "KAYA"

const isLoggedIn = false;
const fullname = "Büşra KAYA"

function App() {
// return React.createElement('div',null,React.createElement("p",null)); eski kullanimi
  return (
    <React.Fragment>
      <> 
        <div className= "test">
          <Header/> { /* componenti burada kullaniriz */}

          <div>
            <p className="paragraf">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500s,when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </div>

          <label htmlFor="my">Test</label>

          <h4>{name} {surname} {age}</h4>
          <h2>{`Benim adım ${name}, soyadım ${surname}`}</h2>

          {isLoggedIn ? (
            <div> Hoş geldin {fullname} </div>
          ): (
            <a href = "#/">Giriş Yapiniz </a>
          )}
          
          <h3>
            {
              isLoggedIn && `Benim adım ${name}, soyadim ${surname}` 
            }
            {
              !isLoggedIn && "Giriş Yapmadiniz!!!"
            }  
          </h3>

          <div>
            {isLoggedIn ? <div>Hoş geldin {fullname}</div>: <Login />}
          </div>          
        </div>
      </>
    </React.Fragment>
  );
}
// <React.Fragment> </React.Fragment> ve <> </> ayni amaca hizmet eder.

export default App;
