import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	/** 名前 */
	name: z.string().min(1, { message: "名前を入力してください" }),
	/** 年齢 */
	age: z
		.number()
		.min(1, { message: "年齢を入力してください" })
		.gt(12, { message: "12歳以上で入力してください" }),
});

// スキーマから型を生成
type Inputs = z.infer<typeof schema>;

export const Section2 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(schema),
	});
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		window.alert(`名前：${data.name}\n年齢：${data.age}`);
	};
	return (
		<div className="container is-max-desktop">
			<form className="box" onSubmit={handleSubmit(onSubmit)}>
				<div className="field">
					<label className="label">名前</label>
					<div className="control">
						<input className="input" type="text" {...register("name")} />
					</div>
					{errors.name && (
						<p className="help is-danger">{errors.name.message}</p>
					)}
				</div>
				<div className="field">
					<label className="label">年齢</label>
					<div className="control">
						<input className="input" type="number" {...register("age")} />
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
