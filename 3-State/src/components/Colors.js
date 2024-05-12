import React, { useState } from 'react';
function Colors() {
    const [colors,setColors] = useState(["red", "green", "blue"]);

    const handleClick = () => {
        setColors([...colors,"grey"]); //önceki değerleri korumak için ...colors yazmamız lazım
    };
    /* const handleClick = () => {
        setColors((prev) => ([...prev,"grey"])); 
    }; */

  return (
    <div>
        <h2>Colors</h2>
        {
            colors.map((color,i)=>(
                <div key = {i}>{color}</div>
            ))
        }
        <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;