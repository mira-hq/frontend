export interface ButtonProps {
  text: string;
  type: Type;
}

export enum Type {
  DANGER,
  SUCCESS,
  WARNING
}

export default function Button({ text, type }: ButtonProps) {
  let classes: string[] = [
    "py-1",
    "px-3"
  ];

  switch (type) {
    case Type.DANGER:
      classes.push(...[
        "bg-red-100"
      ]);
      break;
    case Type.SUCCESS:
      classes.push(...[
        "bg-green-100"
      ]);
      break;
    case Type.WARNING:
      classes.push(...[
        "bg-yellow-100"
      ]);
      break;
  }

  return (
    <button className={classes.join(" ")}>
      {text}
    </button>
  );
}
