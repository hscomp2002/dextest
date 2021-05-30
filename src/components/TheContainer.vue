<template>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script lang="ts" >
export default {
  name: "TheContainer"
};
</script>
<style scoped>
.main-content {
  min-height: 300px;
}
</style>
