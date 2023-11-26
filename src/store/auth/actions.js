import store from "~/store/index"
import { _setCurrentAccount } from "."


export const setCurrentAccount  = (data)  => store.dispatch(_setCurrentAccount(data)) 

