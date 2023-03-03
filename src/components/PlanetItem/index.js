// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container">
      <img className="item-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="item-heading">{name}</h1>
      <p className="item-description">{description}</p>
    </div>
  )
}

export default PlanetItem
