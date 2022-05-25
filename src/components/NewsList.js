import NewsArticle from "./NewsArticle"

const NewsList = ({articles}) => {
  return (
    <div className="container">
      <div>
        <h2 className="my-3">Top Stories</h2>

        <div id="loading"></div>
        <div className="row d-flex justify-content-between">
          {articles.length > 0 ? articles.map((article, index) => (
            <NewsArticle
              key={index}
              article={article}
            />
          )) :
          "No articles to show"
          }
        </div>
      </div>

    </div>
  )
}

export default NewsList