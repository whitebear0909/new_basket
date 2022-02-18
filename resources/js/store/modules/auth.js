import Csrf from "@/service/csrf.service";
import Cookies from "js-cookie";
import * as types from "../mutation-types";
import Swal from "sweetalert2";

// state
export const state = {
    user: null,
    token: Cookies.get("token"),
};

// getters
export const getters = {
    user: (state) => state.user,
    token: (state) => state.token,
    check: (state) => state.user !== null,
};

// mutations
export const mutations = {
    [types.SAVE_TOKEN](state, { token, remember }) {
        state.token = token;
        Cookies.set("token", token, { expires: remember ? 365 : null });
    },
    [types.FETCH_USER_SUCCESS](state, { user, remember }) {
        state.user = user;
    },
    [types.FETCH_USER_FAILURE](state) {
        state.token = null;
        state.user = null;
        Cookies.remove("token");
        Cookies.remove("XSRF-TOKEN");
    },
};

// actions
export const actions = {
    saveToken({ commit, dispatch }, payload) {
        commit(types.SAVE_TOKEN, payload);
    },
    async register({ commit }, payload) {
        try {
            await Csrf.getCookie();
            const { data } = await axios.post("/register", payload);
            if (data?.success) {
                commit(types.SAVE_TOKEN, { token: data.token });
                commit(types.FETCH_USER_SUCCESS, { user: data.user });
                return true;
            }
            const key = Object.keys(data.message);
            Swal.fire({
                icon: "error",
                title: "Registration Error",
                text: data.message[key],
            });
            return false;
        } catch (e) {
            commit(types.FETCH_USER_FAILURE);
        }
    },

    async signin({ commit }, payload) {
        try {
            await Csrf.getCookie();
            const { data } = await axios.post("/login", payload);
            if (data?.success) {
                commit(types.SAVE_TOKEN, { token: data.token });
                commit(types.FETCH_USER_SUCCESS, { user: data.user });
                return true;
            } else {
                return false;
            }
        } catch (e) {
            commit(types.FETCH_USER_FAILURE);
        }
    },
    async logout({ commit }) {
        try {
            const { data } = await axios.post("/adsfasdfsf");
            if (data?.success) commit(types.FETCH_USER_FAILURE);
        } catch (e) {
            commit(types.FETCH_USER_FAILURE);
        }
    },
    async fetchUser({ commit }, payload) {
        try {
            await Csrf.getCookie();
            const { data } = await axios.post("/current");
            if (data?.success) {
                commit(types.FETCH_USER_SUCCESS, { user: data.user });
                return true;
            } else {
                return false;
            }
        } catch (e) {
            commit(types.FETCH_USER_FAILURE);
        }
    },
};
