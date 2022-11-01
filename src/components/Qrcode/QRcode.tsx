import React, { useEffect, useRef } from 'react'
import QRCodeLib from 'qrcode'

export const QRCode: React.FunctionComponent = () => {
  let canvas = useRef(null)

  useEffect(() => {
    QRCodeLib.toCanvas(canvas.current, `${window.location.origin}/player`, {
      scale: 10,
      color: {
        dark: '#005dad',
      },
    })
  }, [])

  return <canvas ref={canvas} />
}
