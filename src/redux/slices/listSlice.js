import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [
    {
      id: 0,
      name: 'To Do',
      isAdd: false,
      cards: [{ name: 'Card 1' }, { name: 'Card 2' }],
    },
    {
      id: 1,
      name: 'To Do 1',
      isAdd: false,
      cards: [],
    },
  ],
  openNewList: false,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setOpen(state, action) {
      if (action.payload.name === 'card') {
        state.lists[action.payload.id].isAdd = true;
      } else {
        state.openNewList = true;
      }
    },
    setCLose(state, action) {
      if (action.payload !== undefined) {
        state.lists[action.payload].isAdd = false;
      } else {
        state.openNewList = false;
      }
    },
    createCard(state, action) {
      state.lists[action.payload.id].cards.push({ name: action.payload.name });
    },
    createList(state, action) {
      state.lists.push({
        name: action.payload,
        id: state.lists.length,
        cards: [],
        isAdd: false,
      });
    },
  },
});

export default listSlice.reducer;
export const { setOpen, setCLose, createCard, createList } = listSlice.actions;
