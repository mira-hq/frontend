import { gql } from "@apollo/client";

export const Schema = gql`
  type User {
    uuid: String!
    email: String!
  }

  type Server {
    uuid: String!
    serverName: String!
    address: String
    status: ServerStatus!
    uptime: Int!
    maxUptime: Int!
    playersOnline: Int!
    owner: User!
  }

  enum ServerStatus {
    STARTING
    STOPPING
    STOPPED
    RUNNING
    TERMINATED
  }
`;
