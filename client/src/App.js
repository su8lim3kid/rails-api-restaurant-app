import React from 'react';
import axios from "axios";
import List from "./components/List";
import ListForm from "./components/ListForm";
import { Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { lists: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ lists: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addList = (name) => {
    
    axios.post("/api/menus", { name, })
      .then( res => {
        this.setState({ lists: [...this.state.lists, res.data], });
      })
  };

  updateList = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const lists = this.state.lists.map( list => {
          if (list.id === id)
            return res.data;
          return list;
        });
        this.setState({ lists, });
      })
  };

  deleteList = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        this.setState({ lists: this.state.lists.filter( t => t.id !== id ) })
      })
  };

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>Menu's</h1>
        <ListForm addList={this.addList} />
        <br />
        <br />
        <List 
          lists={this.state.lists} 
          deleteList={this.deleteList} 
          updateList={this.updateList}
        />
      </Container>
    );
  };
};

export default App;