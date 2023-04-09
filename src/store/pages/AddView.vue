<script setup>
import MainHeader from '../../components/Header/MainHeader.vue'
import InputsGroup from '../../components/Inputs/InputsGroup.vue'
</script>
<template>
    <section class="add">
        <MainHeader page="Add" :publick="false" />
        <div class="add__content container">
            <div class="add__loader">
                <input type="file" class="add__file" />
                <img
                    src="@/assets/images/icons/file.svg"
                    alt="file"
                    class="add__icon"
                />
            </div>
            <InputsGroup />
        </div>
    </section>
</template>
<style lang="scss" scoped>
.add {
    width: calc(100% - 40px);
    padding: 0 32px;
    background-color: #fff;

    &__loader {
        position: relative;
        max-width: 600px;
        width: 100%;
        height: 120px;
        margin-bottom: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        border: 2px dashed rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    &__file {
        position: absolute;
        top: -30px;
        right: 0;
        bottom: 0;
        left: 0;
        appearance: none;
        width: 100%;
        height: 125%;
        z-index: 3;
        cursor: pointer;
    }

    &__icon {
        width: 60px;
        height: 48px;
    }
}
</style>
