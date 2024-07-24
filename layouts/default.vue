<template>
  <div class="wrapper content-wrapper">
    <Header/>
    <div class="page-content">
      <slot></slot>
    </div>
    <Footer class="max-lg:hidden"/>
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

</script>

<style lang="scss" scoped>
//.wrapper {
//  @apply border border-line-1 bg-primary-300 rounded-lg w-auto h-full m-[70px];
//}
.content-wrapper {
  @apply border border-line-1 bg-primary-300 rounded-lg h-full mt-[70px] max-lg:mt-4 overflow-hidden;
}

.page-content {
  @apply relative rounded-bl-lg rounded-br-lg flex flex-col py-4 h-[calc(100vh_-_245px)] max-lg:h-[calc(100vh_-_90px)];
}

.wrapper {
  @apply 2xl:max-w-[1500px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[752px] sm:max-w-[600px] xs:max-w-[470px] mx-4 xs:mx-auto;
}
</style>
