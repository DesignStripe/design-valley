import React from "react";
import Card from "./components/Card";
import CardsContainer from "./components/CardsContainer";

const cardData = [
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  },
  {
    image: "https://picsum.photos/200/",
    title: "Name of app",
    description: "Desription of the design resource here"
  }
];

function App() {
  return (
    <div className="App">
      <CardsContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image + 300 + index}
            title={card.title}
            description={card.description}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default App;
