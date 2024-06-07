<template>
    <div>
        <FormLogin />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
})
</script>