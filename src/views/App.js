import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import AddList from "../components/AddList";
import myImage from "../assets/images/4220334.png";

class ToDoList extends React.Component {
  render() {
    return (
      <>
        <div className="title">
          <img id="image" src={myImage} alt="fucl" />
          <h1>This is a To Do List</h1>
          <h2>Please don't laugh at this. I'm newbie</h2>
        </div>

        <div className="input-list">
          <AddList />
        </div>
      </>
    );
  }
}

export default ToDoList;
