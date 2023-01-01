//electron


import './index.css'
import logo from '../../assets/logo.png'
import min from '../../assets/min.svg'
import close from '../../assets/close.svg'


export default function WinBar (){
    
    const minimizeApp = () => {
        fetch('http://localhost:8080/minimize',{method: 'GET'})
    }
    const closeApp = () => {
        fetch('http://localhost:8080/close',{method: 'GET'})
    }

    return (
        <div className='BgWinBar'>
            <img src={logo}  alt="logo from app" style={{width:25, height:31}} className="logo"/>

            <input type="text" className='pathInput' placeholder='C:/MyPathToSave'/>

            <div className='WinButtonsContainer'>
                <button className='WinMinButton' onClick={minimizeApp}>
                    <img src={min} alt="botão de minimizar" style={{width:16, height:2}}/>
                </button>

                <button className='WinCloseButton' onClick={closeApp}>
                    <img src={close} alt="botão de fechar" style={{width:20, height:20}}/>
                </button>                 
            </div>

            <div className='GradientBar'></div>
        </div>
    )
}
