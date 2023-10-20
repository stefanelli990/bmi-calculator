<template>
    <AppToggle @toggle="toggleForm" :label="formMetricIsVisible ? 'US Units' : 'Metric Units'"/>
    <div class="space-y-4" v-if="formMetricIsVisible">
        <AppInputs :value="height" @input="updateField($event, 'height')" caption="Height(cm)" id="height" for="height" name="height" placeholder="Height"/>
        <AppErrMsg v-if="errMsgHeight" :err-txt="'Height is required.'"/>
        <AppInputs :value="weight" @input="updateField($event, 'weight')" caption="Weight(kg)" id="weight" for="weight" name="weight" placeholder="Weight"/>
        <AppErrMsg v-if="errMsgWeight" :err-txt="'Weight is required.'"/>
        <AppBtn size="w-full" @click="calculateBmi"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
    <div class="grid grid-cols-2 gap-4" v-else-if="!formMetricIsVisible">
        <div>
          <AppInputs :value="feet" @input="updateField($event, 'feet')" caption="Feet(ft)" id="feet" for="feet" name="feet" placeholder="Feet"/>
          <AppErrMsg v-if="errMsgFeet" :err-txt="'Feet is required.'"/>
        </div>
        <div>
          <AppInputs :value="inches" @input="updateField($event, 'inches')" caption="Inches(in)" id="inches" for="inches" name="inches" placeholder="Inches"/>
          <AppErrMsg v-if="errMsgInches" :err-txt="'Inches is required.'"/>
        </div>
        <div class="col-span-2">
          <AppInputs :value="pounds" @input="updateField($event, 'pounds')" caption="Pounds(lb)" id="pounds" for="pounds" name="pounds" placeholder="Pounds" />
          <AppErrMsg v-if="errMsgPounds" :err-txt="'Pounds is required.'"/>
        </div>
        <AppBtn @click="calculateBmi" class="col-span-2"><span>Calculate BMI</span><Icon icon="fa6-solid:arrow-right" /></AppBtn>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import AppBtn from './AppBtn.vue'
import AppInputs from './AppInputs.vue'
import AppToggle from './AppToggle.vue'
import AppErrMsg from './AppErrMsg.vue'

const emits = defineEmits(['submit-bmi'])

const errMsgHeight = ref(false)
const errMsgWeight = ref(false)
const errMsgFeet = ref(false)
const errMsgInches = ref(false)
const errMsgPounds = ref(false)

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
    const heightValue = parseFloat(height.value)
    const weightValue = parseFloat(weight.value)

    if (!isNaN(heightValue) && !isNaN(weightValue)) {
      const heightCm = heightValue / 100
      const metric = weightValue / (heightCm * heightCm)
      errMsgHeight.value = false
      errMsgWeight.value = false
      emits('submit-bmi', metric.toFixed(1))
    } else if(isNaN(heightValue) && isNaN(weightValue)) {
      errMsgHeight.value = true
      errMsgWeight.value = true
    } else if(isNaN(heightValue) && !isNaN(weightValue)) {
      errMsgHeight.value = true
      errMsgWeight.value = false
    } else if(isNaN(weightValue) && !isNaN(heightValue)) {
      errMsgWeight.value = true
      errMsgHeight.value = false
    } 
  } else {
    const feetValue = parseFloat(feet.value)
    const inchesValue = parseFloat(inches.value)
    const poundsValue = parseFloat(pounds.value)

    if (!isNaN(feetValue) && !isNaN(inchesValue) && !isNaN(poundsValue)) {
      const usHeight = feetValue * 12 + inchesValue
      const imperialUnits = (poundsValue / (usHeight * usHeight)) * 703
      errMsgFeet.value = false
      errMsgPounds.value = false
      errMsgInches.value = false
      emits('submit-bmi', imperialUnits.toFixed(1))
    } else if(isNaN(feetValue) && isNaN(inchesValue) && isNaN(poundsValue)) {
      errMsgFeet.value = true
      errMsgPounds.value = true
      errMsgInches.value = true
    } else if(!isNaN(poundsValue) && isNaN(feetValue) && isNaN(inchesValue)) {
      errMsgPounds.value = false
      errMsgFeet.value = true
      errMsgInches.value = true
    } else if(!isNaN(inchesValue) && isNaN(feetValue) && isNaN(poundsValue)) {
      errMsgInches.value = false
      errMsgFeet.value = true
      errMsgPounds.value = true
    } else if(!isNaN(feetValue) && isNaN(inchesValue) && isNaN(poundsValue)) {
      errMsgFeet.value = false
      errMsgInches.value = true
      errMsgPounds.value = true
    } else if(!isNaN(feetValue) && !isNaN(inchesValue) && isNaN(poundsValue)) {
      errMsgFeet.value = false
      errMsgInches.value = false
      errMsgPounds.value = true
    } else if(isNaN(feetValue) && !isNaN(inchesValue) && !isNaN(poundsValue)) {
      errMsgFeet.value = true
      errMsgInches.value = false
      errMsgPounds.value = false
    } else if(!isNaN(feetValue) && isNaN(inchesValue) && !isNaN(poundsValue)) {
      errMsgFeet.value = false
      errMsgInches.value = true
      errMsgPounds.value = false
    }
  }
}

</script>