import React from "react";

class ShowList extends React.Component {
  handleDeleteThing = (job) => {
    this.props.removeList(job);
  };
  handleRemoveAll = () => {
    this.props.removeAll();
  };
  render() {
    let arrThings = this.props.arrThings;
    return (
      <>
        <div id="show-list">
          <div>Danh sách việc cần làm:</div>
          <div>
            {arrThings.map((item, index) => {
              return (
                <div key={item.id}>
                  {index} - {item.thing} - {item.time}{" "}
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => {
                      this.handleDeleteThing(item);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div id="Reset">
          <input
            type="button"
            value="Reset"
            onClick={() => {
              this.handleRemoveAll();
            }}
          />
        </div>
      </>
    );
  }
}

export default ShowList;
