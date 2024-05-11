import PropTypes from 'prop-types';
import React from 'react';

function User2({title,data,friends})
{
    return(
        <div>
            <strong>{title}</strong>
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

/* User2.propTypes = {
    name : PropTypes.string.isRequired ,
    surname : PropTypes.string,
    age : PropTypes.number,
    city : PropTypes.string
} */

User2.propTypes = {
    title: PropTypes.string.isRequired, //Zorunlu olarak işaretleme
    data: PropTypes.exact({
        name: PropTypes.string,
        surname : PropTypes.string,
        age: PropTypes.number,
        city : PropTypes.string,
    }),
    friends : PropTypes.array,
};

//Herhangi bir tanim yapilmayan propsa varsayilan deger verilir.
User2.defaultProps = {
    title : "Kişi",
};

export default User2;