function Banana() {
  return (
    <div>
      <h1>Test title (actually in banana function)</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="red" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

function Susageroll() {
  return <h2>I will end you Sausage roll</h2>;
}

function Animallistone() {
const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

function Animallisttwo() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  );
}


export { Banana, Susageroll, Animallistone, Animallisttwo };
