<template>
  <div class="flex gap-0">
    <MyMap />
    <FormControl />
  </div>
</template>

<script>
import MyMap from "../components/Map.vue";
import FormControl from "../components/FormControl.vue";
export default { components: { MyMap, FormControl } };
</script>
