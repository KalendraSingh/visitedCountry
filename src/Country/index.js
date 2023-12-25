const Country = props => {
  const {countryDetails, countryIsVisited} = props
  const {id, name, isVisited} = countryDetails

  const status = isVisited ? 'Visited' : 'Visit'

  const onClickCountryVisit = () => {
    countryIsVisited(id)
  }

  return (
    <li>
      <div className="country-bg">
        <div>
          <p>{name}</p>
        </div>
        {isVisited ? (
          <p>Visited</p>
        ) : (
          <div>
            <button
              type="button"
              style={{color: '#fff', backgroundColor: '#3b82f6'}}
              onClick={onClickCountryVisit}
            >
              {status}
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default Country
