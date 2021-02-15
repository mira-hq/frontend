import { Type } from "./Type";
import React from "react";

export interface BannerProps {
  message: string;
  type?: Type;
}

export function Banner({
  message,
  type = Type.PRIMARY,
}: BannerProps): React.ReactNode {
  return (
    <div>
      {type}
      {message}
    </div>
  );
}
