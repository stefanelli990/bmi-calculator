<template>
    <div class="grid grid-cols-2 gap-4">
        <AppInputs caption="Feet" id="feet" for="feet" name="feet" placeholder="Feet"/>
        <AppInputs caption="Inches" id="inches" for="inches" name="inches" placeholder="Inches"/>
        <AppInputs caption="Pounds" id="pounds" for="pounds" name="pounds" placeholder="Pounds" class="col-span-2"/>
        <AppBtn class="col-span-2"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
</template>

<script setup>
import AppBtn from './AppBtn.vue';
import AppInputs from './AppInputs.vue';
import { Icon } from '@iconify/vue';


</script>