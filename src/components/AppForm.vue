<template>
    <AppToggle @toggle="toggleForm" :label="formMetricIsVisible ? 'US Units' : 'Metric Units'"/>
    <div class="space-y-4" v-if="formMetricIsVisible">
        <AppInputs :value="height" @input="updateField($event, 'height')" caption="Height(cm)" id="height" for="height" name="height" placeholder="Height" numberLength="3"/>
        <AppInputs :value="weight" @input="updateField($event, 'weight')" caption="Weight(kg)" id="weight" for="weight" name="weight" placeholder="Weight" numberLength="3"/>
        <AppBtn size="w-full" @click="calculateBmi"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
    <div class="grid grid-cols-2 gap-4" v-else-if="!formMetricIsVisible">
        <AppInputs :value="feet" @input="updateField($event, 'feet')" caption="Feet" id="feet" for="feet" name="feet" placeholder="Feet" numberLength="1"/>
        <AppInputs :value="inches" @input="updateField($event, 'inches')" caption="Inches" id="inches" for="inches" name="inches" placeholder="Inches" numberLength="2"/>
        <AppInputs :value="pounds" @input="updateField($event, 'pounds')" caption="Pounds" id="pounds" for="pounds" name="pounds" placeholder="Pounds" class="col-span-2" numberLength="3"/>
        <AppBtn @click="calculateBmi" class="col-span-2"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AppBtn from './AppBtn.vue';
import AppInputs from './AppInputs.vue';
import { Icon } from '@iconify/vue';
import AppToggle from './AppToggle.vue';

const emits = defineEmits(['submit-bmi'])

const height = ref('')
const weight = ref('')
const feet = ref('')
const inches = ref('')
const pounds = ref('')

const formMetricIsVisible = ref(true)

const toggleForm = () => {
    formMetricIsVisible.value = !formMetricIsVisible.value
}

const updateField = (e, field) => {
    if(field === 'height') {
        height.value = e.target.value
    } else if(field === 'weight') {
        weight.value = e.target.value
    } else if(field === 'feet') {
        feet.value = e.target.value
    } else if(field === 'inches') {
        inches.value = e.target.value
    } else if(field === 'pounds') {
        pounds.value = e.target.value
    }
}

const calculateBmi = () => {
  if (formMetricIsVisible.value) {
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    if (!isNaN(heightValue) && !isNaN(weightValue)) {
      const heightCm = heightValue / 100;
      const metric = weightValue / (heightCm * heightCm);
      emits('submit-bmi', metric.toFixed(1));
    } else {
      alert('Please fill in metric inputs with valid numbers.');
    }
  } else {
    const feetValue = parseFloat(feet.value);
    const inchesValue = parseFloat(inches.value);
    const poundsValue = parseFloat(pounds.value);

    if (!isNaN(feetValue) && !isNaN(inchesValue) && !isNaN(poundsValue)) {
      const usHeight = feetValue * 12 + inchesValue;
      const imperialUnits = (poundsValue / (usHeight * usHeight)) * 703;
      emits('submit-bmi', imperialUnits.toFixed(1));
    } else {
      alert('Please fill in US units inputs with valid numbers.');
    }
  }
}

</script>