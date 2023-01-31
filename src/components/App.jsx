import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">EMAIL SIGNATURE DIRECTORY</h1>
      {contacts.map((con) => (
        <Card
          key={con.id}
          name={con.name}
          img={con.imgURL}
          tel={con.phone}
          email={con.email}
        />
      ))}
    </div>
  );
}

export default App;
