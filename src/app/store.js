import { configureStore } from "@reduxjs/toolkit";
import contactsReducer, { fetchContacts } from "../reducers/contactSlice";


export const store = configureStore({
    reducer: {
        contacts : contactsReducer
    }
});
store.dispatch(fetchContacts());