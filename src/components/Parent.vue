<template>
  <div class="border">
    <button @click="runChild">Click to increment the number</button>
    <Child ref="childComponent" />
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
import { ref } from "vue";

export default {
  components: {
    Child,
  },
  name: "Parent",
  setup() {
    const childComponent = ref(null);

    const runChild = () => {
      childComponent.value.increment();
    };

    return {
      childComponent,
      runChild,
    };
  },
};
</script>

<style scoped>
.border {
  border: 1px solid green;
}
</style>
