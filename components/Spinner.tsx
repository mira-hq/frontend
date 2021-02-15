import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Spinner(): React.ReactNode {
  return <FontAwesomeIcon icon={faSpinner} className={"animate-spin"} />;
}
