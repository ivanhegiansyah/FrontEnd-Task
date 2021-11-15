export default function NewsItem(props) {
  const { content, title } = props;
  return (
    <div className="container card p-2 mb-2">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}
