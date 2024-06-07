<template>
    <VeeField :name="name" v-slot="{ field, value }">
        <div>
            <input v-bind="field" :type="type" :placeholder="placeholder" :disabled="disabled"
                class="w-full p-3 text-black pl-5 rounded-full border-1 border placeholder-gray-500 border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-500 disabled:opacity-50 disabled:text-gray-500" />
            <VeeErrorMessage :name="name" as="div" class="text-red-500 pl-3" />
        </div>
    </VeeField>
</template>

<script setup lang="ts">

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
})

</script>