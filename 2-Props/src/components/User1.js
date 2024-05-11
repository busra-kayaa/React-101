import React from "react";

function User1({data, friends})
{
    console.log(friends)
    return(
        <div>
            Kişi
            <div>İsim: {data.name}</div>
            <div>Soyisim: {data.surname}</div>
            <div>Yaş: {data.age}</div>
            <div>Şehir: {data.city}</div>

            <h4>Arkadaşları</h4>
            {
                friends.map((friend,i) => (
                    <div key={i}>{friend}</div>
                ))
            }
            <hr/>
        </div>
    );
}

export default User1;