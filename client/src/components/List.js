import React from "react";
import MainMenu from "./MainMenu";

const List = (props) => (
  <div>
    { props.lists.map( list => (
      <MainMenu 
        key={list.id} 
        {...list} 
        deleteList={props.deleteList} 
        updateList={props.updateList}
        // edit={this.editList}
      />
    ))}
  </div>
);

export default List;