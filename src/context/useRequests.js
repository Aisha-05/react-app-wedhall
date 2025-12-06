import { useContext } from "react";
import { RequestsContext } from "./RequestsContext";

export const useRequests = () => useContext(RequestsContext);
