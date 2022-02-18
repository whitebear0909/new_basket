import * as types from "../mutation-types";

// state
export const state = {
    tasks: {
        data: [],
        error: null,
    },
    task: {
        data: {},
        error: null,
    },
    isLoading: false,
};

// getters
export const getters = {
    tasks: (state) => state.tasks,
    task: (state) => state.task,
    isLoading: (state) => state.isLoading,
};

// mutations
export const mutations = {
    //GET TASKS
    [types.GET_TASKS_REQUEST](state, {}) {
        state.tasks.data = [];
        state.tasks.error = null;
        state.isLoading = true;
    },
    [types.GET_TASKS_SUCCESS](state, { data }) {
        state.tasks.data = data;
        state.isLoading = false;
    },
    [types.GET_TASKS_FAIL](state, { error }) {
        state.isLoading = false;
        state.tasks.error = error;
    },
    //UPDATE TASK
    [types.UPDATE_TASK_REQUEST](state, {}) {
        state.isLoading = true;
    },
    [types.UPDATE_TASK_SUCCESS](state, { data }) {
        const item = state.tasks.data.find((item) => item.id === data.id);
        Object.assign(item, data);
        state.task.data = data;
        state.isLoading = false;
    },
    [types.UPDATE_TASK_FAIL](state, { error }) {
        state.isLoading = false;
        state.task.error = error;
    },
    //SAVE TASK
    [types.SAVE_TASK_REQUEST](state, {}) {
        state.isLoading = true;
    },
    [types.SAVE_TASK_SUCCESS](state, { data }) {
        state.isLoading = false;
        state.tasks.data.push(data);
        state.task.data = data;
    },
    [types.SAVE_TASK_FAIL](state, { error }) {
        state.isLoading = false;
        state.task.error = error;
    },
};

// actions
export const actions = {
    async getTasks({ commit }, payload) {
        try {
            commit(types.GET_TASKS_REQUEST, {});
            const { data } = await axios.get("/tasks");
            commit(types.GET_TASKS_SUCCESS, { data: data });
        } catch (e) {
            commit(types.GET_TASKS_FAIL, { error: e });
        }
    },
    async updateTask({ commit }, payload) {
        try {
            commit(types.UPDATE_TASK_REQUEST, {});
            const { data } = await axios.post(
                `/tasks/${payload.id}`,
                payload.data
            );
            commit(types.UPDATE_TASK_SUCCESS, { data: data.data });
        } catch (e) {
            commit(types.UPDATE_TASK_FAIL, { error: e });
        }
    },
    async saveTask({ commit }, payload) {
        try {
            commit(types.SAVE_TASK_REQUEST, {});
            const { data } = await axios.post(`/tasks`, payload.data);

            commit(types.SAVE_TASK_SUCCESS, { data: data.data });
        } catch (e) {
            commit(types.SAVE_TASK_FAIL, { error: e });
        }
    },
};
