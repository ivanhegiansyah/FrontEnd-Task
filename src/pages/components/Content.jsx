import { useState } from "react";
import styles from "./Content.module.css";
function Content(props) {
  const { item, editContent, deleteContent, checkContent, uncheckContent } =
    props;
  const [edit, setEdit] = useState({
    title: "",
    completed: false,
    editing: true,
  });

  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    const isEmpty = edit.title === "";
    if (!isEmpty) {
      const newData = {
        title: edit.title,
        completed: edit.completed,
        editing: false,
      };

      editContent(item.id, newData);
      setEdit({
        title: "",
        completed: false,
        editing: true,
      });
    } else {
      alert("Title tidak boleh kosong");
    }
  };

  const handleBukaEdit = () => {
    setEdit({
      editing: false,
    });
  };

  const viewMode = {};
  const editMode = {};

  if (edit.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <tr className={styles.row}>
      <td>
        <input
          style={{ cursor: "pointer" }}
          defaultChecked={item.completed ? true : false}
          type="checkbox"
          onClick={
            item.completed
              ? () => uncheckContent(item.id)
              : () => checkContent(item.id)
          }
        />
      </td>
      <td
        style={{ width: "260px" }}
        className={item.completed ? styles.completed : ""}
      >
        {item.title}
      </td>
      <td>
        <div style={viewMode}>
          <input
            type="text"
            placeholder="Edit todo..."
            name="title"
            value={edit.title}
            onChange={onChange}
          />
          <button onClick={handleEdit} className={styles.btn2}>
            Edit
          </button>
        </div>
        <button
          onClick={handleBukaEdit}
          style={editMode}
          className={styles.btn2}
        >
          Edit
        </button>
      </td>
      <td className={styles.content}>
        <button className={styles.btn1} onClick={() => deleteContent(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Content;
