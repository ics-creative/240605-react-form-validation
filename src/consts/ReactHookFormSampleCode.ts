export const ReactHookFormSampleCode = `
// フォームの型定義
type FormData = {
  nickname: string;
  age: number;
};

export const ReactHookFormSample = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = handleSubmit((data) => {
    // フォームの送信処理
  });
  return (
    <form onSubmit={onSubmit}>
      {/*名前入力欄*/}
      <div>
        <label>
          名前
          <input
            type="text"
            {...register("nickname", { required: "テキストを入力してください" })}
          />
        </label>
        {/*バリデーションエラーがあったらメッセージを表示*/}
        {errors.nickname && (<p>{errors.nickname.message}</p>)}
      </div>
      {/*年齢入力欄*/}
      <div>
        <label>
          年齢
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
        </label>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
`;
