import type { ReactElement } from "react";
import style from "./InputWithLabel.module.scss";

type LabelType = { children: ReactElement | string; labelFor: string };
type InputType = {
	id?: string;
	placeholder?: string;
	name: string;
	className?: string;
};

const Input = ({ placeholder, name, className }: InputType) => {
	return (
		<input
			className={`${style.input} ${className}`}
			type="text"
			placeholder={placeholder}
			name={name}
		/>
	);
};

const Label = ({ children, labelFor }: LabelType) => {
	return (
		<label className={style.label} htmlFor={labelFor}>
			{children}
		</label>
	);
};

export const InputWithLabel = {
	Label,
	Input,
};
