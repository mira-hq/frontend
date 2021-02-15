import classnames from "classnames";
import React from "react";

export interface ButtonProps {
  text: string;
  type: Type;
  disabled?: boolean;
}

export enum Type {
  DANGER,
  SUCCESS,
  WARNING,
}

export default function Button({
  text,
  type,
  disabled,
}: ButtonProps): React.ReactElement {
  const classes = classnames({
    "py-1": true,
    "px-3": true,
    "rounded-xl": true,
    "my-4": true,
    "cursor-not-allowed": disabled,
    "dark:bg-gray-500": disabled,
    "bg-red-100": type === Type.DANGER && !disabled,
    "dark:bg-red-500": type === Type.DANGER && !disabled,
    "hover:bg-red-400": type === Type.DANGER && !disabled,
    "bg-green-100": type === Type.SUCCESS && !disabled,
    "dark:bg-green-500": type === Type.SUCCESS && !disabled,
    "hover:bg-green-400": type === Type.SUCCESS && !disabled,
    "bg-yellow-100": type === Type.WARNING && !disabled,
    "dark:bg-yellow-500": type === Type.WARNING && !disabled,
    "hover:bg-yellow-400": type === Type.WARNING && !disabled,
  });

  return (
    <button className={classes} disabled={disabled}>
      {text}
    </button>
  );
}
