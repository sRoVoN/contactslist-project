import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("/contacts", async () => {
  const response = await axios.get(
    "https://randomuser.me/api/?results=50&inc=gender,name,location,phone,picture,nat&nat=AU,BR,CA,CH,DE,DK,ES,FI,GB,IE,FR,NL,NZ,TR,US"
  );
  return response.data.results;
});

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
    });
  },
});

export const selectContacts = state => state.contacts;
export default contactSlice.reducer;
