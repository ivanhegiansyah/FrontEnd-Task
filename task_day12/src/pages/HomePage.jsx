// import Head from "./components/Head";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import ListContent from "./components/ListContent";
import InputContent from "./components/InputContent";

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

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true,
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false,
        },
      ],
    };
  }

  deleteContent = (id) => {
    const newListContent = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newListContent });
  };

  addContent = (newTodo) => {
    const content = { id: uuidv4(), ...newTodo };
    this.setState({ data: [...this.state.data, content] });
  };

  checkContent = (id) => {
    const contents = this.state.data.map((content) => {
      if (content.id === id) {
        content.completed = true;
      }
      return content;
    });
    this.setState({ data: contents });
  };

  uncheckContent = (id) => {
    const contents = this.state.data.map((content) => {
      if (content.id === id) {
        content.completed = false;
      }
      return content;
    });
    this.setState({ data: contents });
  };

  render() {
    return (
      <>
        {/* <Head /> */}
        <Title />
        <InputContent addContent={this.addContent} />
        <ListContent
          data={this.state.data}
          deleteContent={this.deleteContent}
          checkContent={this.checkContent}
          uncheckContent={this.uncheckContent}
        />
      </>
    );
  }
}

export default HomePage;
