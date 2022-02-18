<template>
    <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/home"
                ><img width="100px" src="/images/logo.png"
            /></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item
                        to="/home"
                        :class="{ active: $route.path === '/home' }"
                    >
                        Home</b-nav-item
                    >
                    <b-nav-item
                        to="/about"
                        :class="{ active: $route.path === '/about' }"
                        >About</b-nav-item
                    >
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-if="user" #button-content>
                            <em
                                >{{ user.first_name }}
                                {{ user.second_name }}</em
                            >
                        </template>
                        <b-dropdown-item href="#" @click="logout()"
                            >Sign Out</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    components: {},
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then((res) => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
