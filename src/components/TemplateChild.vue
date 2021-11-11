<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TemplateChild",
  setup() {
    const count = ref(0);

    const increment = () => ++count.value;

    return {
      count,
      increment,
    };
  },
};
</script>