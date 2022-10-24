<template>
    <Nav />
    <div class="wrapper">
        <div class="left-content">
            <Sidebar />
        </div>

        <div class="right-content">
            <router-view />
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'

export default {
    name: 'Admin',
    components: {Nav, Sidebar}
}
</script>

<style>

</style>