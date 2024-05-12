import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("0");

  return (
    <div>
        <div>
            <div>Name</div>
            <input 
                placeholder='İsim' 
                value ={name} 
                onChange ={(event) => setName(event.target.value)}
            />

            <input 
                placeholder='Soyisim' 
                value = {surname}
                onChange={(event) => setSurname(event.target.value)} // arrow function
            />
        </div>
        <br/>
        <div>
            <div>Cinsiyet</div>
            <select 
                value ={gender} 
                onChange={(event) => setGender(event.target.value)}
            >
                <option value="0">Erkek</option>
                <option value="1">Kadın</option>
            </select> 
        </div>
        <hr/>
        <div>
            İsim :<br/>
            <strong>
                {name} {surname}
            </strong>
        </div>
        <br/>
        <div>
            Cinsiyet :<br/>
            <strong>
                {gender === "0" ? "Erkek": "Kadın"}
            </strong>
        </div>
    </div>
  );
}

export default Form;