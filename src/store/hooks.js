import { useSelector } from "react-redux";

export const useAccount = () => useSelector(state => state.auth.account);
export const useAccounts = () => useSelector(state => state.auth.accounts);
