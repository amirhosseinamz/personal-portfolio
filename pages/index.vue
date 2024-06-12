<template>
  {{localeProperties}}
  <div class="container bg-blue-400 rounded-2xl w-100 h-100 dark:bg-slate-800">
    <select v-model="locale">
      <option value="en">en</option>
      <option value="fa">fa</option>
    </select>
    <b class="bold text-3xl font-bold underline dark:text-white">
      {{$t('welcome')}}
    </b>
  </div>
</template>

<script setup>

const { locale, localeProperties } = useI18n()
</script>

<style scoped lang="scss">
//.container {
//  background-color: rgba(0,0,0,0.2);
//  .bold {
//    font-size: 26px;
//  }
//}
</style>
