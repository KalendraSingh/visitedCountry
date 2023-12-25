const VisitedCountry = props => {
  const {visitedDetails, countryIsVisited} = props
  const {id, name, imageUrl} = visitedDetails

  const removeButtonClicked = () => {
    countryIsVisited(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="thumbnail" style={{width: '20%'}} />
        <p>{name}</p>
        <button type="button" onClick={removeButtonClicked}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
