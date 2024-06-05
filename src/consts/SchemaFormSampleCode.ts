export const SchemaFormSampleCode = `
// フォームのスキーマ
const schema = z.object({
  /** 名前 */
  nickname: z.string().min(1, { message: "名前を入力してください" }),
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
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>名前</label>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>年齢</label>
        <input
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>メールアドレス</label>
        <input type="email" {...register("email")} />
        {errors.email && (<p>{errors.email.message}</p>)}
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
`;
