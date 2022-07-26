import { configureStore } from "@reduxjs/toolkit";
import reducer from "reducer";


export const shopeeStore = configureStore({reducer});