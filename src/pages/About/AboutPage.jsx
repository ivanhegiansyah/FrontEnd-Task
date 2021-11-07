import AboutDetail from "./AboutDetail";
import Navbar from "./Navbar";

function About(props) {
  const { title, content } = props;
  return (
    <div>
      <Navbar activePage={title} />
      <AboutDetail title={title} content={content} />
    </div>
  );
}

export default About;
