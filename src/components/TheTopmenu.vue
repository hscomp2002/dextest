<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button
      class="btn"
      @click="toogleMenu()"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul class="list-group list-group-horizontal px-3">
        <li class="list-group-item border-0">
          <a class="text-decoration-none text-secondary" href="#"
            >--- <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="list-group-item border-0">
          <a
            class="text-decoration-none text-secondary"
            href="#"
            @click="logout"
          >
            خروج
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" >
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      menuToggle: true,//this.$store.state.menuToggle,
      //arefApi: new ArefApi(this),
    };
  },
  methods: {
    toogleMenu: function () {
      this.menuToggle = this.menuToggle == "toggled" ? "" : "toggled";
      this.$store.commit("set", ["menuToggle", this.menuToggle]);
    },
    logout: function () {
      //this.api.logout();
    },
  },
})
export default class TheTopmenu extends Vue {}
</script>
