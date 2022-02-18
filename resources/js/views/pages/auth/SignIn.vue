<template>
    <b-container class="login-container">
        <b-row class="justify-content-center">
            <b-col md="6" lg="4" xl="4" class="py-4 login-blur">
                <div class="text-center mb-4 welcome-area">
                    <h3 class="mb-1 welcome-text">Welcome to Next Basket!</h3>
                </div>
                <!-- END Header -->

                <!-- Sign In Form -->
                <b-form class="login-form-area" @submit.stop.prevent="onSubmit">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <b-form-input
                            size="lg"
                            class="input-radius font-weight-bold form-control-alt py-4"
                            id="email"
                            name="email"
                            placeholder="Email"
                            v-model="$v.form.email.$model"
                            :state="!$v.form.email.$error && null"
                            aria-describedby="username-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.email.$error">
                            <small
                                v-if="!$v.form.email.required"
                                class="text-danger"
                                >Email is required.</small
                            >
                            <small
                                v-if="!$v.form.email.email"
                                class="text-danger"
                                >Please enter a valid email address.</small
                            >
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <b-form-input
                            type="password"
                            size="lg"
                            class="input-radius form-control-alt py-4"
                            id="password"
                            name="password"
                            placeholder="Password"
                            v-model="$v.form.password.$model"
                            :state="!$v.form.password.$error && null"
                            aria-describedby="password-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.password.$error">
                            <small
                                v-if="!$v.form.password.required"
                                class="text-danger"
                                >Password is required.</small
                            >
                        </span>
                    </div>
                    <div class="form-group">
                        <b-button
                            type="submit"
                            variant="primary"
                            :disabled="is_loading"
                        >
                            <span v-if="is_loading">
                                <i class="fa fa-cog fa-spin"></i>&nbsp;
                                submitting...
                            </span>
                            <span v-else> Log in </span>
                        </b-button>
                        <b-button
                            @click="gotoSignUp()"
                            type="button"
                            variant="primary"
                        >
                            Sign Up
                        </b-button>
                    </div>
                </b-form>
                <!-- END Sign In Form -->
            </b-col>
        </b-row>
    </b-container>
    <!-- END Page Content -->
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
            is_loading: false,
        };
    },
    validations: {
        form: {
            email: {
                required,
                email,
            },
            password: {
                required,
            },
        },
    },
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }
            this.is_loading = true;

            this.$store
                .dispatch("auth/signin", this.form)
                .then((res) => {
                    this.is_loading = false;

                    if (res) {
                        this.$router.push({ name: "Home" });
                    } else {
                        this.$swal(
                            "",
                            "Your credentials do not match our records",
                            "error"
                        );
                    }
                })
                .catch(() => {
                    this.is_loading = false;
                });
        },
        gotoSignUp() {
            this.$router.push({ name: "Register" });
        },
    },
};
</script>
