import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import TAddress from "../types/Address";
import TCabinet from "../types/Cabinet";

const addressesApi = createApi({
	reducerPath: "addressesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://timetable.spbu.ru/api/v1/addresses" }),
	endpoints: (builder) => ({
		getAddresses: builder.query<TAddress[], null>({
			query: () => ({ url: "" }),
		}),

		getCabinets: builder.query<TCabinet[], string>({
			query: (addressID) => ({ url: `/${addressID}/classrooms` }),
		}),
	}),
});

export default addressesApi;
