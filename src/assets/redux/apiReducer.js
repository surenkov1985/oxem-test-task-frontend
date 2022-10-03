import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiReducer = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://eoj3r7f3r4ef6v4.m.pipedream.net",
	}),
	endpoints: (build) => ({
		leasingData: build.mutation({
			query: (data) => ({
				url: "",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const { useLeasingDataMutation } = apiReducer;
