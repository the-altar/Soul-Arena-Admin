<template>
  <FormulateInput
    type='image'
    :label='label'
    :upload-url='`character/file/${filename}`'
    help='Select a jpg file to upload'
    validation='mime:image/jpeg'
    upload-behavior='delayed'
  />
</template>

<script>
export default {
  props: ["label", "filename"],
};
</script>