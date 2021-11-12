import React, { useEffect, useRef } from 'react'

import styles from './index.module.scss'

interface PropsRotateImage {
  className: string
  src: string
}

let onClickStartTime: number
let onClickPositionX: number
let onMouseLeavePositionX: number
const RotateImage: React.FunctionComponent<PropsRotateImage> = ({ className, src }: PropsRotateImage) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      const originImage = new Image()
      originImage.src = src
      originImage.onload = (): void => {
        const ctx = canvasRef.current.getContext('2d')
        canvasRef.current.width = originImage.naturalWidth * 0.5
        canvasRef.current.height = originImage.naturalHeight * 0.5
        ctx.drawImage(originImage, 0, 0, originImage.naturalWidth * 0.5, originImage.naturalHeight * 0.5)
      }
    }
  }, [canvasRef])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onMouseDown={(e): void => {
        onClickStartTime = e.timeStamp
        onClickPositionX = e.screenX
      }}
      onMouseOver={(): void => {
        onClickStartTime = null
        canvasRef.current.style.animation = null
      }}
      onMouseLeave={(e): void => {
        onMouseLeavePositionX = e.screenX
        if (!onClickStartTime) return
        const arrowRight = onMouseLeavePositionX > onClickPositionX

        if (!arrowRight) return

        const duration = (e.timeStamp - onClickStartTime) / 1000
        canvasRef.current.style.animation = `${styles.rotate} ${duration * 3}s ease-out`
      }}
    ></canvas>
  )
}

export default RotateImage
