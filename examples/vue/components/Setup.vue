<template>
  <div
    class="setup"
    @click="inc"
  >
    {{ count }}
  </div>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['on-add'])

const currentCount = ref(props.count)

const inc = () => {
  currentCount.value++
  emit('on-add', currentCount.value)
}
</script>
