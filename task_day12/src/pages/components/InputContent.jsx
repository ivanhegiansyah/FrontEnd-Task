import { Component } from "react";
import styles from "./InputContent.module.css";

class InputContent extends Component {
  state = {
    title: "",
    completed: false,
    editing: true,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = this.state.title === "";
    if (!isEmpty) {
      const newData = {
        title: this.state.title,
        completed: this.state.completed,
      };
      this.props.addContent(newData);
      this.setState({
        title: "",
        completed: false,
      });
    } else {
      alert("Title tidak boleh kosong");
    }
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Add todo..."
            name="title"
            className={styles.input}
            value={this.state.title}
            onChange={this.onChange}
          />
          <button onClick={this.handleSubmit} className={styles.button}>
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default InputContent;
