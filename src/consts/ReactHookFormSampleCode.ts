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
      <input
        type="text"
        {...register("nickname", { required: "テキストを入力してください" })}
      />
      {/*バリデーションエラーがあったらメッセージを表示*/}
      {errors.nickname && (<p>{errors.nickname.message}</p>)}
      <button type="submit">submit</button>
    </form>
  );
};
`;
