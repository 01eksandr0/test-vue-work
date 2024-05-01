<template>
  <div>
    <TableList :list="getGeo.points" :title="'Точки'" />
    <TableList :list="getGeo.linies" :title="'Лінії'" />
    <TableList :list="getGeo.poligons" :title="'Полігони'" />
  </div>
</template>

<script>
import TableList from "../components/TableList.vue";
import { mapGetters } from "vuex";
export default { components: { TableList }, computed: mapGetters(["getGeo"]) };
</script>

<style lang="scss" scoped></style>
