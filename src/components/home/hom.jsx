import "./home.css";
import tdimg1 from "../../assets/tdimg1.png";
// import LongMenu from "../menu/menu";
import { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import Nav1 from "../menu/menu";
import { MdEdit } from "react-icons/md";
const Hom = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");
  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    // this sets the input empty after adding
    setNewDescription("");
    setNewTitle("");

    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (id) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(id,1);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (id) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[id],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...CompletedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(id);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (id) => {
    let reducedTodo = [...CompletedTodos];
    reducedTodo.splice(id,1);

    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completed"));
    savedTodo.forEach(function (eachObject) {
      console.log(eachObject);
    });
// to add an id to an array
    const updatedArray = savedTodo.map((eachItem, index) => ({
      ...eachItem,
      id: index + 1,
    }));
    console.log(updatedArray);
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
    
  }, []);
  const handleEdit=(id,item)=>{
    console.log(id);
    setCurrentEdit(id);
    setCurrentEditedItem(item);
  }
const handleUpdatedTitle =(value)=>{
setCurrentEditedItem((prev)=>{
  return{...prev,title:value}
})
}
const handleUpdatedDescription =(value)=>{
  setCurrentEditedItem((prev) => {
    return { ...prev, description: value };
  });
}
const handleUpdateTodo = ()=>{
  let newTodo = [...allTodos];
  newTodo[currentEdit] = currentEditedItem;
  setTodos(newTodo);
  setCurrentEdit("");
  localStorage.setItem("todolist", JSON.stringify(newTodo));
}
  return (
    <div>
      <img className="img1" src={tdimg1} alt="flower" />
      <div className="hd1">
        <div className="hd2">
          <h3 className="head1">Todo list</h3>
          {/* <LongMenu className="m" /> */}
          <Nav1 className="m" />
        </div>

        <div className="general">
          <div className="divtitle">
            <label className="lb">Title</label>
            <input
              className="inp"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title of your message"
            />
          </div>
          <div className="divtitle">
            <label className="lb">Description</label>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="inp"
              placeholder="Describe your message"
            />
          </div>
          <button className="add" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <hr id="hline" />
        <div className="todobtn">
          <button
            className={`isCompleteScreen ${
              isCompleteScreen === false && "active"
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`isCompleteScreen ${
              isCompleteScreen === true && "active"
            }`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodos.map((item, id) => {
              if(currentEdit===id) {
                return (
                  <div className="edit-wrapper" key={id}>
                    <input
                      placeholder="Updated Title"
                      onChange={(e) => handleUpdatedTitle(e.target.value)}
                      value={currentEditedItem.title}
                    />
                    <textarea
                      placeholder="Updated description"
                      onChange={(e) => handleUpdatedDescription(e.target.value)}
                      value={currentEditedItem.description}
                    />
                    <button className="add" onClick={handleUpdateTodo}>
                      Update
                    </button>
                  </div>
                );
                
              } else {
                return (
                  <div className="todo-list-item" key={id}>
                    <div className="headdescrip">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="deletecheck">
                      <RiDeleteBin5Line
                        onClick={() => handleDeleteTodo(id)}
                        className="delete"
                      />
                      <FaCheck
                        onClick={() => handleComplete(id)}
                        className="check"
                      />
                      <MdEdit
                        onClick={() => handleEdit(id, item)}
                        className="check"
                        title="Edit"
                      />
                    </div>
                  </div>
                );
              }
            })}

          {isCompleteScreen === true &&
            CompletedTodos.map((item, id) => {
              return (
                <div className="todo-list-item" key={id}>
                  <div className="headdescrip">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      <small>Completed on:{item.completedOn}</small>
                    </p>
                  </div>
                  <div className="deletecheck">
                    <RiDeleteBin5Line
                      onClick={() => handleDeleteCompletedTodo(id)}
                      className="delete"
                      title="Delete?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Hom;