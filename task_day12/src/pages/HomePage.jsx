import Head from "./components/Head";
import Content from "./components/Content";

export default function Header({ data }) {
  return (
    <>
      <Head />
      {/* <Content isi={data[0]} /> */}
      {data.map((isi) => (
        <Content key={isi.id.toString()} isi={isi} />
      ))}
    </>
  );
}
