import './style.css'

function SongName(props) {
  return (
      <div className = "grid_item">
        <img className = "song_image" src = {props.picture} alt="song_image"/>
        <div className = "song_title">{props.song_title}</div>
        <div className = "composer">{props.composer}</div>
        <div className = "time">{props.time}</div>
      </div>
  )
}


export default SongName