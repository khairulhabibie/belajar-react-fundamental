const ArticleNew = ({ isNew }) => {
  return isNew && "-- Baru!!!";
};

const NewArticle = () => {
  return <span>-- Baru!!!</span>;
};

function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date} tag : {props.tags},
        <ArticleNew isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Article;
