import './App.css'
import ainosLogo from './assets/ainosLogo2.jpeg';
import documantation from './assets/AinosObjectDetection.pdf'
/*V2.4
https://drive.google.com/file/d/1u-BW5kqDkP19KUGOIj2U4THSRAZnut6V/view?usp=sharing
*/

function App() {

  return (
    <>
      <div className='container'>
        <div className='content-box'>
          <div className='img-div'>
            <img className='icon' src={ainosLogo}></img>
            <h3 className='content-title'>Ainos Object Detection <span className='span'>V0.2.4</span> </h3>
            <div className='btn-div' >
              <a href='https://drive.google.com/uc?export=download&id=1u-BW5kqDkP19KUGOIj2U4THSRAZnut6V
' className='download-btn'>Download</a>
            </div>
          </div>
        </div>

        <div className='footer-div'>
        <p>Copyrigth © 2024  |  
        <span className='footer-title'>  AI</span>NOS |</p> 
        <a href={documantation} download={documantation}>Kurulum</a> </div>
      </div>
    </>
  )
}

export default App
