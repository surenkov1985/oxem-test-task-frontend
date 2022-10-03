import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
    name: "calc",
    initialState: {
        price: 3300000,
        rate: 13,
        initial: 0,
        months: 60,
        minPriceVal: 1000000,
	    maxPriceVal: 6000000,
        stepPrice: 500,
        percent: 13,
        minPercent: 10,
        maxPercent: 60,
        stepPercent: 1,
        month: 60,
        minMonth: 1,
        maxMonth: 60,
        stepMonth: 1,
        rate: 3.5,
        monthsPay: 0,
        leasingCost: 0
    },
    reducers: {
        addPrice: (state, actions) => {
            state.price = actions.payload
        },
        addPercent: (state, actions) => {
            state.percent = actions.payload
        },
        addInitial: (state, actions) => {
            state.initial = actions.payload
        },
        addMonth: (state, actions) => {
            state.month = actions.payload
        },
        addMonthsPay: (state, actions) => {
            state.monthsPay = actions.payload
        },
        addLeasingCost : (state, actions) => {
            state.leasingCost = actions.payload
        }
    }
})

export const {addPrice, addPercent, addInitial, addMonth, addMonthsPay, addLeasingCost} = calcSlice.actions
export default calcSlice.reducer