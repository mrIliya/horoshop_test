<script setup></script>

<template>
    <main class="main">
        <aside class="main__aside">
            <router-link :to="{ name: 'Home' }">
                <img
                    src="@/assets/images/logo.svg"
                    alt="logo"
                    class="main__logo"
                />
            </router-link>
        </aside>
        <router-view />
    </main>
</template>

<style lang="scss" scoped>
.main {
    min-height: 100vh;
    display: flex;
    width: 100%;

    &__aside {
        padding: 9px 8px;
        width: 40px;
        background: #627b7a;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>
