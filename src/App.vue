<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader },
};
</script>

<template>
  <MyHeader />
  <router-view />
</template>

<style scoped></style>
