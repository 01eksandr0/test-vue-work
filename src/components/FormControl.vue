<template>
  <div class="w-1/6 bg-white p-5" style="height: 80vh">
    <div>
      <h2 class="text-xl mb-4">Додати</h2>
      <ul>
        <li>
          <button
            @click="() => updateGeo('point')"
            :class="{
              'mb-3 inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ': true,
              'bg-green-500': getActiveFn === 'point',
            }"
          >
            Точку
          </button>
        </li>
        <li>
          <button
            @click="() => updateGeo('line')"
            :class="{
              'mb-3 inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ': true,
              'bg-green-500': getActiveFn === 'line',
            }"
          >
            Лінію
          </button>
        </li>
        <li>
          <button
            @click="() => updateGeo('poligon')"
            :class="{
              'mb-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ': true,
              'bg-green-500': getActiveFn === 'poligon',
            }"
          >
            Полігон
          </button>
        </li>
      </ul>
    </div>
    <h2 class="text-xl">Змінити</h2>
    <h3>Колір</h3>
    <div>
      <input type="radio" id="purple" value="purple" v-model="selectedColor" />
      <label
        for="purple"
        class="inline-block mr-2 ml-1 bg-purple-500 w-4 h-4 rounded-full"
      ></label>
      <input type="radio" id="red" value="red" v-model="selectedColor" />
      <label
        for="red"
        class="inline-block mr-2 ml-1 bg-red-500 w-4 h-4 rounded-full"
      ></label>
      <input type="radio" id="green" value="green" v-model="selectedColor" />
      <label
        for="green"
        class="inline-block ml-1 bg-green-500 w-4 h-4 rounded-full"
      ></label>
    </div>
    <h3>Прозорість</h3>
    <input type="range" v-model.number="opacity" min="0.1" max="1" step="0.1" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FormControl",
  data() {
    return {
      selectedColor: "red",
      opacity: 1,
    };
  },
  methods: mapActions(["updateColor", "updateOpacity", "updateGeo"]),
  computed: mapGetters(["getActiveFn"]),
  watch: {
    selectedColor() {
      this.updateColor(this.selectedColor);
    },
    opacity() {
      this.updateOpacity(this.opacity);
    },
  },
};
</script>

<style lang="scss" scoped></style>
