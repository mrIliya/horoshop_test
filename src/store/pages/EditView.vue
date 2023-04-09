<script setup>
import { useGetters } from 'vuex-composition-helpers'
import MainHeader from '../../components/Header/MainHeader.vue'
import InputsGroup from '../../components/Inputs/InputsGroup.vue'
import { getterTypesDesign } from '../modules/design'
import { onMounted, ref } from 'vue'

const { getDesign } = useGetters({
    getDesign: getterTypesDesign.getDesign,
})

const design = ref({})

const getImageUrl = (name) => {
    return new URL(`../../assets/images/designs/${name}`, import.meta.url).href
}

onMounted(() => {
    design.value = getDesign.value
})
</script>
<template>
    <section class="edit">
        <MainHeader page="Edit" :publick="true" />
        <div class="edit__content container">
            <div class="edit-layouts">
                <ul class="edit-layouts__list">
                    <li
                        class="edit-layouts__line"
                        v-for="designLayout in design.parts"
                        :key="designLayout.id"
                    >
                        <img
                            :src="getImageUrl(designLayout.image)"
                            alt="layout"
                            class="edit-layouts__img"
                        />
                        <button class="edit-layouts__delete">
                            <img
                                src="@/assets/images/icons/delete.svg"
                                alt="delete"
                                class="edit-layouts__del"
                            />
                        </button>
                    </li>
                </ul>
                <button class="edit-layouts__add">
                    <img
                        src="@/assets/images/icons/add-layout.svg"
                        alt="add"
                        class="edit-layouts__icon"
                    />
                    <input type="file" class="edit-layouts__file" />
                </button>
            </div>
            <InputsGroup :values="design" />
        </div>
    </section>
</template>
<style lang="scss" scoped>
.edit {
    width: calc(100% - 40px);
    padding: 0 32px;
    background-color: #fff;
}

.edit-layouts {
    display: flex;
    margin-bottom: 40px;

    &__list {
        display: flex;
        margin-right: 7px;
    }

    &__line {
        position: relative;
        width: 120px;
        height: fit-content;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all ease-out 0.6s;

        & + li {
            margin-left: 8px;
        }

        &::before {
            content: '';
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            );
            z-index: 0;
            opacity: 0;
            transition: all ease-out 0.6s;
        }

        &:hover {
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
            cursor: grab;
            .edit-layouts__delete {
                opacity: 1;
            }

            &::before {
                opacity: 1;
            }
        }
    }

    &__img {
        width: 100%;
    }

    &__add {
        width: 120px;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px dashed rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        overflow: hidden;
    }

    &__file {
        position: absolute;
        width: 100%;
        height: 110%;
        top: -30px;
        right: 0;
        bottom: 0;
        left: 0;
        appearance: none;
        cursor: pointer;
    }

    &__icon {
        width: 30px;
        height: 30px;
    }

    &__delete {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        width: 24px;
        height: 24px;
        right: 4px;
        bottom: 4px;

        background: rgba(0, 0, 0, 0.5);
        border-radius: 3px;

        z-index: 1;
        opacity: 0;
        transition: all ease-out 0.6s;
    }
}
</style>
