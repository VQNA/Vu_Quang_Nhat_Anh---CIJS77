import './style.css'

function NameCard(props) {
  return (
      <div className = "grid_item">
        <img className = "cover" src = {props.image} alt="cover_image"/>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
  )
}


export default NameCard