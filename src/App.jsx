import "./style.css";
import { useState } from "react";

const Title = () => {
  return <h1 id = "main_title">To-Do List App</h1>;
};

const NewTaskContainer = ({ task_list, setTask_List }) => {
  return(
    <>
      <div id = "new_task_container">
        <input id = "task_input" type = "text" placeholder = "Add a new task..."></input>
        <button id = "add_task_cancel" onClick="cancel_handle()">X</button>
        <button id = "add_task_tick" onClick="add_handle()">✓</button>
      </div>
    </>
  )
}

const TaskCard = (props) =>{
  return(
    <div id = "card_container">
      
    </div>
  );
}

const TaskContainer = ({ task_list }) =>{
  if(task_list.length == 0){
    return(
      <div id = "task_container" class = "empty_task_container">
        No tasks at the moment
      </div>
    )
  }
  else{
    return(
      <div id = "task_container" class = "non_empty_task_container">
        <TaskCard/>
        <TaskCard/>
      </div>
    )
  }
}

function App() {
  const [task_list, setTask_List] = useState([]);

  return (
    <>
      <Title />
      <NewTaskContainer task_list={task_list} setTask_List={setTask_List} />
      <TaskContainer task_list={task_list} />
    </>
  );
}

export default App;