import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  activeId: null,
  products: [],
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setActiveId: (_, { payload }) => ({ activeId: payload }),
    addProducts: {
      reducer({ products }, { payload }) {
        products.push(payload);
      },
      prepare(data) {
        const newProd = { ...data, id: nanoid() };
        return { payload: newProd };
      },
    },
    // addProducts: ({ products }, { payload }) => products.push(payload),
    deleteProducts: ({ products }, { payload }) =>
      products.filter(product => product.id !== payload),
    clearCart: store => ({ ...store, products: [] }),
  },
});

export const { setActiveId, addProducts, deleteProducts, clearCart } =
  shopsSlice.actions;
export default shopsSlice.reducer;
