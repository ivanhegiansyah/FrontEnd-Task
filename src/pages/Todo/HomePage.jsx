// import Head from "./components/Head";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import ListContent from "./ListContent";
import InputContent from "./InputContent";
import Navbar from "./Navbar";

// export default function HomePage({ data }) {
//   return (
//     <>
//       <Head />
//       <div>
//         <h1 style={{ textAlign: "center" }}>todos</h1>
//       </div>
//       {data.map((isi) => (
//         <Content key={isi.id.toString()} isi={isi} />
//       ))}
//     </>
//   );
// }

function HomePage() {
  const [todo, setTodo] = useState({
    data: [
      {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true,
        editing: true,
      },
      {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false,
        editing: true,
      },
    ],
  });

  const deleteContent = (id) => {
    const todos = todo.data.filter((item) => item.id !== id);
    setTodo({ data: todos });
  };

  const addContent = (newContent) => {
    const content = { id: uuidv4(), ...newContent };
    setTodo({ data: [...todo.data, content] });
  };

  const editContent = (id, newContent) => {
    const contents = todo.data.map((content) => {
      if (content.id === id) {
        content.title = newContent.title;
      }
      return content;
    });
    setTodo({ data: contents });
  };

  const checkContent = (id) => {
    const contents = todo.data.map((content) => {
      if (content.id === id) {
        content.completed = true;
      }
      return content;
    });
    setTodo({ data: contents });
  };

  const uncheckContent = (id) => {
    const contents = todo.data.map((content) => {
      if (content.id === id) {
        content.completed = false;
      }
      return content;
    });
    setTodo({ data: contents });
  };

  return (
    <>
      {/* <Head /> */}
      <Navbar />
      <Title />
      <InputContent addContent={addContent} />
      <ListContent
        data={todo.data}
        deleteContent={deleteContent}
        editContent={editContent}
        checkContent={checkContent}
        uncheckContent={uncheckContent}
      />
    </>
  );
}

export default HomePage;
