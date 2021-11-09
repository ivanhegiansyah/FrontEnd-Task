import Content from "./Content";
import styles from "./ListContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContent, checkContent } from "../../store/todoSlice";

const ListContent = (props) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {todos.map((content) => (
            <Content
              key={content.id}
              item={content}
              deleteContent={() => {
                dispatch(deleteContent(content.id));
              }}
              checkContent={() => {
                dispatch(checkContent(content.id));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListContent;
