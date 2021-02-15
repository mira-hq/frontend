import React from "react";
import ServerCard, {
  Server,
  ServerStatus,
} from "../components/cards/ServerCard";
import Card from "../components/cards/Card";
import Button, { Type } from "../components/Button";
import CardList from "../components/cards/CardList";

export default function Home(): React.ReactNode {
  const servers: Server[] = [
    {
      uuid: "3",
      serverName: "My First Server",
      status: ServerStatus.STOPPING,
      uptime: 20,
      maxUptime: 300,
      address: "badger",
      playersOnline: 0,
    },
    {
      uuid: "2",
      serverName: "My Second Server",
      status: ServerStatus.RUNNING,
      uptime: 20,
      maxUptime: 300,
      address: "koala",
      playersOnline: 9,
    },
    {
      uuid: "1",
      serverName: "My Third Server",
      status: ServerStatus.STARTING,
      uptime: 20,
      maxUptime: 3000,
      address: "monkey",
      playersOnline: 0,
    },
  ];

  const serverCards = servers.map((server) => {
    return <ServerCard server={server} key={server.uuid} />;
  });

  const addServerCard = [
    <Card
      key={"add server"}
      footer={<Button text={"Start a new server"} type={Type.SUCCESS} />}
    />,
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen w-screen flex">
      <div className={"container mx-auto px-10"}>
        <CardList cards={serverCards} />
        <CardList cards={addServerCard} />
      </div>
    </div>
  );
}
