import React from "react";
import Task from "./Task";
import "./taskslist.scss";

const TasksList = ({
  list,
  deleteTask,
  updateTask,
  editTask,
  setInputEdit,
  inputEdit,
  changeTask,
  check
}) => {
  return (
    <div className="taskslist">
      <ul>
        {list.map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            editTask={editTask}
            setInputEdit={setInputEdit}
            inputEdit={inputEdit}
            changeTask={changeTask}
            list={list}
            check={check}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
