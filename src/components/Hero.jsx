import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    
    <div className='herocontainer'>
        <div className="text">
            <div className="hiwrapper">
            <h1 className='name'>Hello! I am </h1>
            <div className='tag'>UI/UX</div>
            </div>
            <h1 className='name'>Wondi Fekadu</h1>
            <p>Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. <br /> Quod, ex. adipisicing elit. Quod, ex.</p>
        <div className="ctas">
            <button>Hire Me</button>
            <p>Projects</p>
        </div>
        <div className="dtails-card gy">
            <h4>+84</h4>
            <p>Clinets work on<br />worldwide</p>
        </div>
        <div className='twoexprience'>
       
        <div className="dtails-card">
            <h4>572</h4>
            <p>Project done</p>
        </div>
        <div className="dtails-card">
            <h4>Contact</h4>
            <p>wendimar778@gmail.com</p>
        </div>

        </div>
        {/* <div className="foot">
            <div className="status">
              <h3>Project<br /> Statsics 2023</h3>
            </div>
            
    <div className='dialoguewrappper'>
            <div className="dialigue">
                <p className='item'>Website design</p>
                <p className='quant'>87</p>
                
            </div>
            <div className="dialigue">
                <p className='item'>Website design</p>
                <p className='quant'>87</p>
                
            </div>
            <div className="dialigue">
                <p className='item'>Website design</p>
                <p className='quant'>87</p>
                
            </div>
            </div>
        </div> */}
        </div>
        <div className="image">
                <p className='catchline'>Convert Yoursite in <b>Figma</b> <br /> <b>Scketch</b> or <b>XD</b></p>
                <div className="cont">
                <div className='scketch'>
                    
                </div>
                <div className='figma'>
                    
                </div>
                <div className='scketch blu'>
                    
                </div>
                </div>
            <div className="newletter">
                <input placeholder='Subscribe my Newsletter'/>
                <div className="go">GO</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero