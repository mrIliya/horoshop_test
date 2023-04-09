<script setup>
import { ref } from 'vue'
import router from '../../router'

const props = defineProps({
    page: String,
    publick: Boolean,
})

const publick = ref(props.publick)

const publickHandler = () => {
    publick.value = !publick.value
}

const saveAndLeave = () => {
    router.push({
        path: '/',
        name: 'Home',
    })
}
</script>
<template>
    <header class="header">
        <h1 class="header__title" v-if="page === 'Home'">Всі дизайни</h1>
        <router-link
            :to="{ name: 'Home' }"
            v-if="page === 'Add' || page === 'Edit'"
        >
            <button class="header__arrow">
                <img
                    src="@/assets/images/icons/arrow-left.svg"
                    alt="arrow"
                    class="header__icon"
                />
            </button>
        </router-link>
        <div class="header-publick" v-if="page === 'Add' || page === 'Edit'">
            <button
                class="header-publick__btn"
                :class="{ active: publick }"
                @click="publickHandler"
            >
                <span class="header-publick__circle"></span>
            </button>
            <span class="header-publick__text" :class="{ success: publick }">
                {{ publick ? 'Опублікований' : 'Неопублікований' }}
            </span>
        </div>
        <router-link :to="{ name: 'Add' }" v-if="page === 'Home'">
            <button class="header__btn">Додати дизайн</button>
        </router-link>
        <button class="header__btn header__delete" v-if="page === 'Edit'">
            Видалити
        </button>
        <button
            class="header__btn"
            @click="saveAndLeave()"
            v-if="page === 'Add' || page === 'Edit'"
        >
            Зберегти і вийти
        </button>
    </header>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 20px 0;

    &__title {
        font-size: 24px;
        line-height: 40px;
    }

    &__btn {
        background: #418af2;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 11px;
    }

    &__delete {
        background: #ffffff;
        color: #e61610;
        margin-right: 8px;
    }
}

.header-publick {
    margin-left: 68px;
    margin-right: auto;
    display: flex;
    align-items: center;

    &__btn {
        width: 64px;
        height: 24px;
        padding: 2px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: all ease-out 0.6s;

        &.active {
            justify-content: flex-end;
            background: #7ab10e;
        }
    }

    &__circle {
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        border-radius: 14px;
    }

    &__text {
        transition: all ease-out 0.6s;
        margin-left: 10px;
        line-height: 18px;
        color: #222222;
        &.success {
            color: #699707;
        }
    }
}
</style>
