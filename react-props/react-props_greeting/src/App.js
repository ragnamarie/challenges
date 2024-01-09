import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Su" />
      <Greeting name="Yorick" />
      <Greeting name="Klaus" />
    </div>
  );
}

export function Greeting({ name }) {
  const coaches = ["Yorick", "Gimena", "Klaus"];
  return (
    <div>{coaches.includes(name) ? "Hello coach!" : "Hello " + name + "!"}</div>
  );
}
