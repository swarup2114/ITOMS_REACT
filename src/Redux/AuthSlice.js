import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inaSecretKey: null,
    userId: null,
    tenantId: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setInaSecretKey(state, action) {
            state.inaSecretKey = action.payload.inaSecretKey;
        },
        setUserId(state, action) {
            state.userId = action.payload.userId;
        },
        setTenantId(state, action) {
            state.tenantId = action.payload.tenantId;
        },
        clearAuthState(state) {
            state.inaSecretKey = null;
            state.userId = null;
            state.tenantId = null;
        },
    },
});

export const { setInaSecretKey, setUserId, setTenantId, clearAuthState } =
    authSlice.actions;
export default authSlice.reducer;
