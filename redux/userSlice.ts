// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: UserState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch {
    // Handle errors here
  }
};

const initialState: UserState = loadState() || {
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      saveState(state);
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      saveState(state);
    },
  },
});

export const { setTokens, clearTokens } = userSlice.actions;
export const selectTokens = (state: { user: UserState }) => ({
  accessToken: state.user.accessToken,
  refreshToken: state.user.refreshToken,
});

export default userSlice.reducer;
