<template>
  <div class="border-right text-light shadow-lg" id="sidebar-wrapper">
    <div class="sidebar-heading text-start">
      {{ name }}
    </div>
    <ul class="list-group list-group-flush text-start">
      <li
        v-for="item in menus"
        :key="item.id"
        :class="menuActiveId == Number(item.id) ? 'active' : 'bg-dark-theme'"
        class="list-group-item list-group-item-action text-light fs-6"
      >
        <router-link
          :to="item.href"
          v-if="item.slug === `link`"
          class="text-decoration-none text-light"
          @click="changeActiveId(item.id)"
        >
          <i :class="item.icon"></i>
          {{ item.name }}
        </router-link>

        <a
          href="#"
          v-else-if="item.slug === `dropdown`"
          class="collapsed d-flex justify-content-between text-decoration-none text-light w-100"
          :data-bs-target="`#dashboard-collapse-` + item.id"
          data-bs-toggle="collapse"
        >
          <span>
            <i :class="item.icon"></i>
            {{ item.name }}
          </span>
          <span class="fas fa-angle-down"></span>
        </a>
        <div
          :class="getDropDownClass(item.elements)"
          :id="`dashboard-collapse-` + item.id"
        >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small pe-2">
            <li
              v-for="subItem in item.elements"
              :key="subItem.id"
              :class="getSubMenuClass(subItem.id, item.id)"
              class="list-group-item text-light m-3 w-100"
            >
              <router-link
                :to="subItem.href"
                class="text-decoration-none text-white"
                @click="changeActiveId(subItem.id)"
              >
                <i :class="subItem.icon"></i>
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import { Options, Vue } from "vue-class-component";
@Options({
  created() {},
  data() {
    return {
      name: process.env.VUE_APP_TITLE,
      menus: this.$store.state.menus,
      menuActiveId: -1, // this.$store.state.menuActiveId,
      openDropDownItem: -1,
      diaplay_parent: "collapse",
    };
  },
  methods: {
    changeActiveId: function (menuId: any) {
      this.menuActiveId = menuId;
      this.$store.commit("menuActiveId", this.menuActiveId);
    },
    getSubMenuClass: function (subItemId: any, itemId: any) {
      this.openDropDownItem =
        this.menuActiveId == Number(subItemId) ? itemId : -1;
      return this.menuActiveId == Number(subItemId)
        ? "active"
        : "bg-dark-theme";
    },
    getDropDownClass: function (elements: any) {
      for (let i in elements) {
        if (elements[i].id === this.menuActiveId) {
          return "";
        }
      }
      return "collapse";
    },
  },
})
export default class TheSidemenu extends Vue {}
</script>
