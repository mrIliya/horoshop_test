<script setup>

defineProps({
    values: Object,
})

</script>
<template>
    <div class="inputs">
        <input
            type="text"
            class="inputs__input"
            :value="values?.number"
            placeholder="###"
        />
        <input
            type="text"
            class="inputs__input"
            :value="values?.name"
            placeholder="Назва дизайну"
        />
        <input
            type="text"
            class="inputs__input"
            :value="values?.url"
            placeholder="https://design###.horoshop.ua/"
        />
    </div>
</template>
<style lang="scss" scoped>
.inputs {
    &__input {
        width: 100%;
        height: 32px;
        padding: 11px 6px;
        margin-bottom: 24px;

        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.2);
        }

        &:nth-child(1) {
            width: 80px;
            margin-right: 8px;
        }

        &:nth-child(2) {
            width: calc(100% - 88px);
        }
    }
}
</style>
