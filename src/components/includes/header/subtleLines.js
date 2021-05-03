import React, { useEffect } from 'react'
import './header.css'

const SvgAnimation = () => {
  useEffect(() => {
    const svgEl = document.querySelector('.animated-lines')

    const randomRange = (min, max) => {
      return ~~(Math.random() * (max - min + 1)) + min
    }

    const numberOfLines = 5
    const lineDataArr = []

    const createPathString = () => {
      let completedPath = ''
      const comma = ','
      const ampl = 50

      for (let i = 0; i < numberOfLines; i++) {
        const path = lineDataArr[i]

        const current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos),
        }

        const newPathSection =
          'M' +
          // starting point
          path.startX +
          comma +
          path.startY +
          // quadratic control point
          ' Q' +
          path.pointX +
          comma +
          (current.y * 1.5).toFixed(3) + // 1.5 to amp up the bend a little
          // center point intersection
          ' ' +
          (current.x / 10 + path.centerX).toFixed(3) +
          comma +
          (current.y / 5 + path.centerY).toFixed(3) +
          // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
          ' T' +
          path.endX +
          comma +
          path.endY
        path.counter++

        completedPath += newPathSection
      }

      return completedPath
    }

    const createLines = function () {
      const newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      const minSpeed = 100
      const maxSpeed = 500

      for (let i = 0; i < numberOfLines; i++) {
        const lineDataObj = {
          // a broad counter range ensures lines start at different cycles (will look more random)
          counter: randomRange(1, 500),
          startX: randomRange(-5, -40),
          startY: randomRange(-5, -30),
          endX: randomRange(200, 220),
          endY: randomRange(120, 140),
          sin: randomRange(minSpeed, maxSpeed),
          cos: randomRange(minSpeed, maxSpeed),
          pointX: randomRange(30, 55),
          centerX: randomRange(90, 120),
          centerY: randomRange(60, 70),
        }
        lineDataArr.push(lineDataObj)
      }

      var animLoop = function () {
        newPathEl.setAttribute('d', createPathString())
        requestAnimationFrame(animLoop)
      }

      svgEl.appendChild(newPathEl)
      animLoop()
    }

    createLines()
  })

  return (
    <div className="line-container">
      <svg
        className="animated-lines"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path d="M-27,-12 Q49,9.192 97.098,69.226 T203,129M-19,-17 Q43,48.016 111.947,67.402 T217,132M-12,-16 Q44,72.079 117.346,71.611 T215,123M-30,-22 Q53,-68.203 105.371,60.906 T220,127M-20,-6 Q35,46.397 95.184,68.186 T205,122M-14,-19 Q53,55.686 99.202,73.425 T200,131M-34,-6 Q51,52.800 106.024,72.040 T203,138M-20,-13 Q31,73.186 97.639,76.758 T210,123M-9,-7 Q45,-35.988 99.210,64.202 T206,129" />
      </svg>
    </div>
  )
}

const SubtleLines = () => <SvgAnimation />

export default SubtleLines
