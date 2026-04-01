<template>
    <section class="bg-base-bg pb-16">
        <AppStreams :start-slice="0" :end-slice="4" />
        <AppStreams :start-slice="8" :end-slice="12" />
        <AppCategories />
        <AppTheme />
        <AppStreams :start-slice="16" :end-slice="20" />
        <AppStreams :start-slice="24" :end-slice="28" />
    </section>
</template>