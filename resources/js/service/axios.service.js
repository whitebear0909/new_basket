import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = process.env.MIX_SPA_URL;
axios.defaults.withCredentials = true;

// Response interceptor
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { status } = error.response;

        if (status >= 500) {
            Swal.fire({
                icon: "error",
                title: "Internal Server Error",
                text: error.response.data.message,
            });
        }

        if (status === 401) {
            Swal.fire({
                icon: "error",
                title: "Authentication Error",
                text: "You are not Authenticated.",
            });
            this.$router.push({ name: "signin" });
        }

        if (status === 403) {
            Swal.fire({
                icon: "error",
                title: "Authorization Error",
                text: "You don't have permission for this operation",
            });
        }

        if (status === 422) {
            Swal.fire({
                icon: "error",
                title: "422 Error",
                text: error.response.data.message,
            });
        }

        return Promise.reject(error);
    }
);

window.axios = axios;
