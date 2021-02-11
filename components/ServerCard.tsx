import React from "react";
import Card from "./Card";

export enum ServerStatus {
  RUNNING = "Running",
  STARTED = "Started",
  STOPPING = "",
  STOPPED = "Stopped",
  TERMINATED = "Terminated"
}

export interface ServerCardProps {
  serverName: string;
  status: ServerStatus;
}

export default function ServerCard(props: ServerCardProps) {
  const actions: React.ReactNode[] = [];

  if (props.status === ServerStatus.RUNNING || props.status === ServerStatus.STARTED) {
    actions.push(
      <button className={"bg-red-100"}>Stop</button>
    );
  } else if (props.status === ServerStatus.STOPPED || props.status === ServerStatus.STOPPING) {
    actions.push(<button className={"bg-green-100"}>Start</button>);
  }

  return (
    <Card>
      <>
        <h2 className={"font-bold text-2xl"}>My Among Us Server</h2>
        <p className={"uppercase text-sm tracking-wide"}>{props.status}</p>
        {actions}
      </>
    </Card>
  );
}
