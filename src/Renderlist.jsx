function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function Rendlist() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: (from Rendlist)</h1>
      <List animals={animals} />
    </div>
  );
}

function Listtwo(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function Rendlisttwo() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: (From Rendlist two)</h1>
      <Listtwo animals={animals} />
    </div>
  );
}

function Listthree(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Rendlistthree() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: (from Rendlistthree)</h1>
      <Listthree animals={animals} />
    </div>
  );
}

function Listifs(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Rendlistifs() {
	// const animals = [];
	const animals = ["Lion", "Dog", "Cat", "Lizard"];

  return (
    <div>
      <h1>Animals: (from Rendlistifs)</h1>  
      <Listifs animals={animals} /> 
			{/*<Listifs />*/}    {/*This is often the case when you are fetching from an API, since it might take some time to actually retrieve the data, it is good practice to show an indicator for that. */}
    </div>
  );
}

function Listtern(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function Rendterns() {
  const animals = ["Cat", "Dog"];

  return (
    <div>
      <h1>Animals: (Rend terns)</h1>
      <Listtern animals={animals} />
    </div>
  );
} 

// or
function Listands(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    </>
  );
}

function Rendands() {
  const animals = ["Frog", "Snake"];

  return (
    <div>
      <h1>Animals: (Rend ands)</h1>
      <Listands animals={animals} />
    </div>
  );
} 




export { Rendlist, Rendlisttwo, Rendlistthree, Rendlistifs, Rendands, Rendterns };
