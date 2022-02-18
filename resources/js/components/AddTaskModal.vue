<template>
    <b-modal id="create_task_modal" title="Create Task" hide-footer>
        <template v-if="isLoading">
            <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Adding Task...</strong>
            </div>
        </template>
        <b-form @submit.stop.prevent="onSubmit">
            <div class="py-3">
                <div class="form-group">
                    <b-form-group label="TASK NAME" label-for="task_name">
                        <b-form-input
                            size="lg"
                            class="form-control-alt"
                            id="task_name"
                            name="task_name"
                            placeholder="task name"
                            v-model="$v.form.task_name.$model"
                            :state="!$v.form.task_name.$error && null"
                            aria-describedby="task_name-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.task_name.$error">
                            <small
                                v-if="!$v.form.task_name.required"
                                class="text-danger"
                                >Task Name is required.</small
                            >
                            <small
                                v-if="!$v.form.task_name.minLength"
                                class="text-danger"
                                >Min length is 3.</small
                            >
                        </span>
                    </b-form-group>
                    <b-form-group
                        label="TASK DESCRIPTION"
                        label-for="task_description"
                    >
                        <b-form-input
                            size="lg"
                            class="form-control-alt"
                            id="task_description"
                            name="task_description"
                            placeholder="task description"
                            v-model="$v.form.task_description.$model"
                            :state="!$v.form.task_description.$error && null"
                            aria-describedby="task_description-feedback"
                        ></b-form-input>
                        <span v-if="$v.form.task_description.$error">
                            <small
                                v-if="!$v.form.task_description.required"
                                class="text-danger"
                                >Task Description is required.</small
                            >
                            <small
                                v-if="!$v.form.task_name.minLength"
                                class="text-danger"
                                >Min length is 3.</small
                            >
                        </span>
                    </b-form-group>
                </div>
                <div class="form-group row justify-content-end mb-0">
                    <b-col md="6" xl="5">
                        <b-button type="submit" variant="success" block>
                            <i class="fa fa-fw fa-plus mr-1"></i>
                            Create Task
                        </b-button>
                    </b-col>
                </div>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                task_name: null,
                task_description: null,
            },
        };
    },
    validations: {
        form: {
            task_name: {
                required,
                minLength: minLength(3),
            },
            task_description: {
                required,
                minLength: minLength(3),
            },
        },
    },
    computed: {
        ...mapGetters({
            isLoading: "task/isLoading",
        }),
    },
    mounted() {},
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }

            var _this = this;

            this.$store
                .dispatch("task/saveTask", { data: this.form })
                .then((res) => {
                    _this.form.task_name = null;
                    _this.form.task_description = null;
                    _this.$bvModal.hide("create_task_modal");
                });
        },
    },
};
</script>
