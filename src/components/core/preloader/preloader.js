import React from "react"
import "./preloader.scss"

const PreLoader = () => {
  return (
    <div className="preloader">
      <div>
        <h1 className="text animate delay-1">Developer,</h1>
      </div>
      <div>
        <h1 className="text animate delay-2">Teacher,</h1>
      </div>
      <div>
        <h1 className="text animate delay-3">Aspiring Musician.</h1>
      </div>

      <div class="up full">
          <div class="bar up1"><p /></div>
          <div class="bar up2"><p /></div>
          <div class="bar up3"><p /></div>
          <div class="bar up4"><p /></div>
          <div class="bar up5"><p /></div>
      </div>
    </div>
  )
}

export default PreLoader
