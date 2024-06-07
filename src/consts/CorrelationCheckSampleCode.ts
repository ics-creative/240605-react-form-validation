export const CorrelationCheckSampleCode = `
// 日付のスキーマ
const dateSchema = z
  .object({
    startDate: z.string().date("日付を入力してください"),
    endDate: z.string().date("日付を入力してください"),
  })
  .refine((arg) => new Date(arg.startDate) < new Date(arg.endDate), {
    message: "終了日は開始日より後の日付を入力してください",
    path: ["endDate"],
  });

// フォーム全体のスキーマ
const schema = z.object({
  // タイトルのスキーマ
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  // 日付のスキーマ
  date: dateSchema,
});

type Inputs = z.infer<typeof schema>;

export const CorrelationCheckSample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // 🌟バリデーションを実行する
    getValues, // 🌟入力値を取得する
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // フォームの送信処理
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          タイトル
          <input type="text" {...register("title")} />
        </label>
        {errors.title && (<p>{errors.title.message}</p>)}
      </div>
      <div>
        <label>
          開始日
          <input
            type="date"
            {...register("date.startDate")}
            // 🌟開始日の入力時にも相関チェックを行う
            onBlur={() => {
              if (getValues("date.endDate") !== "") {
                trigger("date.endDate");
              }
            }}
          />
        </label>
        {errors.date?.startDate && (
          <p>{errors.date.startDate.message}</p>
        )}
      </div>
      <div>
        <label>
          終了日
          <input
            type="date"
            {...register("date.endDate")}
          />
        </label>
        {errors.date?.endDate && (
          <p>{errors.date.endDate.message}</p>
        )}
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
`;
