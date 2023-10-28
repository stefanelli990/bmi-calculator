<template>
    <div class="relative">
        <input :maxlength="props.numberLength" :value="props.value" :id="props.id" type="number" :name="props.name" class="peer w-full border border-gray-200 px-4 pt-7 pb-[10px]  rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-primaryColor" :placeholder="props.placeholder" />
        <label :for="props.for" class="absolute left-4 -top-[-5px] text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-[-5px] peer-focus:text-primaryColor peer-focus:text-sm">{{ props.caption }}</label>
    </div>
</template>

<script setup>


const props = defineProps(['id','for','name','placeholder','caption', 'value','numberLength'])
</script>