import { createSlice } from "@reduxjs/toolkit";

export const kangarooSlice = createSlice({
  name: "listings",
  initialState: {
    listings: [
      {
        id: 1683724827718,
        name: "Aqmal",
        nickname: "test",
        weight: 12,
        height: 30,
        gender: "Male",
        color: "123",
        friendliness: "Friendly",
        birthday: "2023-05-11T13:20:24.694Z",
      },
    ],
  },
  reducers: {
    createList: (state, action) => {
      state.listings = [action.payload, ...state.listings];
    },
    updateList: (state, action) => {
      const { id } = action.payload;
      const filteredState = state.listings.filter((item) => item.id !== id);

      state.listings = [action.payload, ...filteredState];
    },
    deleteList: (state, action) => {
      const id = action.payload;
      const filteredState = state.listings.filter((item) => item.id !== id);

      state.listings = [...filteredState];
    },
  },
});

export const { createList, updateList, deleteList } = kangarooSlice.actions;
export default kangarooSlice.reducer;
