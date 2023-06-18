import { For } from "million/react";
import "./App.css";
import { RowBlock } from "./components/RowBlock";
import { SubBlock } from "./components/atom/SubBlock";

function App() {
  const arr = [
    {
      key: "red",
      adjective: "red",
      color: "red",
      noun: "red",
    },
    {
      key: "blue",
      adjective: "blue",
      color: "blue",
      noun: "blue",
    },
  ];
  return (
    <div className="App">
      {/* <For
        each={arr}
        children={({ adjective, color, noun, key }) => (
          <>
            <RowBlock
              adjective={adjective}
              color={color}
              noun={noun}
              keyName={key}
            />
            <RowBlock
              adjective={adjective}
              color={color}
              noun={noun}
              keyName={key}
            />
          </>
        )}
      /> */}
      <SubBlock
        adjective={"adjective"}
        color={"color"}
        noun={"noun"}
        keyName={"keyName"}
      />

      <For
        each={arr}
        children={({ adjective, color, noun, key }) => <p>aaa</p>}
      />
      <For each={arr}>
        {({ adjective, color, noun, key }) => (
          <RowBlock
            adjective={adjective}
            color={color}
            noun={noun}
            keyName={key}
          />
        )}
      </For>
    </div>
  );
}

export default App;
