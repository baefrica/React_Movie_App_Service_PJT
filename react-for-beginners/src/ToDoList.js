import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your To Do List.."
          value={toDo}
          onChange={onChange}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* map : 이전 배열을 가지고 와서 변형시킴 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
