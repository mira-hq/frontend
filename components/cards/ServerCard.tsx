import React from "react";
import Card from "./Card";
import Button, { Type } from "../Button";

export interface Server {
  uuid: string;
  serverName: string;
  address: string;
  status: ServerStatus;
  uptime: number;
  maxUptime: number;
  playersOnline: number;
}

export enum ServerStatus {
  RUNNING = "Running",
  STARTING = "Starting",
  STOPPING = "Stopping",
  STOPPED = "Stopped",
  TERMINATED = "Terminated"
}

export interface ServerCardProps {
  server: Server;
}

export default function ServerCard({ server }: ServerCardProps) {
  const { serverName, status, uptime, maxUptime, address, playersOnline } = server;
  const actions: React.ReactNode[] = [];

  if (status === ServerStatus.RUNNING) {
    actions.push(...[
        <Button text={"Stop"} type={Type.DANGER} />
      ]
    );
  } else if (status === ServerStatus.STOPPED) {
    actions.push(
      <Button text={"Start"} type={Type.SUCCESS} />
    );
  }

  let timeRemainingText = " (" + (maxUptime - uptime) + " minutes remaining )";

  const shouldShowRemainingTime = status == ServerStatus.RUNNING

  return (
    <Card>
      <>
        <h2 className={"text-2xl"}>{serverName}</h2>
        <p>
          <span className={"uppercase text-sm tracking-wide font-bold"}>{status}</span>
          {shouldShowRemainingTime && timeRemainingText}
        </p>
        <p className={"font-bold"}>{address}.mira-hq.com</p>
        <p>{playersOnline} players online</p>
        {actions}
      </>
    </Card>
  );
}
