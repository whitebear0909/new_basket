<template>
    <!-- Page Content -->
    <div class="hero-static d-flex align-items-center">
        <div class="w-100">
            <!-- Sign Up Section -->
            <div>
                <div class="content content-full">
                    <b-row class="justify-content-center">
                        <b-col md="8" lg="6" xl="4" class="py-4">
                            <!-- Header -->
                            <div class="text-center">
                                <p class="mb-2">
                                    <i
                                        class="fa fa-2x fa-circle-notch text-primary"
                                    ></i>
                                </p>
                                <h1 class="h4 mb-1">Create Account</h1>
                                <h2 class="h6 font-w400 text-muted mb-3">
                                    Get your access today in one easy step
                                </h2>
                            </div>
                            <!-- END Header -->

                            <!-- Sign Up Form -->
                            <b-form @submit.stop.prevent="onSubmit">
                                <div class="py-3">
                                    <div class="form-group d-flex">
                                        <b-col class="pl-0" cols="6">
                                            <b-form-input
                                                size="lg"
                                                class="form-control-alt"
                                                id="first_name"
                                                name="first_name"
                                                placeholder="first name"
                                                v-model="
                                                    $v.form.first_name.$model
                                                "
                                                :state="
                                                    !$v.form.first_name
                                                        .$error && null
                                                "
                                                aria-describedby="first_name-feedback"
                                            ></b-form-input>
                                        </b-col>
                                        <b-col class="pr-0" cols="6">
                                            <b-form-input
                                                size="lg"
                                                class="form-control-alt"
                                                id="second_name"
                                                name="second_name"
                                                placeholder="second name"
                                                v-model="
                                                    $v.form.second_name.$model
                                                "
                                                :state="
                                                    !$v.form.second_name
                                                        .$error && null
                                                "
                                                aria-describedby="second_name-feedback"
                                            ></b-form-input>
                                        </b-col>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input
                                            type="email"
                                            size="lg"
                                            class="form-control-alt"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            v-model="$v.form.email.$model"
                                            :state="
                                                !$v.form.email.$error && null
                                            "
                                            aria-describedby="email-feedback"
                                        ></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input
                                            type="password"
                                            size="lg"
                                            class="form-control-alt"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            v-model="$v.form.password.$model"
                                            :state="
                                                !$v.form.password.$error && null
                                            "
                                            aria-describedby="password-feedback"
                                        ></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input
                                            type="password"
                                            size="lg"
                                            class="form-control-alt"
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="Confirm Password"
                                            v-model="
                                                $v.form.password_confirmation
                                                    .$model
                                            "
                                            :state="
                                                !$v.form.password_confirmation
                                                    .$error && null
                                            "
                                            aria-describedby="password_confirmation-feedback"
                                        ></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <div
                                            class="d-md-flex align-items-md-center justify-content-md-between"
                                        >
                                            <div>
                                                <b-form-checkbox
                                                    id="terms"
                                                    name="terms"
                                                    v-model="
                                                        $v.form.terms.$model
                                                    "
                                                    :state="
                                                        !$v.form.terms.$error &&
                                                        null
                                                    "
                                                    aria-describedby="terms-feedback"
                                                    >I agree to Terms &amp;
                                                    Conditions</b-form-checkbox
                                                >
                                            </div>
                                            <div class="py-2">
                                                <!-- Terms Modal -->
                                                <b-button
                                                    variant="link"
                                                    class="font-w500 font-size-sm p-0"
                                                    v-b-modal.one-signup-terms
                                                    >View Terms</b-button
                                                >
                                                <b-modal
                                                    id="one-signup-terms"
                                                    title="Terms &amp; Conditions"
                                                >
                                                </b-modal>
                                                <!-- END Terms Modal -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <b-row
                                    class="form-group row justify-content-center mb-0"
                                >
                                    <b-col md="6" xl="5">
                                        <b-button
                                            type="submit"
                                            variant="primary"
                                            block
                                        >
                                            Sign Up
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <!-- END Sign Up Form -->
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- END Sign Up Section -->
        </div>
    </div>
    <!-- END Page Content -->
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                first_name: null,
                second_name: null,
                email: null,
                password: null,
                password_confirmation: null,
                terms: null,
            },
        };
    },
    validations: {
        form: {
            first_name: {
                required,
                minLength: minLength(3),
            },
            second_name: {
                required,
                minLength: minLength(3),
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(5),
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs("password"),
            },
            terms: {
                sameAs: sameAs(() => true),
            },
        },
    },
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }

            this.$store.dispatch("auth/register", this.form).then((res) => {
                if (res === true) this.$router.push("/login");
            });
        },
    },
};
</script>
