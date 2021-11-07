function AboutWhat(props) {
  const { title, content } = props;
  return (
    <div className="text-start w-50 mx-auto">
      <h1>{title !== "Page" ? `About the ${title}` : `About ${title}`}</h1>
      <p>{content}</p>
    </div>
  );
}

export default AboutWhat;
