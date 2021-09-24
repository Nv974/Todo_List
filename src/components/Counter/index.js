import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./counter.scss";

const Counter = ({ inputValue, checked, deleteTask }) => {
  const [numberDone, setNumberDone] = useState("");
  const [numberTasks, setNumberTasks] = useState(0);

  useEffect(() => {
    const tasksDone = document.querySelectorAll(".taskslist__task--done");
    const tasksTodo = document.querySelectorAll(".taskslist__task");
    tasksTodo.length > 0 ? setNumberTasks(tasksTodo.length) : setNumberTasks(0);
    tasksDone.length > 0 ? setNumberDone(tasksDone.length) : setNumberDone(0);
  }, [inputValue, checked, deleteTask]);

  const totalNumber = numberDone + numberTasks
  const ratio = (numberDone * 100) / totalNumber

  const doNothing = () => {}

  return (
    <div className="counter">
      <div className="counter__todo">
        {numberTasks === 1 && "Une tâche en cours"}
        {numberTasks > 1 && "Tâches en cours : " + numberTasks}
      </div>
      <div className="counter__done">
        {numberDone === 1 && " Une tâche terminée"}
        {numberDone > 1 && " Tâches terminées : " + numberDone}
      </div>
      { totalNumber > 0  && <div className="counter__ratio">
        <input
          className="counter__ratio__range"
          type="range"
          max="100"
          value={ratio}
          onChange={doNothing}
          style={{width :  ratio + "%" }}
        />
      </div>}
    </div>
  );
};

export default Counter;
