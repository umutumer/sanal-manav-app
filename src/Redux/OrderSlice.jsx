import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isimSoyisim: '',
  adres: '',
  siparisNotu: '',
  urunler: [],
};

const siparisSlice = createSlice({
  name: 'siparis',
  initialState: [],
  reducers: {
    setSiparisField: (state, action) => {
        return { ...state, [action.field]: action.value };
    },
    setUrunler: (state, action) => {
      state.urunler = action.payload;
    },
    clearSiparis: (state) => {
      return initialState;
    },
  },
});

export const { setSiparisField, setUrunler, clearSiparis } = siparisSlice.actions;
export const selectSiparis = (state) => state.siparis;
export default siparisSlice.reducer;