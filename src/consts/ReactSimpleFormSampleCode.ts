export const ReactSimpleFormSampleCode = `
// バリデーション関数
const validate = (value: string) => {
  if (value.length === 0) {
    return "テキストを入力してください";
  }
  return "";
};

// フォームコンポーネント
export const SimpleForm = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // 文字入力時
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // フォーカスアウトしたときのイベント
  const onBlur = () => {
    // バリデーション結果を受け取る
    const result = validate(value);
    setError(result);
  };
  // 提出時
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // バリデーション結果を受け取る
    const result = validate(value);
    // バリデーションエラーの場合はエラーメッセージを表示
    if (result !== "") {
      setError(result);
      return;
    }
    // フォームの送信処理（この処理は仮です。用途に応じてカスタマイズしてください）
    window.alert(value);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="nickname"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error !== "" && <p>{error}</p>}
      <button type="submit">submit</button>
    </form>
  );
};
`;
