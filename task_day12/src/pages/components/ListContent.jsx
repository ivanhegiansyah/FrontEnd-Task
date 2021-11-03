import Content from "./Content";
import styles from "./ListContent.module.css";

const ListContent = (props) => {
  const { data, deleteContent, checkContent, uncheckContent } = props;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {data.map((content) => (
            <Content
              key={content.id}
              item={content}
              deleteContent={deleteContent}
              checkContent={checkContent}
              uncheckContent={uncheckContent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListContent;
