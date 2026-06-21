import React from 'react'
import heroImg from "../assets/hero.svg"

function Hero() {
  return (
    <section className="hero">
        <div className="hero-title">
            <h1>
                Contentful CMS
            </h1>
            <p>
                Brainrot margiela mixtape plaid ketamine therapy. Ascot solarpunk quinoa, meditation schlitz fam cortado forage pug biodynamic. Freire are.na poke PBR&B live-edge, truffaut asymmetrical blue bottle lumbersexual hashtag. Poke chicharrones sus bolaño, open studio heirloom beard letterpress sambas cardigan gentrify blackbird spyplane gochujang post-ironic somatic.
            </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="women and the browser" className="img"/>
        </div>
    </section>
  )
}

export default Hero