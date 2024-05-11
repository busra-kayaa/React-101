import React from 'react';

//property->özellik
//rfce (react functional export component) enter yaparsak,temel component karsimiza cikar

//props -> ayni component üzerinden farkli sonuclari üreten bir yapi olusturur
function User(props) {
    console.log(props)

    const {name, surname, age, city} = props.data
    return (
        <div>
            User
            {/* <div>İsim: {props.name} </div>
            <div>Soyisim: {props.surname} </div>
            <div>Yaş: {props.age} </div>
            <div>Şehir: {props.city} </div> */}

            <div>İsim: {name} </div>
            <div>Soyisim: {surname} </div>
            <div>Yaş: {age} </div>
            <div>Şehir: {city} </div> 
            <hr/>
        </div>
    )
} 
/*
function User({data : {name, surname, age, city}}) {
    return (
        <div>
            User
            <div>İsim: {name} </div>
            <div>Soyisim: {surname} </div>
            <div>Yaş: {age} </div>
            <div>Şehir: {city} </div> 
            <hr/>
        </div>
    )
} 
*/

export default User;