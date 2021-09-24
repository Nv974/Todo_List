import React from "react";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";
import checkIcon from '../../assets/icons/check.png'
import { useState } from "react";

const Task = ({
  id,
  title,
  deleteTask,
  setInputEdit,
  inputEdit,
  changeTask,
  check
}) => {
  const [editTask, setEditTask] = useState(false);
  const [isChecked, setIsChecked] = useState(false);



  const updateTask = () => {
    setEditTask(!editTask);
  };

  const editValue = (e) => {
    const value = e.target.value;
    setInputEdit(value);
  };

  const submitNewValue = (e) => {
    e.preventDefault();
    setEditTask(!editTask);
    changeTask(id);
  };

  const checkTask = () => {
    setIsChecked(!isChecked)
    check()
  }

  return (
    <div className={isChecked ? "taskslist__task--done" : "taskslist__task"}>
      <div className="taskslist__task__left">
        <input
          type="checkbox"
          className="taskslist__task__left__check"
          onChange={checkTask}
        />
        {editTask ? (
          <form
            className="taskslist__task__left__edit"
            onSubmit={submitNewValue}
          >
            <input type="text" value={inputEdit} onChange={editValue} />
          </form>
        ) : (
          <div className="taskslist__task__left__text">
            {title.length < 40 ? title : title.slice(0, 60) + " ..." } 
          </div>
        )}
      </div>
      <div className="taskslist__task__buttons">
        <button>
          <img
            src={editTask ? checkIcon : editIcon}
            alt="editer"
            className="taskslist__task__buttons__edit"
            onClick={updateTask}
          />
        </button>
        <button>
          <img
            src={deleteIcon}
            alt="supprimer"
            className="taskslist__task__buttons__delete"
            onClick={() => deleteTask(id)}
          />
        </button>
      </div>
    </div>
  );
};

export default Task;
