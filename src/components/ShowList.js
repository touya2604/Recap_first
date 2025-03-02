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
                  <div className="rating">
                    <input value="5" name="rate" id="star5" type="radio" />
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio" />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      id="star3"
                      type="radio"
                      checked=""
                    />
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio" />
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio" />
                    <label title="text" for="star1"></label>{" "}
                  </div>
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
