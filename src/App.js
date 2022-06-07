import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const elements = data.map((items) => {
    return <Card key={items.id} items={items} />;
  });

  return (
    <div>
      <Header />
      {elements}
    </div>
  );
}
