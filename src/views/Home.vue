<template>
  <div class="d-flex" :class="this.$store.state.menuToggle" id="wrapper">
    <TheSidemenu />
    <div id="page-content-wrapper">
      <TheTopmenu />
      <div class="container-fluid">
        <div class="row">
          <div class="col-4 p-3 mb-2">
            <div class="p-5 bg-success text-white fs-6 fw-bold">
              مدیریت کاربران
            </div>
          </div>
          <div class="col-4 p-3 mb-2">
            <div class="p-5 bg-danger text-white fs-6 fw-bold">
              مدیریت محصولات
            </div>
          </div>
          <div class="col-4 p-3 mb-2">
            <div class="p-5 bg-primary text-white fs-6 fw-bold">
              مدیریت فروشگاه
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheTopmenu from "@/components/TheTopmenu.vue"; // @ is an alias to /src
import TheSidemenu from "@/components/TheSidemenu.vue";

@Options({
  components: {
    TheTopmenu,
    TheSidemenu
  },
})
export default class Home extends Vue {}
</script>
