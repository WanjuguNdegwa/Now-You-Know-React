import NewsArticle from "./NewsArticle"

const NewsList = ({articles, isLoading, title}) => {
  return (
    <div className="container">
      <h2 className="my-3">{title.charAt(0).toUpperCase() + title.slice(1)}</h2>

      {isLoading ? (<div id="loading"></div>) :
      (<div className="row d-flex justify-content-between">
        {articles && articles.length > 0 ? 
          articles.filter((article) => article.content !== null)
            .map((article, index) => (
              <NewsArticle
                key={index}
                article={article}
              />
            )) 
          :
          "No articles to show"
        }
      </div>)}
    </div>
  )
}

export default NewsList