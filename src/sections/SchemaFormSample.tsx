import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  /** 名前 */
  name: z.string().min(1, { message: "名前を入力してください" }),
  /** 年齢 */
  age: z
    .number({ message: "半角数字で入力してください" })
    .min(1, { message: "年齢を入力してください" })
    .gte(12, { message: "12歳以上で入力してください" }),
  /** メールアドレス */
  email: z.union([
    z
      .string()
      .email({ message: "メールアドレスの形式で入力してください" })
      .nullish(),
    z.literal(""),
  ]),
});

// スキーマから型を生成
type Inputs = z.infer<typeof schema>;

/**
 * Zodスキーマを用いたフォームバリデーションのサンプルです
 */
export const SchemaFormSample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = handleSubmit((data) => {
    window.alert(
      `名前：${data.name}\n年齢：${data.age}\nメールアドレス；${data.email}`,
    );
  });
  return (
    <form className="box" onSubmit={onSubmit}>
      <div className="field">
        <label className="label">名前</label>
        <div className="control">
          <input className="input" type="text" {...register("name")} />
        </div>
        {errors.name && <p className="help is-danger">{errors.name.message}</p>}
      </div>
      <div className="field">
        <label className="label">年齢</label>
        <div className="control">
          <input
            className="input"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
        </div>
        {errors.age && <p className="help is-danger">{errors.age.message}</p>}
      </div>
      <div className="field">
        <label className="label">メールアドレス</label>
        <div className="control">
          <input className="input" type="email" {...register("email")} />
        </div>
        {errors.email && (
          <p className="help is-danger">{errors.email.message}</p>
        )}
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
