import React from "react";
import Card from "../components/cards/Card";
import Button from "../components/Button";
import CardList from "../components/cards/CardList";
import Server from "../lib/Server";
import ServerCard from "../components/cards/ServerCard";
import { gql, QueryResult, useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import { Banner } from "../components/Banner";
import { Type } from "../components/Type";

const query = gql`
  query MyQuery {
    queryServer(filter: {}) {
      playersOnline
      serverName
      status
      uuid
      uptime
      owner {
        uuid
        email
      }
    }
  }
`;

export default function Home(): React.ReactNode {
  const { loading, error, data }: QueryResult = useQuery<Server[]>(query);

  let servers: Server[] = [];
  if (data !== undefined && data.queryServer !== undefined) {
    servers = data.queryServer as Server[];
  }

  console.log(servers);

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
        {error && <Banner message={JSON.stringify(error)} type={Type.DANGER} />}
        {loading && <Spinner />}
        <CardList cards={serverCards} />
        <CardList cards={addServerCard} />
      </div>
    </div>
  );
}
