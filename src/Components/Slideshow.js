import React, {useRef} from 'react';
import img1 from './../Imagenes/event.png';
import img2 from './../Imagenes/neon2.png';
import img3 from './../Imagenes/tinto.png';
import img4 from './../Imagenes/asia.png';

import styled from 'styled-components';
import {ReactComponent as Flechaderecha}  from './../Imagenes/iconmonstr-arrow-63.svg';
import {ReactComponent as Flechaizquierda}  from './../Imagenes/iconmonstr-arrow-64.svg';





const Slideshow = () => {
    const slideshow = useRef(null);

    const siguiente = () => {
        if(slideshow.current.children.length > 0){

            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `300ms ease-out all`;

            const tamanoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform= `translateX(-${tamanoSlide}px)`;

            const transicion = () => {

                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);

            }

            slideshow.current.addEventListener('transitionend', transicion);

       }
    }
    
    const anterior = () => {

        if(slideshow.current.children.length > 0){
			
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamanoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `300ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
        }

    }
    return(

        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow}>
                <Slide1>
                    <a href="https://www.instagram.com">
                        <img src={img1} alt=""/>
                    </a>
                   
                </Slide1>

                <Slide1>
                    <a href="https://www.instagram.com">
                        <img src={img2} alt=""/>
                    </a>
                  
                </Slide1>

                <Slide1>
                    <a href="https://www.instagram.com">
                        <img src={img3} alt=""/>
                    </a>
                </Slide1>

                
                <Slide1>
                    <a href="https://www.instagram.com">
                        <img src={img4} alt=""/>
                    </a>
                </Slide1>


                
            </ContenedorSlideshow>
            
            <Controles>
                <Boton onClick= {anterior}>
                    <Flechaizquierda/>
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <Flechaderecha/>
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div `
    position: relative;
    z-index: 0;

`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap:nowrap;
    
    
`;

const Slide1 = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 3. ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    img{
        width: 100%;
        vertical-aling: top; 

    }

`;

const TextoSlide= styled.div `
    background: rgba(0,0,0,.5);
    color: #fff;
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom:0;

    @media screen and (max-width: 700px){
        position: relative;
        
    }

`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
    
`;

const Boton = styled.button `
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-aling: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #fff;
        }
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(-2px 0px 0px #fff)' };
    }

    ${props => props.derecho ? 'right: 0': 'left: 0'}

`;

export default Slideshow;
