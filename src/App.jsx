
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CardsContainer from './components/CardsContainer'
import ApplicationBanner from './components/ApplicationBanner'
import Footer from './components/Footer'
function App() {
  let cards_info =[
    {
      type:"برنامج",
      title:"برنامج Arduino",
      location:"الرياض",
      duration:"اسبوع",
      start_date:"9/2/2024",
      

    },
    {
      type:"لقاء",
      title:" اساسيات AWS",
      location:"الرياض",
      duration:"اسبوع",
      start_date:"27/9/2024",
      

    },

    {
      type:"برنامج",
      title:"الامن الاسبراني",
      location:"الرياض",
      duration:"5 اشهر",
      start_date:"12/2/2025",
      

    },
    {
      type:"لقاء",
      title:"تاريخ التكنلوجيا",
      location:"الرياض",
      duration:"ساعتان ",
      start_date:"12/2/2025",
      

    },
    {
      type:"لقاء",
      title:"دراسة سرعة البرامج",
      location:"الرياض",
      duration:"ساعتين ",
      start_date:"5/2/2022",
      

    },
    {
      type:"معسكر",
      title:"الهندسة العكسية",
      location:"الرياض",
      duration:"5 اشهر",
      start_date:"9/7/2025",
      

    }
  ]
  //معسكر
//لقاء
  return (
    <>
      <Navbar/>
      <Banner/>
      <CardsContainer cardsInfo={cards_info} />
      <div className='row g-0 d-flex justify-content-center'>
        <button className='col-lg-3  col-sm-5 col-md-6 col-9 btn btn-outline-purple mt-5'> تحميل المزيد</button>
        <ApplicationBanner icons={["user","scroll","mouse"]}/>
      </div>
      <Footer/>
      
      
    </>
  )
}

export default App
