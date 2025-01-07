function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
	const buttonStyle = {
		color: color,
		fontSize: fontSize + "px"
	};

	return <button style={buttonStyle}>{text}</button>;
}

function ButtApp() {
	return (
		<div>
			<h2>Butt App New Way, for prop setting</h2>
			<Button />
			<Button text="Don't Click Me!" color="red" />
			<Button fontSize={20} />
		</div>
	);
}


function ButtonOld({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

ButtonOld.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12
};

function ButtAppOldWay() {
  return (
    <div>
			<h2>Butt App Old Way, for prop setting</h2>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}


function ButtonPassFunc({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function ButtPassFuncApp() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
			<h2>Button Pass Function</h2>
      <ButtonPassFunc handleClick={handleButtonClick} />
    </div>
  );
}

function ButtonCHA({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function ButtClckHandwithArg() {
  const handleButtonClickA = (url) => {
    window.location.href = url;
  };

  return (
    <div>
			<h2>Butt Clck Hand with Arg</h2>
      <ButtonCHA handleClick={() => handleButtonClickA('https://www.theodinproject.com')} />
    </div>
  );
}




export {ButtApp, ButtAppOldWay, ButtPassFuncApp, ButtClckHandwithArg};