import type React from "react";
import { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";

export const QRCode: React.FunctionComponent = () => {
	const canvas = useRef(null);
	const maxWidth = 900;
	const [innerWidth, setInnerWidth] = useState(
		window ? window.innerWidth : maxWidth,
	);

	const [qrCodeColor, setQrCodeColor] = useState<{
		dark: string;
		light: string;
	} | null>(null);

	const handleResize = () => {
		setInnerWidth(window.innerWidth > maxWidth ? maxWidth : window.innerWidth);
	};

	useEffect(() => {
		if (window) {
			window.addEventListener("resize", handleResize);
			// Get the Value of a Custom Property from the root
			const styles = getComputedStyle(document.documentElement);

			setQrCodeColor({
				dark: styles.getPropertyValue("--almost-black").trim(),
				light: "#00000000", // transparent hex ✨
			});
		}
	}, []);

	useEffect(() => {
		QRCodeLib.toCanvas(canvas.current, `${window.location.origin}/player`, {
			scale: 10,
			width: innerWidth / 4,
			color: {
				dark: qrCodeColor?.dark,
				light: qrCodeColor?.light,
			},
		});
	}, [qrCodeColor, innerWidth]);

	return <canvas ref={canvas} />;
};
