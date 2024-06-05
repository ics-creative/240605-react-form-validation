import { useForm } from "react-hook-form";

// フォームの型定義
type FormData = {
	nickname: string;
	age: number;
};

/**
 * React Hook Formを用いたコードのサンプルです
 */
export const ReactHookFormSample = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({ mode: "onTouched" });

	const onSubmit = handleSubmit((data) =>
		window.alert(`名前：${data.nickname}\n年齢：${data.age}`),
	);
	return (
		<form className="box" onSubmit={onSubmit}>
			<div className="field">
				<label className="label">名前</label>
				<div className="control">
					<input
						className="input"
						type="text"
						{...register("nickname", {
							required: "テキストを入力してください",
						})}
					/>
					{errors.nickname && (
						<p className="help is-danger">{errors.nickname.message}</p>
					)}
				</div>
			</div>
			<div className="field">
				<label className="label">年齢</label>
				<div className="control">
					<input
						className="input"
						type="number"
						{...register("age", {
							required: "年齢を入力してください",
							min: {
								value: 12,
								message: "12歳以上で入力してください",
							},
							valueAsNumber: true,
						})}
					/>
				</div>
				{errors.age && <p className="help is-danger">{errors.age.message}</p>}
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-link" type="submit">
						submit
					</button>
				</div>
			</div>
		</form>
	);
};
