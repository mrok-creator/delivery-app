import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeId: null,
  products: [],
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setActiveId: (_, { payload }) => ({ activeId: payload }),
    addProducts: (state, { payload }) => state.products.push(payload),
    deleteProducts: (state, { payload }) =>
      state.products.filter(product => product.name !== payload),
    clearCart: state => ({ ...state, products: [] }),
  },
});

export const { setActiveId, addProducts, deleteProducts, clearCart } =
  shopsSlice.actions;
export default shopsSlice.reducer;
