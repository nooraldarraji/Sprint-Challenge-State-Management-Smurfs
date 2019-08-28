import React from 'react';


const Smurf = props => {
    return (
        <>
        <h4>ID of the smurf :{props.smurf.id}</h4>
        <h4>Smurf Name : {props.smurf.name}</h4>
        <h4>Smurf Age : {props.smurf.age}</h4>
        <h4>Smurf Height : {props.smurf.height}</h4>
        </>
    )
}

export default Smurf;

//   {
//     name: "Brainey",
//     age: 200,
//     height: "5cm",
//     id: 0
//   }