import './App.css';
import NameCard from './Components/Card/index.js'
import SongName from './Components/Card/index_2.js' 
function App() {
  return (
    <div>
    <div>
    <h1>Thứ Sáu Đây Rồi</h1>
    <div className="daily_title">
      <NameCard image="./src/assets/Album_cover/1.jpg" title="Nhạc Cho Thứ Sáu" description="Rap Việt ở đây, bấm PLAY cả ngày thứ sáu"/>
      <NameCard image="./src/assets/Album_cover/2.jpg" title="Những sự kết hợp Mới" description="Những pha hội ngộ mới mẻ nhưng không bỡ ngỡ của V-Pop"/>
      <NameCard image="./src/assets/Album_cover/3.jpg" title="Everyday Favorites" description="Enjoy cả ngày với những bản Hits nghe không biết chán là gì"/>
      <NameCard image="./src/assets/Album_cover/4.jpg" title="Nam Thần Nhạc Việt" description="Đổ đứ đừ với những nam thần của làng nhạc Việt"/>
      <NameCard image="./src/assets/Album_cover/5.jpg" title="Pop Right Now" description="Giai điệu Pop thời thượng mà bạn không thể bỏ lỡ"/>
    </div>
    </div>
    <div>
      <h1>Mới Phát Hành</h1>
    <div className = "new_songs">
      <SongName picture="./src/assets/New_song/1.jpg" song_title ="With You" composer="Gary Ponte, JP Cooper" time="Hôm nay"/>
      <SongName picture="./src/assets/New_song/2.jpg" song_title ="Nỗi Nhớ Khi Xưa" composer="Kha" time="1 ngày trước"/>
      <SongName picture="./src/assets/New_song/3.jpg" song_title ="Monotonia" composer="Shakira, Ozuna" time="2 ngày trước"/>
      <SongName picture="./src/assets/New_song/4.jpg" song_title ="WDIA (Would Do It Again)" composer="Rosa Linn, Duncan Laurence" time="Hôm nay"/>
      <SongName picture="./src/assets/New_song/5.jpg" song_title ="Cô Đơn Trên Sofa" composer="Hồ Ngọc Hà" time="1 ngày trước"/>
      <SongName picture="./src/assets/New_song/6.jpg" song_title ="Vàng" composer="Daisy Le Garcon, Wren Evans" time="2 ngày trước"/>
      <SongName picture="./src/assets/New_song/7.jpg" song_title ="Hẹn Em Trong Ký Ức" composer="Thái Đinh, Nam Kun" time="1 ngày trước"/>
      <SongName picture="./src/assets/New_song/8.jpg" song_title ="906090" composer="Tóc Tiên, Mew Amazing" time="1 ngày trước"/>
      <SongName picture="./src/assets/New_song/9.jpg" song_title ="Bài này không để đi diễn" composer="Anh Tú Atus" time="4 ngày trước"/>
      <SongName picture="./src/assets/New_song/10.jpg" song_title ="Lời Có Cánh" composer="OSAD" time="1 ngày trước"/>
      <SongName picture="./src/assets/New_song/11.jpg" song_title ="Let It Die" composer="Ellie Goulding" time="2 ngày trước"/>
      <SongName picture="./src/assets/New_song/12.jpg" song_title ="Hối Duyên" composer="Masew, Khoi Vu, Great" time="5 ngày trước"/>

    </div>
    </div>
    </div>
    
  )
}
export default App