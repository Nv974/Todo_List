import { useState } from "react";
import Counter from "../Counter";
import Form from "../Form";
import TasksList from "../TasksList";
import "./app.scss";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputEdit, setInputEdit] = useState("");
  const [checked, setChecked] = useState(false);

  const deleteTask = (id) => {
    const removeArr = [...list].filter((task) => task.id !== id);
    setList(removeArr);
  };

  const changeTask = (id) => {
    list.map((task) => {
      if (task.id === id) {
        return (task.title = inputEdit);
      } else return task;
    });
    setInputEdit("");
  };

  const check = () => {
    setChecked(!checked);
  };

  return (
    <div className="app">
      <Form
        list={list}
        setList={setList}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Counter inputValue={inputValue} checked={checked} deleteTask={deleteTask}/>
      <TasksList
        list={list}
        deleteTask={deleteTask}
        setInputEdit={setInputEdit}
        inputValue={inputEdit}
        changeTask={changeTask}
        check={check}
      />
    </div>
  );
}

export default App;
