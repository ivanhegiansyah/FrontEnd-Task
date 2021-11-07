import { useState } from "react";
import styles from "./InputContent.module.css";

function InputContent(props) {
  const { addContent } = props;
  const [input, setInput] = useState({
    title: "",
    completed: false,
    editing: true,
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = input.title === "";
    if (!isEmpty) {
      const newData = {
        title: input.title,
        completed: input.completed,
      };
      addContent(newData);
      setInput({
        title: "",
        completed: false,
      });
    } else {
      alert("Title tidak boleh kosong");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Add todo..."
          name="title"
          className={styles.input}
          value={input.title}
          onChange={onChange}
        />
        <button onClick={handleSubmit} className={styles.button}>
          Submit
        </button>
      </div>
    </>
  );
}

export default InputContent;
