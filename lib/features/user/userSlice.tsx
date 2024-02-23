// userSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  userData: UserData | null;
}

export interface UserData {
  username: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  emailVerified: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = ( state: {user: UserState }) => state.user;

export default userSlice.reducer;
