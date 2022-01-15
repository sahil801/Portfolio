import React,{useEffect, useState} from 'react'
import Typewriter from 'typewriter-effect';
import {HiMenu} from 'react-icons/hi';
import {ImCancelCircle} from 'react-icons/im';
import {AiOutlineUpCircle} from  'react-icons/ai';
import 'animate.css';

function Hero() {
    const [show,setShow] = useState(true);
    const [showNavbar,setShowNavbar] = useState(false);
    const [showToTopButton,setShowToTopButton] = useState(false)
    const handleScroll=()=>{
        if(window.screen.width<=992&&window.scrollY>=100){
            setShowNavbar(true);
            setShowToTopButton(true);
        }else{
            setShowNavbar(false);
            if(window.scrollY>=100){
                setShowToTopButton(true)
            }else{
                setShowToTopButton(false)
            }
        }
        if((window.screen.width<=992)&&(document.getElementById('header').style.display==='none')){
            setShow(true);
        }
    }
    var width = window.screen.width;
    const goToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});  
        width= window.screen.width;   
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, true);
    })
    return (
        <>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center" >
                
                <div className={showNavbar?'MobileNavbar backgroundBlack':'MobileNavbar'}>
                    <div className='nav-item '>
                        {showNavbar?
                        <span>SAHIL</span>:<span></span>}
                    </div>
                    <span>{width}</span>
                    <div  className='nav-item menueButton'>
                        {show?<HiMenu style={{fontSize:30 ,cursor:'pointer' }} onClick={()=>{document.getElementById('header').style.display='flex';setShow(!show)}}/>
                                :
                            <ImCancelCircle style={{fontSize:30,cursor:'pointer'}} onClick={()=>{document.getElementById('header').style.display='none';setShow(!show)}}/>
                        }
                    </div>
                </div>
                <div class="hero-container" onScroll={()=>{handleScroll()}} data-aos="fade-in">
                    <h1>Sahil Soni</h1>
                    <p>I'm  <label><Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={
                            (typer)=>{

                                typer.typeString("Full stack Devloper")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("competative coder")
                                .start()
                            }}
                    /></label></p>
                </div>
                {showToTopButton&&(<div className='goToTop animate__animated animate__bounce animate__slower animate__infinite' onClick={()=>{goToTop()}}>
                    <AiOutlineUpCircle/>
                </div>)}
                
            </section>
        </>
    )
}

export default Hero
