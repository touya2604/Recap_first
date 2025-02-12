import React from "react";

class ListForm extends React.Component {
  state = {
    thing: "",
    time: "",
  };
  handleChangeThings = (event) => {
    this.setState({
      thing: event.target.value,
    });
  };
  handleChangeTime = (event) => {
    this.setState({
      time: event.target.value,
    });
  };
  handleSubmitEvent = (event) => {
    event.preventDefault();
    if (!this.state.thing || !this.state.time) {
      alert("Missing required params");
      return;
    }
    this.props.addList({
      id: Math.floor(Math.random() * 101),
      thing: this.state.thing,
      time: this.state.time,
    });
    this.setState({
      thing: "",
      time: "",
    });
  };
  render() {
    return (
      <>
        <div id="LF">
          <form id="form">
            <label htmlFor="job">Things: </label>
            <input
              type="text"
              id="job"
              value={this.state.thing}
              placeholder="Clean house"
              onChange={(event) => {
                this.handleChangeThings(event);
              }}
            />

            <br></br>
            <br></br>

            <label htmlFor="time">Time: </label>
            <input
              type="time"
              id="time"
              value={this.state.time}
              onChange={(event) => {
                this.handleChangeTime(event);
              }}
            />

            <br></br>
            <br></br>

            <input
              type="button"
              value="Submit"
              onClick={(event) => {
                this.handleSubmitEvent(event);
              }}
            />
            <br></br>
          </form>
        </div>
      </>
    );
  }
}

export default ListForm;
