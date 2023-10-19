<template>
    <div class="relative">
        <input :maxlength="props.numberLength" :value="props.value" :id="props.id" type="text" :name="props.name" class="peer w-full border-2 border-transparent px-4 pt-7 pb-[10px] bg-gray-100 rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-primaryColor" :placeholder="props.placeholder" />
        <label :for="props.for" class="absolute left-4 -top-[-5px] text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-5 peer-focus:-top-[-5px] peer-focus:text-primaryColor peer-focus:text-sm">{{ props.caption }}</label>
    </div>
</template>

<script setup>


const props = defineProps(['id','for','name','placeholder','caption', 'value','numberLength'])
</script>