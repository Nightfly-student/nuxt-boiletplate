<template>
    <VeeForm v-slot="{ values, meta: formMeta }" :initial-values="initialValues" :validation-schema="schema"
        class="flex flex-col gap-7">
        <FieldInput name="email" type="email" placeholder="Your Email" />

        <FieldInput name="password" type="password" placeholder="Your Password" />

        <button @click="onSubmit($event, values)" :rounded="true" :disabled="!formMeta.valid">
            sign in
        </button>
    </VeeForm>
</template>

<script setup lang="ts">
import { object, string } from 'yup'

const { signIn } = useAuth()

const initialValues = {
    email: '',
    password: ''
}

const schema = object({
    email: string().email().required("Email is required"),
    password: string().required("Password is required").max(100)
})


const onSubmit = async (e: any, values: any) => {
    e.preventDefault()

    await signIn('credentials', { username: values.email, password: values.password })
}


</script>