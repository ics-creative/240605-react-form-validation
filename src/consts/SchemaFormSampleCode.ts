export const SchemaFormSampleCode = `
// フォームのスキーマ
const schema = z.object({
  /** 名前 */
  nickname: z.string().min(1, { message: "名前を入力してください" }),
  /** 年齢 */
  age: z
    .number({ message: "年齢を半角数字で入力してください" })
    .int({ message: "年齢を整数で入力してください" })
    .gte(12, { message: "年齢を12歳以上で入力してください" }),
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
Inputs = z.infer<typeof schema>;

export const SchemaFormSample = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    mode: "onTouched",
    resolver: zodResolver(schema), // 🌟resolverを追加
  });
  const onSubmit = handleSubmit((data) => {
    // フォームの送信処理
  });
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          名前
          <input type="text" {...register("name")} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>
          年齢
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
        </label>
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>
          メールアドレス
          <input type="email" {...register("email")} />
        </label>
        {errors.email && (<p>{errors.email.message}</p>)}
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
`;
