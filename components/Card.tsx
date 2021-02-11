import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

export default function Card({children}: CardProps) {
  return (
    <div className={"shadow box-content p-4 rounded-xl max-w-md mx-auto"}>
      <div>
        {children}
      </div>
    </div>
  )
}