<template>
  <div class="border">
    <button @click="runChild">
      Click to increment the number on the child which uses context expose
    </button>
    <Child ref="childComponent" />
    <hr />
    <button @click="runTemplateChild">
      Click to increment the number on child which returns the method normally
    </button>
    <TemplateChild ref="templateChildComponent" />
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
import TemplateChild from "@/components/TemplateChild.vue";

import { ref } from "vue";

export default {
  components: {
    Child,
    TemplateChild,
  },
  name: "Parent",
  setup() {
    const childComponent = ref(null);
    const templateChildComponent = ref(null);

    const runChild = () => {
      childComponent.value.increment();
    };

    const runTemplateChild = () => {
      templateChildComponent.value.increment();
    };

    return {
      childComponent,
      templateChildComponent,
      runChild,
      runTemplateChild,
    };
  },
};
</script>

<style scoped>
.border {
  border: 1px solid green;
}
</style>
