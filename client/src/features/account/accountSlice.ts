
import { createAsyncThunk, createSlice, isAnyOf  } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { User } from "../../app/models/user";
import { toast } from "react-toastify";
import { history } from "../..";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";



interface AccountState {
    user: User | null;
}

const initialState: AccountState = {
    user: null
}



export const signInUser = createAsyncThunk<User, FieldValues>(
'account/signInUser',
async (data, thunkAPI) => {
    try { 
          const user = await agent.Account.login(data);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
       
    } catch (error: any) {
          return thunkAPI.rejectWithValue({error: error.data});
      }     
   }
)


export const fetchCurrentUser = createAsyncThunk<User, {data:FieldValues}>(
    'account/signInUser',
    async (_, thunkAPI) => {
        try { 
              const user = await agent.Account.currentUser();
              localStorage.setItem('user', JSON.stringify(user));
              return user;
           
        } catch (error: any) {
              return thunkAPI.rejectWithValue({error: error.data});
          }     
       }
    )
    




export const accountSlice = createSlice({
   
    name: 'account',
    initialState,
    reducers: {
         signOut: (state) => {
             state.user = null;
             localStorage.removeItem('user');
             history.push('/');
         }
    },
    extraReducers: (builder => {
            builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
                   state.user = action.payload;

    });
    builder.addMatcher(isAnyOf(signInUser.rejected, fetchCurrentUser.rejected), (state, action) => {
        console.log(action.payload);

    });

  })
})


export const {signOut} = accountSlice.actions;
