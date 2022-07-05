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

    deleteProducts: (store, { payload }) => ({
      ...store,
      products: store.products.filter(product => product.name !== payload),
    }),
    clearCart: store => ({ ...store, products: [] }),
  },
});

export const { setActiveId, addProducts, deleteProducts, clearCart } =
  shopsSlice.actions;
export default shopsSlice.reducer;
