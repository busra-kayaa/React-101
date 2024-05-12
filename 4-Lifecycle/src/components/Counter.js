import React, { useEffect, useState } from 'react';

//useEffect sayesinde yaşam döngüsündeki eventleri yakalayabiliriz

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
        
    useEffect(() => {
        let interval = setInterval(() => {
            console.log("interval");
            setCount((prev) => prev + 1);
        },1000);  //sayacın değeri her saniye artar butona basılmasa da.

        //return () => console.log("Componet unmount edildi.");
        return () => clearInterval(interval);
        //Asekron işlemi durdurmamıza sağlar.
    },[]);

    
    useEffect(() => {
       // console.log("Bir state değişti.");
    }); // Bu component üzerinde herhangi bir state değiştiği anda tetiklenir ve içindeki fonksiyon çalıştırılır.
 
    useEffect(() => {
        console.log("Componenet mount edildi.");
    }, []);

   useEffect(() => {
        console.log('Count veya amount state değişti.')
    }, [count,amount]); 
    // arrayin içindeki stateler değiştiği anda çalışr 

    useEffect( ()=> {
        console.log("Count state değişti");
    }, [count]);
    // count state değiştiği anda çalışır

    useEffect( ()=> {
        console.log("Amount state değişti");
    }, [amount]);
    // amount state değiştiği anda çalışır
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(prev => prev + amount)}>Arttır</button>
            <hr/>
            <div>Arttırma: + {amount}</div>
            <button onClick={()=> setAmount(1)}>+1</button>
            <button onClick={()=> setAmount(3)}>+3</button>
            <button onClick={()=> setAmount(10)}>+10</button>
        </div>
    );
}

export default Counter;