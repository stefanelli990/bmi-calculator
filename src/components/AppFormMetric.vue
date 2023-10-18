<template>
    <div class="space-y-4">
        <AppInputs :value="height" @input="inputListener($event, 'height')" caption="Height" id="height" for="height" name="height" placeholder="Height"/>
        <AppInputs :value="weight" @input="inputListener($event, 'weight')" caption="Weight" id="weight" for="weight" name="weight" placeholder="Weight"/>
        <AppBtn width="w-full" @click="calculateMetric"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AppBtn from './AppBtn.vue';
import AppInputs from './AppInputs.vue';
import { Icon } from '@iconify/vue';

const emits = defineEmits(['submit-metric'])

const height = ref('');
const weight = ref('');

const inputListener = (e, field) => {
    if(field === 'height') {
        height.value = e.target.value
    } else if(field === 'weight') {
        weight.value = e.target.value
    }
}

const calculateMetric = () => {
    // Parse height and weight as numbers
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    // metric cformula
    const heightCm = heightValue / 100;

    const metric = weightValue / (heightCm * heightCm);

    if(heightValue && weightValue) {
        emits('submit-metric', metric.toFixed(1))
    } else {
        alert('please fill inputs')
    }
}

</script>