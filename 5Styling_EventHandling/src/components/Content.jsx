import React, { useState } from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
`;

let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 10px black;
`;

const Content = () => {
  let [num, setNum] = useState(0);

  let headingStyle = {
    backgroundColor: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };

  let user = "Karthik";

  function printSomething(e) {
    //console.log(e.target.innerText);
    //console.log("Hello");
    user = "Murugesan";
    console.log(user);
    setNum(2);
  }
  function printSomething1(event) {
    // console.log( event.target.innerText );
    // console.log( "Hello World " );
    user = "Rangaswamy";
    console.log(user);
  }

  return (
    <main>
      <p style={headingStyle}>
        Main Content - {user} {num}{" "}
      </p>
      <Button onClick={printSomething}> Click Me! </Button>
      <NewButton
        onClick={(e) => {
          printSomething1(e);
        }}
      >
        {" "}
        Duplicate{" "}
      </NewButton>
    </main>
  );
};

export default Content;
