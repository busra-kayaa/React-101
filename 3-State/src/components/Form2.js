import React, { useState } from 'react';

function Form2() {
    const [form, setForm] = useState({name:"",surname:"",gender:"0"});

    const handleChange = (e) => {
        /*setForm({ ...form, [e.target.name]: e.target.value}) */
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value}));
   };

  return (
    <div>
        <div>
            <div>Name</div>
            <input 
                placeholder='İsim'
                name='name'
                value ={form.name}
                onChange ={handleChange}
            />

            <input 
                placeholder='Soyisim'
                name='surname'
                value = {form.surname}
                onChange={handleChange} // arrow function
            />
        </div>
        <br/>
        <div>
            <div>Cinsiyet</div>
            <select 
                value ={form.gender}
                onChange={handleChange}
                name='gender'
            >
                <option value="0">Erkek</option>
                <option value="1">Kadın</option>
            </select> 
        </div>
        <hr/>
        <div>
            İsim :<br/>
            <strong>
                {form.name} {form.surname}
            </strong>
        </div>
        <br/>
        <div>
            Cinsiyet :<br/>
            <strong>
                {form.gender === "0" ? "Erkek": "Kadın"}
            </strong>
        </div>
    </div>
  );
}

export default Form2;