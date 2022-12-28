import React, { useEffect, useRef, useState } from 'react'
import QRCodeLib from 'qrcode'

export const QRCode: React.FunctionComponent = () => {
  let canvas = useRef(null)

  const [qrCodeColor, setQrCodeColor] = useState<{
    dark: string
    light: string
  } | null>(null)

  useEffect(() => {
    if (window) {
      // Get the Value of a Custom Property from the root
      const styles = getComputedStyle(document.documentElement)

      setQrCodeColor({
        dark: styles.getPropertyValue('--tart-orange').trim(),
        light: styles.getPropertyValue('--ghost-white').trim(),
      })
    }
  }, [])

  useEffect(() => {
    QRCodeLib.toCanvas(canvas.current, `${window.location.origin}/player`, {
      scale: 10,
      color: {
        dark: qrCodeColor?.dark,
        light: qrCodeColor?.light,
      },
    })
  }, [qrCodeColor])

  return <canvas ref={canvas} />
}
