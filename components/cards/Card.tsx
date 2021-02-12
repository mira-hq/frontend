import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

export default function Card({children}: CardProps) {
  return (
    <div className={"shadow p-8 rounded-xl bg-white dark:bg-gray-800 dark:text-white flex-1"}>
      {children}
    </div>
  )
}