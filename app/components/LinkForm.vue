<script setup lang="ts">
import { nanoid } from 'nanoid';
const form = reactive({
  long_url: '',
  key: '',
  id: ''
});

const emits = defineEmits(['submitForm']); 
const submitForm = () => {
  if (!form.long_url) {
    alert('Please enter a URL to shorten');
    return;
  }

  emits('submitForm', form );
  form.long_url = '';
  form.key = nanoid(6);

};

onMounted(() => {
  form.key = nanoid(6);
});

</script>

<template>
      <div class="card">
      <form 
      @submit.prevent="submitForm" class="flex items-center gap-5">
        <div class="w-5/12">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-300">Enter URL to shorten</label>
        <input v-model="form.long_url" type="text" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter URL to shorten">
      </div>
      <div class="w-5/12">
        <label class="block mb-2 text-sm font-medium text-gray-300" for="shortKey" >Short Key</label>
        <input v-model="form.key" type="text" id="shortkey" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Short Key">
      </div>
      <button class="w-2/12 mt-[10px] btn btn-primary">Shorten</button>
      </form>
    </div>
</template>