import './Sources.css'

const Sources = ({sourcesList, onSourceClick}) => {
  return (
    <ul className="sources">
      {sourcesList && sourcesList.length > 0 ? 
          sourcesList
            .map((source, index) => (
              <li key={index} className="source" onClick={() => onSourceClick(source.id)}>
                {source.name}
              </li>
            )) 
          :
          ""
        }
    </ul>
  )
}

export default Sources