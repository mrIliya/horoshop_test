<script setup>
import { useActions } from 'vuex-composition-helpers'
import { actionTypesDesign } from '../../store/modules/design'
import router from '../../router'

const designs = [
    {
        id: 0,
        number: 103,
        name: 'Ostrov',
        preview: 'design-1.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 1,
        number: 104,
        name: 'Flora',
        preview: 'design-2.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 2,
        number: 103,
        name: 'SunWear',
        preview: 'design-3.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 3,
        number: 105,
        name: 'Flora',
        preview: 'design-2.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 4,
        number: 105,
        name: 'Flora',
        preview: 'design-2.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 5,
        number: 105,
        name: 'SunWear',
        preview: 'design-3.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 6,
        number: 105,
        name: 'Ostrov',
        preview: 'design-1.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
    {
        id: 7,
        number: 105,
        name: 'SunWear',
        preview: 'design-3.png',
        url: 'https://design###.horoshop.ua/',
        parts: [
            { id: 0, name: 'layout-1', image: 'layout-1.png' },
            { id: 1, name: 'layout-2', image: 'layout-2.png' },
            { id: 2, name: 'layout-3', image: 'layout-3.png' },
        ],
    },
]

const getImageUrl = (name) => {
    return new URL(`../../assets/images/designs/${name}`, import.meta.url).href
}

const { fetchDesign } = useActions({
    fetchDesign: actionTypesDesign.fetchDesign,
})

const putDesignData = (design) => {
    fetchDesign(design)
    router.push({
        path: '/edit-design',
        name: 'Edit',
    })
}
</script>
<template>
    <div class="designs">
        <ul class="designs__list">
            <li
                @click="putDesignData(design)"
                class="designs__line"
                v-for="design in designs"
                :key="design.id"
            >
                <img
                    :src="getImageUrl(design.preview)"
                    :alt="design.name"
                    class="designs__img"
                />
                <div class="designs__info">
                    <span class="designs__num">{{ design.number }}</span>
                    <span class="designs__name">{{ design.name }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.designs {
    padding-bottom: 216px;

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 40px 20px;
    }

    &__line {
        display: block;
        width: 300px;
        cursor: pointer;
    }

    &__img {
        width: 100%;
        height: 400px;
        margin-bottom: 16px;
    }

    &__info {
        display: flex;
        align-items: center;
    }

    &__num {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33px;
        height: 16px;

        font-size: 11px;
        background-color: #ffffff;
        border-radius: 8px;
        color: #000;
    }

    &__name {
        font-size: 16px;
        line-height: 18px;
        margin-left: 8px;
        color: #fff;
    }
}
</style>
