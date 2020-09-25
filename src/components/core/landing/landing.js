import React, { useRef, useEffect, useState } from "react"
import PreLoader from "../preloader/preloader"
import * as THREE from "three"
import CLOUDS from "./clouds/vanta.clouds"
import "./landing.scss"

const LandingSection = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0x000000,
          cloudColor: 0x334d80,
          skyColor: 0x5ca6ca,
          lightColor: 0xffffff,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 0.7
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div id="wrapper">
      <PreLoader />
      <div id="page-content">
        <div className="background-webgl" ref={myRef}></div>
        <h2 className="brand">Aerosailor</h2>
        <h3 className="aboutMe">
          Hey there, my name is Meher 👋 <br />
          Passionate about JavaScript, Teaching, Music & Fitness. <br />I
          believe in delivering delightful digital experience.
        </h3>
      </div>
    </div>
  )
}

export default LandingSection
