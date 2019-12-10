
import React from "react";
import { Form, } from "semantic-ui-react";

class ListForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
        this.props.edit({id: this.props.id, ...this.state});
        // this.props.toggleEdit()
    }else{
    this.props.addList(this.state.name);
    }
    this.setState({ name: "", });
  };

  

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="Name"
          placeholder="Name"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    );
  };
};

export default ListForm;