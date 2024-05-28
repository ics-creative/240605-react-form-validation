import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
	/** 名前 */
	name: string;
	/** 年齢 */
	age: number;
};

export const Section1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		window.alert(`名前：${data.name}\n年齢：${data.age}`);
	};
	return (
		<div className="container is-max-desktop">
			<form className="box" onSubmit={handleSubmit(onSubmit)}>
				<div className="field">
					<label className="label">名前</label>
					<div className="control">
						<input
							className="input"
							type="text"
							{...register("name", { required: true })}
						/>
					</div>
					{errors.name && (
						<p className="help is-danger">テキストを入力してください</p>
					)}
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
		</div>
	);
};
