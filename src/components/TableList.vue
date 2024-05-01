<template>
  <div>
    <h2 class="text-xl text-sky-700">{{ title }}</h2>
    <table v-if="list.length" class="border-collapse border border-gray-200">
      <thead>
        <tr>
          <th class="border border-gray-200 bg-gray-100 px-4 py-2">Назва</th>
          <th class="border border-gray-200 bg-gray-100 px-4 py-2">
            Координати
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.name">
          <td class="border border-gray-200 px-4 py-2">{{ item.name }}</td>
          <td class="border border-gray-200 px-4 py-2">{{ item.geo }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-red-600">У вас поки що немає {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "TableList",
  props: {
    title: String,
    list: Array,
  },
};
</script>

<style lang="scss" scoped></style>
