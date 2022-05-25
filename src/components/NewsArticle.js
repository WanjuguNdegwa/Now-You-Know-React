import { FaTwitter } from 'react-icons/fa'

const NewsArticle = ({article}) => {

  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  return (
    <div className="card my-3 news-article">
      <div>
          <a href={article.url} target='_blank' rel='noreferrer'>
              <img src={article.urlToImage} className="card-img-top" alt='' />
          </a>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
          <a href={article.url} target='_blank' rel='noreferrer'>
            <h5 className="card-title">{article.title}</h5>
          </a>
          <p className="card-text">{stripHtml(article.content)}</p>
          <div>
              <a href={`https://twitter.com/intent/tweet?text=${article.title}&url=${article.url}&hashtags=NowYouKnow`}>
                <FaTwitter />
              </a>
              <span className="like"><i className="fa-solid fa-heart"></i></span>
          </div>
      </div>
  </div>
  )
}

export default NewsArticle