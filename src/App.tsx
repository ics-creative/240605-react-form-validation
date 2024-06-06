import "./App.css";
import { CorrelationCheckSampleCode } from "./consts/CorrelationCheckSampleCode.ts";
import { ReactHookFormSampleCode } from "./consts/ReactHookFormSampleCode.ts";
import { ReactSimpleFormSampleCode } from "./consts/ReactSimpleFormSampleCode.ts";
import { SchemaFormSampleCode } from "./consts/SchemaFormSampleCode.ts";
import { CorrelationCheckSample } from "./sections/CorrelationCheckSample.tsx";
import { ReactHookFormSample } from "./sections/ReactHookFormSample.tsx";
import { ReactSimpleFormSample } from "./sections/ReactSimpleFormSample.tsx";
import { SchemaFormSample } from "./sections/SchemaFormSample.tsx";
import { codeToHtml } from "shiki";
import { useEffect, useState } from "react";

const samples = [
  ReactSimpleFormSampleCode,
  ReactHookFormSampleCode,
  SchemaFormSampleCode,
  CorrelationCheckSampleCode,
];

function App() {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    Promise.all(
      samples.map((sample) =>
        codeToHtml(sample, {
          lang: "tsx",
          theme: "github-dark",
        }),
      ),
    ).then((result) => setValue(result));
  }, []);
  return (
    <>
      <section id="section-1" className="section">
        <div className="container is-max-desktop">
          <div className="content">
            <h2>Reactを使用したフォーム</h2>
            <ReactSimpleFormSample />
            <details>
              <summary>コードを見る</summary>
              <div className="content">
                <pre>
                  <code dangerouslySetInnerHTML={{ __html: value[0] }}></code>
                </pre>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="section-2" className="section">
        <div className="container is-max-desktop">
          <div className="content">
            <h2>React Hook Formを使用したフォーム</h2>
            <ReactHookFormSample />
            <details>
              <summary>コードを見る</summary>
              <div className="">
                <pre dangerouslySetInnerHTML={{ __html: value[1] }}></pre>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="section-3" className="section">
        <div className="container is-max-desktop">
          <div className="content">
            <h2>Zodを使用したフォーム</h2>
            <SchemaFormSample />
            <details>
              <summary>コードを見る</summary>
              <div className="">
                <pre dangerouslySetInnerHTML={{ __html: value[2] }}></pre>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="section-4" className="section">
        <div className="container is-max-desktop">
          <div className="content">
            <h2>Zodを使用した相関チェック</h2>
            <CorrelationCheckSample />
            <details>
              <summary>コードを見る</summary>
              <div className="">
                <pre dangerouslySetInnerHTML={{ __html: value[3] }}></pre>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
