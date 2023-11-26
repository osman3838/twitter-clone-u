import { createSlice } from "@reduxjs/toolkit";
const initialState = 
{ 
account:{
    id:1,
    username:"Osman Özdemir",
    avatar:"https://pbs.twimg.com/profile_images/1598405496700108809/HRPOzijN_normal.png",
    fullName:"@Osmanzd61312985"
},
accounts:[{
    id:1,
    username:"Osman Özdemir",
    avatar:"https://pbs.twimg.com/profile_images/1598405496700108809/HRPOzijN_normal.png",
    fullName:"@Osmanzd61312985"
},
{
    id:2,
    username:"Enes Özdemir",
    avatar:"https://pbs.twimg.com/profile_images/1598405496700108809/HRPOzijN_normal.png",
    fullName:"@Eneszd61312985"
}

],

}
const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        _addAccounts:(state,action) => 
        { 
            state.accounts.push(action.payload);
        },
        _removeAccount:(state,action) => 
        { 
           state.account = state.filter(account => account.id !== action.id); 
           if(state.account && action.payload === state.account.id == action.payload)
           {
            state.account = "";
           }
        },
        _setCurrentAccount:(state,action) => 
        { 
            
            state.account = action.payload;
        }
    }
})
export const {_addAccounts,_removeAccount,_setCurrentAccount}  = auth.actions;
export default auth.reducer;