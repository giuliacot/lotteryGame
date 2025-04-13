import { useReducer } from "react";
import { InfoBox } from "../InfoBox.tsx/InfoBox";
import { initReducer, reducer } from "../../utils/reducer";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { Button } from "../Button/Button";

import style from "./Player.module.scss";

export const Player = () => {
	const [state, dispatch] = useReducer(reducer, initReducer);

	const setPlayers = async (nickname: string) => {
		try {
			const response = await fetch("/players", {
				method: "POST",
				body: JSON.stringify({
					nickname,
				}),
			});

			console.log(response);

			const addedPlayer = await response.json();

			if (addedPlayer) {
				dispatch({ type: "set_done" });
			}
		} catch (e) {
			console.error(e);
			dispatch({ type: "set_error" });
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// why errorboundary doesn't catch on event handler https://stackoverflow.com/questions/58809160/errorboundary-not-catching-error-thrown-by-imported-function
		event.preventDefault();
		console.log(event.currentTarget);
		const formParticipant = Object.fromEntries(
			new FormData(event.currentTarget).entries(),
		);

		if (typeof formParticipant.nickname === "string") {
			setPlayers(formParticipant.nickname);
			dispatch({ type: "set_loading" });
		}
	};

	if (state.done) {
		return <InfoBox type="info">Well done and thanks to participate!</InfoBox>;
	}

	return (
		<div className={style.playerInsertWrapper}>
			<h1 className="hPiccolo">
				Give us your name to be extracted for a terrific gift!
			</h1>
			{state.loading ? (
				<span>Loading...</span>
			) : (
				<form
					className={style.nicknameForm}
					id="getNickname"
					onSubmit={handleSubmit}
				>
					<InputWithLabel.Label labelFor="nickname">
						Nickname
					</InputWithLabel.Label>
					<InputWithLabel.Input
						id="nickname"
						placeholder="A funny nickname of yours"
						name="nickname"
						className="input"
					/>

					<Button type="submit" form="getNickname" className={style.playerBtn}>
						Let's play!
					</Button>
				</form>
			)}

			{state.error && (
				<InfoBox type="error">Oh no! I can't add your name :( </InfoBox>
			)}
		</div>
	);
};
