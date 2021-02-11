import React from "react";
import ServerCard, { ServerStatus } from "../components/ServerCard";
import Card from "../components/Card";

export default function Home(): React.ReactNode {
  return <div className="container mx-auto px-4">
    <h2 className={"font-bold text-red-500 text-4xl"}>My Servers</h2>

    <div className={"flex"}>
      <ServerCard serverName={"My First Server"} status={ServerStatus.TERMINATED}/>
      <ServerCard serverName={"My Second Server"} status={ServerStatus.RUNNING}/>
      <ServerCard serverName={"My Third Server"} status={ServerStatus.STOPPED}/>
      <Card>
        <p>
          Start a new server...
        </p>
      </Card>
    </div>
  </div>;
}
