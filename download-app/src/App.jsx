import './App.css'
import ainosLogo from './assets/ainosLogo2.jpeg';
function App() {

  return (
    <>
      <div className='container'>


        <div className='content-box'>
          <div className='img-div'>
            <img className='icon' src={ainosLogo}></img>
            <h3>Ainos Object Detection <span className='span'>V1.1</span> </h3>
            <div className='btn-div' >
              <a href='https://drive.google.com/uc?export=download&id=1NMHntBgm50ckSh95RiMHHznAHHU2Jsqi
' className='download-btn'>Download</a>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
