<template>
    <section class="bg-base-bg pb-16">
        <AppStreams :start-slice="0" :end-slice="3"/>
        <AppStreams :start-slice="6" :end-slice="9"/>
        <AppCategories/>
        <AppTheme/>
        <AppStreams :start-slice="12" :end-slice="15"/>
        <AppStreams :start-slice="18" :end-slice="21"/>
    </section>
    </template> 