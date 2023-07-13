import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface contentType {
    id: number;
    quantity: number;
}

const initialState: contentType[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseCartQuantity: (state, action: PayloadAction<number>) => {
            if (state.find((item) => item.id === action.payload) == null) {
                state.push({ id: action.payload, quantity: 1 });
                return;
            }
            state = state.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        },
        decreaseCartQuantity: (state, action: PayloadAction<number>) => {
            if (
                state.find((item) => item.id === action.payload)?.quantity == 1
            ) {
                state.filter((item) => item.id !== action.payload);
                return;
            }
            state = state.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.filter((item) => item.id !== action.payload);
        },
    },
});

export default cartSlice.reducer;

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    cartSlice.actions;

export const getItemQuantity = (
    state: RootState,
    action: PayloadAction<number>
) => {
    state.cart.find((item) => item.id === action.payload)?.quantity || 0;
};

export const getTotalItemsInCart = (state: RootState): number => {
    let count = 0;
    for (let i = 0; i < state.cart.length; i++) {
        count += state.cart[i].quantity;
    }
    return count;
};
