import React from "react";
import Item from "../Item/Item";

class List extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}
export default List;
