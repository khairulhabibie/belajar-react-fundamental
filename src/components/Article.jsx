function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date} tag : {props.tags}
      </small>
    </>
  );
}

export default Article;
