import React from "react";

class ShowList extends React.Component {
  handleDeleteThing = (job) => {
    this.props.removeList(job);
  };
  render() {
    let arrThings = this.props.arrThings;
    return (
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
    );
  }
}

export default ShowList;
