import { Component } from "react";
import styles from "./Content.module.css";
class Content extends Component {
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

  handleEdit = () => {
    // e.preventDefault();

    const isEmpty = this.state.title === "";
    if (!isEmpty) {
      const newData = {
        title: this.state.title,
        completed: this.state.completed,
        editing: false,
      };

      this.props.editContent(this.props.item.id, newData);
      this.setState({
        title: "",
        completed: false,
        editing: true,
      });
    } else {
      alert("Title tidak boleh kosong");
    }
  };

  handleBukaEdit = () => {
    this.setState({
      editing: false,
    });
  };

  handleTutupEdit = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <tr className={styles.row}>
        <td>
          <input
            style={{ cursor: "pointer" }}
            defaultChecked={this.props.item.completed ? true : false}
            type="checkbox"
            onClick={
              this.props.item.completed
                ? () => this.props.uncheckContent(this.props.item.id)
                : () => this.props.checkContent(this.props.item.id)
            }
          />
        </td>
        <td
          style={{ width: "260px" }}
          className={this.props.item.completed ? styles.completed : ""}
        >
          {this.props.item.title}
        </td>
        <td>
          <div style={viewMode}>
            <input
              type="text"
              placeholder="Edit todo..."
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <button onClick={this.handleEdit} className={styles.btn2}>
              Edit
            </button>
          </div>
          <button
            onClick={this.handleBukaEdit}
            style={editMode}
            className={styles.btn2}
          >
            Edit
          </button>
        </td>
        <td className={styles.content}>
          <button
            className={styles.btn1}
            onClick={() => this.props.deleteContent(this.props.item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Content;
