export const ReactHookFormSampleCode = `
// フォームの型定義
type FormData = {
  nickname: string;
};

export const ReactHookFormDemo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = handleSubmit((data) => window.alert(data.nickname));
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>名前</label>
        <input
          type="text"
          {...register("nickname", { required: "テキストを入力してください" })}
        />
        {/*バリデーションエラーがあったらメッセージを表示*/}
        {errors.nickname && (<p>{errors.nickname.message}</p>)}
      </div>
      <div>
        <label>年齢</label>
        <input
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
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
`;
