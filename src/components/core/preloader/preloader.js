import React, { useEffect, useState, Fragment } from "react"
import "./preloader.scss"

const PreLoader = () => {
  const [preLoading, setPreLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Fragment>
      {
        preLoading && (
          <div className="preloader" id="preloader">
            <div><h1 className="text animate delay-1">Developer.</h1></div>
            <div><h1 className="text animate delay-2">Teacher.</h1></div>
            <div><h1 className="text animate delay-3">Guitarist.</h1></div>

            <div className="up full">
              <div className="bar up1"><p /></div>
              <div className="bar up2"><p /></div>
              <div className="bar up3"><p /></div>
              <div className="bar up4"><p /></div>
              <div className="bar up5"><p /></div>
            </div>
          </div>
        )
      }
    </Fragment>
  )
}

export default PreLoader
