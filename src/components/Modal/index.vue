<template>
    <div class="modal" @click.self="closeMyModal">
        <div class="modal__content">
            <slot></slot>   
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        closeMyModal(){
            this.$emit("closeModal")
        }
    }
}
</script>