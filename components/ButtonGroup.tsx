import React from "react";

export interface ButtonGroupProps {
  children: React.ReactNode;
}

export function ButtonGroup({children}: ButtonGroupProps): React.ReactNode {
  return (
    <div className={"space-x-1"}>
      {children}
    </div>
  )
}
