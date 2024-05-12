import React, { useState } from 'react';

function User() {
    const [user, setUser] = useState({name: "Büşra", surname: "Kaya"});

    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}
            <div>
                <br/>
                {/* <button onClick={() => setUser({...user, name: "Ahmet"})}> 
                    İsmi Değiştir
                </button> */}
                <button onClick={() => setUser((prev) => ({...prev, name: "Ahmet"}))}> 
                    İsmi Değiştir
                </button>
                {/* <button onClick={() => setUser({...user, surname: "Yayla"})}>
                    Soyismi Değiştir
                </button> */}
                <button onClick={() => setUser((prev) => ({...prev, surname: "Yayla"}))}>
                    Soyismi Değiştir
                </button>
            </div>
        </div>
    );
}

export default User