import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2411-FTB-ET-WEB-PT";
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2411-ftb-et-web-pt";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL}), 
  tagTypes: ["Puppy"], 
  endpoints: () => ({}), 
});

export default api;