import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 20 });

  // BAD - Don't do this!
//   const handleIncreaseAge = () => {
//     // mutating the current state object
//     person.age = person.age + 1;
//     setPerson(person);
//   };

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function PersonExercise() {
  const [person, setPerson] = useState({ firstName: "fdsfs", lastName: "ewrer",age: 20 });

  //const [firstName, setFirstName] = useState('');
  //const [lastName, setLastName] = useState('');

  //const fullName = firstName + ' ' + lastName;

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };    //works
    //const newPerson = { age: person.age + 1, ...person };  //doesn't work ????????
    //const newPerson = Object.assign({}, person, {age: person.age + 1} );
    //const newPerson = { ...person };   //doesn't work der
    setPerson(newPerson);
  };


// New object is needed for the rerender because of the way React  
// determines whether the object has changed. 
// above and below are all the options that worked and one
// didn't...
//These are some neat generics If found 4th one is mine but based off
//what I saw in MDN it's fine
//const referenceCopy = originalObject;
//const shallowCopy = Object.assign({}, originalObject);
//const shallowCopy = { ...originalObject };
//const shallowCopy = Object.assign({}, originalObject, originalObject2, originalObject3);


  function handleFirstNameChange(e) {
    // const newPerson = { ...person, firstName: person.firstName = person.fisrtName + e.target.value};
    person.firstName = e.target.value;
    //const newPerson = { firstName: person.firstName, ...person}     //works but why when not above, maybe because of the internal assignment must be after a spread???????  
    //const newPerson = { ...person, firstName: person.firstName }   //works
    //const newPerson = Object.assign({}, person);      //works
    const newPerson = {...person};
    setPerson(newPerson);
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
    //const newPerson = { firstName: person.firstName, ...person}    //both work? it is like fill in the rest of the object but it doesn't matter which way
    const newPerson = { ...person, lastName: person.lastName }
    setPerson(newPerson);
  }

  return (
    <>
      <label>
        First name:{' '}
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      {/* <h1>{person.fullname}</h1> */}
      <h2>huh</h2>
      <h2>{person.age}</h2>
      <h2>{person.firstName}</h2>
      <h2>{person.lastName}</h2>
      <h2>Fullname : {person.firstName} {person.lastName}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <h2>------------------------</h2>
    </>
  );
}



export {Person, PersonExercise};