export default function Content({ isi }) {
  return (
    <div
      style={{
        border: "2px black solid",
        borderRadius: "100px",
        margin: "10px 5px",
        padding: "5px",
        width: "fit-content",
      }}
    >
      <p style={isi.completed ? { textDecoration: "line-through" } : null}>
        {isi.title}
      </p>
    </div>
  );
}
