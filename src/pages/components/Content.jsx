import styles from "./Content.module.css";
export default function Content({
  item,
  deleteContent,
  checkContent,
  uncheckContent,
}) {
  return (
    // <div
    //   style={{
    //     borderBottom: "1px lightgray solid",
    //     margin: "10px 5px",
    //     padding: "5px",
    //     // width: "fit-content",
    //   }}
    // >
    //   <span>{item.title}</span>
    // </div>
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
        style={{ width: "300px" }}
        className={item.completed ? styles.completed : ""}
      >
        {item.title}
      </td>
      <td className={styles.content}>
        <button
          className={styles.button}
          onClick={() => deleteContent(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
