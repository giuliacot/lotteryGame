import React, { useEffect, useRef, useState } from 'react'
import QRCodeLib from 'qrcode'

export const QRCode: React.FunctionComponent = () => {
  let canvas = useRef(null)

  const [qrCodeColor, setQrCodeColor] = useState<string>('')

  useEffect(() => {
    if (window) {
      // Get the Value of a Custom Property
      const styles = getComputedStyle(document.documentElement)
      console.log(styles.getPropertyValue('--tart-orange'))
      setQrCodeColor(styles.getPropertyValue('--tart-orange'))
    }
  }, [])

  useEffect(() => {
    QRCodeLib.toCanvas(canvas.current, `${window.location.origin}/player`, {
      scale: 10,
      color: {
        dark: qrCodeColor,
      },
    })
  }, [qrCodeColor])

  return <canvas ref={canvas} />
}
