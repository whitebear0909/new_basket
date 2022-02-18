<template>
    <b-container>
        <div>
            <b-button v-b-modal.create_task_modal class="mt-3" variant="primary"
                >Add Task
            </b-button>
            <add-task-modal></add-task-modal>
        </div>

        <!-- task Interface controls -->
        <b-row class="mt-3">
            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Filter"
                    label-for="filter-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''"
                                >Clear</b-button
                            >
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Sort"
                    label-for="sort-by-select"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                    v-slot="{ ariaDescribedby }"
                >
                    <b-input-group size="sm">
                        <b-form-select
                            id="sort-by-select"
                            v-model="sortBy"
                            :options="sortOptions"
                            :aria-describedby="ariaDescribedby"
                            class="w-75"
                        >
                            <template #first>
                                <option value="">-- none --</option>
                            </template>
                        </b-form-select>

                        <b-form-select
                            v-model="sortDesc"
                            :disabled="!sortBy"
                            :aria-describedby="ariaDescribedby"
                            size="sm"
                            class="w-25"
                        >
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col sm="5" md="6" class="my-1">
                <b-form-group
                    label="Per page"
                    label-for="per-page-select"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                >
                    <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="sm"
                    ></b-form-select>
                </b-form-group>
            </b-col>

            <b-col sm="7" md="6" class="my-1">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>

        <template v-if="isLoading">
            <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
        </template>
        <!-- Main table element -->
        <b-table
            v-if="!isLoading"
            :items="tasks.data"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            stacked="md"
            show-empty
            sticky-header
            responsive
            small
            @filtered="onFiltered"
            class="mt-3"
        >
            <template #cell(is_completed)="row">
                <input
                    type="checkbox"
                    @click="updateTask($event, row.item.id)"
                    :checked="row.item.is_completed"
                    :value="row.item.is_completed"
                />
            </template>
        </b-table>
    </b-container>
</template>
<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import AddTaskModal from "../../components/AddTaskModal";
export default {
    mixins: [validationMixin],
    components: { AddTaskModal },
    data() {
        return {
            form: {
                task_name: null,
                task_description: null,
            },
            fields: [
                {
                    key: "task_name",
                    label: "Task Name",
                    sortable: true,
                    sortDirection: "desc",
                },
                {
                    key: "task_description",
                    label: "Task Description",
                    sortable: true,
                    class: "text-center",
                },
                {
                    key: "is_completed",
                    label: "Is Completed",
                    formatter: (value, key, item) => {
                        return value ? "Yes" : "No";
                    },
                    sortable: true,
                    sortByFormatted: true,
                    filterByFormatted: true,
                },
            ],
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            sortBy: "",
            sortDesc: false,
            sortDirection: "asc",
            filter: null,
            filterOn: [],
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
            tasks: "task/tasks",
            isLoading: "task/isLoading",
        }),
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
        rows() {
            return this.tasks.data.length;
        },
    },
    mounted() {
        this.$store.dispatch("task/getTasks", "");
    },
    methods: {
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        updateTask(evt, id) {
            this.$store.dispatch("task/updateTask", {
                id: id,
                data: { id: id, is_completed: evt.target.checked },
            });
        },
    },
};
</script>
