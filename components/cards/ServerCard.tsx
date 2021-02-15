import React from "react";
import Card from "./Card";
import { ButtonGroup } from "../ButtonGroup";
import Server from "../../lib/Server";
import { ServerStatus } from "../../lib/ServerStatus";
import Spinner from "../Spinner";
import { Type } from "../Type";
import Button from "../Button";

export interface ServerCardProps {
  server: Server;
}

export default function ServerCard({
  server,
}: ServerCardProps): React.ReactElement {
  const {
    serverName,
    status,
    uptime,
    maxUptime,
    address,
    playersOnline,
  } = server;
  const actions: React.ReactNode[] = [];

  const isTransientStatus =
    status == ServerStatus.STOPPING || status === ServerStatus.STARTING;

  if (status === ServerStatus.RUNNING || status === ServerStatus.STARTING) {
    actions.push(
      ...[
        <Button
          text={"Stop"}
          type={Type.DANGER}
          disabled={isTransientStatus}
          key={status}
          onClick={() => console.log("Stopping...")}
        />,
      ]
    );
  } else if (
    status === ServerStatus.STOPPED ||
    status === ServerStatus.STOPPING
  ) {
    actions.push(
      <Button
        text={"Start"}
        type={Type.SUCCESS}
        disabled={isTransientStatus}
        key={status}
        onClick={() => console.log("Starting...")}
      />
    );
  }

  if (status !== ServerStatus.TERMINATED) {
    actions.push(
      ...[
        <Button
          text={"Terminate"}
          type={Type.DANGER}
          disabled={isTransientStatus}
          key={status}
          onClick={() => console.log("Terminating...")}
        />,
      ]
    );
  }

  const actionsWrapper = <ButtonGroup>{actions}</ButtonGroup>;

  const timeRemainingText = ` (${maxUptime - uptime}  minutes remaining )`;

  const canConnect =
    status !== ServerStatus.TERMINATED &&
    status !== ServerStatus.STOPPING &&
    status !== ServerStatus.STOPPED;
  const isRunning = status == ServerStatus.RUNNING;

  return (
    <Card
      content={
        <>
          <h2 className={"text-2xl"}>{serverName}</h2>
          <p>
            <span className={"uppercase text-sm tracking-wide font-bold"}>
              {status} {isTransientStatus && <Spinner />}
            </span>
            {isRunning && timeRemainingText}
          </p>
          {canConnect && (
            <p>
              Connect with{" "}
              <span className={"font-bold"}>{address}.mira-hq.com</span>
            </p>
          )}
          {isRunning && <p>{playersOnline} players online</p>}
        </>
      }
      footer={actionsWrapper}
    />
  );
}
