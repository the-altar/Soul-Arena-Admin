<template>
  <div>
    <FormulateInput type='text' name='name' label='Character name' validation='required' />
    <FormulateInput
      type='textarea'
      name='description'
      label='Character profile description'
      validation='required'
    />

    <FormulateInput type='checkbox' v-model="character.released" label='Character is released'/>
    <Uploader :filename='character.facepic' :label='"Select an avatar (75 x 75)"'></Uploader>
    <Uploader :filename='character.banner'  :label='"Select a display banner (200 x 200)"'></Uploader>
  </div>
</template>

<script>
import Uploader from "./uploader.module"

export default {
  props:['character'],
  components:{
    Uploader
  }
}
</script>
