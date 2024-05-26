import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './assets/3feb9d7a97a93cac67eb291272ab227e.jpeg'
import img2 from './assets/1ea53edb90b65e5d33d48205a91a17a0.jpeg'
import img3 from './assets/177b17eb1ee85d84d09efcc0fa3e1b69.jpeg'
import img4 from './assets/56cb8d734f17921555e3af4d5fbfd914.jpeg'
import img5 from './assets/554deceb9b7c888745b5f43729a208d3.png'
import img6 from './assets/eb0371790de015fd2dc503be277bd97b.jpeg'
import img7 from './assets/5e3abe50a16b45c46b38b61de4c3c1b2.jpeg'
import './Carousel.jsx'
import Carousel from './Carousel.jsx'
import CardMovie from './CardMovie.jsx'

function App() {
  const [boolean, setBoolean] = useState([true, false, false, false, false, false, false]);
  const [data, setData] = useState([
    {
      "id": "1",
      "movieName": "Weather With You",
      "description": "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
      "image": img1,
      "episode": "01"
    },
    {
      "id": "2",
      "movieName": "One Peace",
      "description": "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
      "image": img2,
      "episode": "1018"
    },
    {
      "id": "3",
      "movieName": "Boruto: Naruto Next Generations",
      "description": "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
      "image": img3,
      "episode": "250"
    },
    {
      "id": "4",
      "movieName": "Spy X Family",
      "description": "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới.",
      "image": img4,
      "episode": "07"
    },
    {
      "id": "5",
      "movieName": "Shingeki no kyojin",
      "description": "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
      "image": img5,
      "episode": "28"
    },
    {
      "id": "6",
      "movieName": "Captain Tsubasa",
      "description": "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
      "image": img6,
      "episode": "28"
    },
    {
      "id": "7",
      "movieName": "Ao Ashi",
      "description": "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
      "image": img7,
      "episode": "28"
    }
  ]
  );

  return (
    <div id="home-div">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div id="navbar">
        <div id="anonime">Anonime</div>
        <div id="home-text">Home</div>
        <div id="list-anime">List anime</div>
        <input type="text" id="frame2" placeholder='Search anime or movie' />
      </div>
      <p id="explore">Explore</p>
      <p id="what">What are you gonna watch today?</p>
      {boolean[0] && <Carousel image={data[0].image} id={data[0].id} movieName={data[0].movieName} description={data[0].description}></Carousel>}
      {boolean[1] && <Carousel image={data[1].image} id={data[1].id} movieName={data[1].movieName} description={data[1].description}></Carousel>}
      {boolean[2] && <Carousel image={data[2].image} id={data[2].id} movieName={data[2].movieName} description={data[2].description}></Carousel>}
      {boolean[3] && <Carousel image={data[3].image} id={data[3].id} movieName={data[3].movieName} description={data[3].description}></Carousel>}
      {boolean[4] && <Carousel image={data[4].image} id={data[4].id} movieName={data[4].movieName} description={data[4].description}></Carousel>}
      {boolean[5] && <Carousel image={data[5].image} id={data[5].id} movieName={data[5].movieName} description={data[5].description}></Carousel>}
      {boolean[6] && <Carousel image={data[6].image} id={data[6].id} movieName={data[6].movieName} description={data[6].description}></Carousel>}
      <div id="latest-release">
        <p id="new-release">New Release</p>
        <div id="frame6">
          {!boolean[0] && <CardMovie carousel={() => {
            setBoolean([true, false, false, false, false, false, false]);
          }} movie={data[0]} image={data[0].image} id={data[0].id} episode={data[0].episode} movieName={data[0].movieName}></CardMovie>}
          {!boolean[1] && <CardMovie carousel={() => {
            setBoolean([false, true, false, false, false, false, false]);
          }} movie={data[1]} image={data[1].image} id={data[1].id} episode={data[1].episode} movieName={data[1].movieName}></CardMovie>}
          {!boolean[2] && <CardMovie carousel={() => {
            setBoolean([false, false, true, false, false, false, false]);
          }} movie={data[2]} image={data[2].image} id={data[2].id} episode={data[2].episode} movieName={data[2].movieName}></CardMovie>}
          {!boolean[3] && <CardMovie carousel={() => {
            setBoolean([false, false, false, true, false, false, false]);
          }} movie={data[3]} image={data[3].image} id={data[3].id} episode={data[3].episode} movieName={data[3].movieName}></CardMovie>}
          {!boolean[4] && <CardMovie carousel={() => {
            setBoolean([false, false, false, false, true, false, false]);
          }} movie={data[4]} image={data[4].image} id={data[4].id} episode={data[4].episode} movieName={data[4].movieName}></CardMovie>}
          {!boolean[5] && <CardMovie carousel={() => {
            setBoolean([false, false, false, false, false, true, false]);
          }} movie={data[5]} image={data[5].image} id={data[5].id} episode={data[5].episode} movieName={data[5].movieName}></CardMovie>}
          {!boolean[6] && <CardMovie carousel={() => {
            setBoolean([false, false, false, false, false, false, true]);
          }} movie={data[6]} image={data[6].image} id={data[6].id} episode={data[6].episode} movieName={data[6].movieName}></CardMovie>}
        </div>
      </div>
    </div>
  )
}

export default App
