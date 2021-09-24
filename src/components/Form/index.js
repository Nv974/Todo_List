import React from "react";

import "./form.scss";

const Form = ({ list, setList, inputValue, setInputValue }) => {
  const addNewTask = (e) => {
    e.preventDefault();
    const idList = list.map((task) => task.id).push(0);
    const maxId = Math.max(idList);
    const newTask = { id: maxId, title: inputValue, done: false };

    inputValue.length > 0 && list.push(newTask);
    setList(list);
    setInputValue("");
    
  };

  return (
    <form className="form" onSubmit={addNewTask}>
      <input
        placeholder="Nouvelle tâche ..."
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
