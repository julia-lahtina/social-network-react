import s from "./formsControls.module.css";

export const Textarea = ({ input, meta, ...props }: any) => {
  const error = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (error ? s.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      <div>{error && <span className={s.formControl}>{meta.error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }: any) => {
  const error = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (error ? s.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      <div>{error && <span className={s.formControl}>{meta.error}</span>}</div>
    </div>
  );
};
