import React from "react";
import ListForm from "./ListForm";
import ShowList from "./ShowList";
class AddList extends React.Component {
  state = {
    arrThings: [{ id: "", thing: "", time: "" }],
  };

  addList = (job) => {
    let current = this.state.arrThings;
    current.push(job);
    this.setState({
      arrThings: current,
    });
  };
  removeList = (job) => {
    let currentR = this.state.arrThings;
    currentR = currentR.filter((thing) => thing.id !== job.id);
    this.setState({
      arrThings: currentR,
    });
  };
  removeAll = () => {
    let currentRA = this.state.arrThings;
    currentRA = [{ id: "", thing: "", time: "" }];
    this.setState({
      arrThings: currentRA,
    });
  };
  render() {
    return (
      <>
        <ListForm addList={this.addList} />
        <ShowList
          arrThings={this.state.arrThings}
          removeList={this.removeList}
          removeAll={this.removeAll}
        />
      </>
    );
  }
}

export default AddList;
