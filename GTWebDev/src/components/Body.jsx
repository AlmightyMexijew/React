import * as React from 'react';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Services from './Services';
export default function Body(){
    return(
        <>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        </>
    )
}