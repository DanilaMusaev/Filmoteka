<script lang="ts" setup>
// Props и Emits
interface Props {
    modelValue?: string | number;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    placeholder?: string;
    disabled?: boolean;
    customClass?: string;
}

interface Emits {
    (e: 'update:modelValue', value: string | number): void;
    (e: 'blur'): void;
}

// Определяем их
const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    disabled: false,
});
const emit = defineEmits<Emits>();

// Обработчики
const onInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

const onBlur = (): void => {
    emit('blur');
};
</script>

<template>
    <input
        :value="modelValue"
        @input="onInput"
        @blur="onBlur"
        :type="type"
        :class="props.customClass"
        :placeholder="placeholder"
    />
</template>

<style scoped></style>
