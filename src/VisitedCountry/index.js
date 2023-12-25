const VisitedCountry = props => {
  const {visitedDetails, countryIsVisited} = props
  const {id, name, imageUrl} = visitedDetails

  const onClickcountryIsVisited = () => {
    countryIsVisited(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="thumbnail" />
        <p>{name}</p>
        <button type="button" onClick={onClickcountryIsVisited}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry
