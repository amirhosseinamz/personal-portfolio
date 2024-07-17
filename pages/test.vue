<template>
  <div>
    <BaseResizable>
      <template #left>
        <!-- Content for the left section (e.g., chat list) -->
        <div class="left-content">Chat List</div>
      </template>
      <template #right>
        <!-- Content for the right section (e.g., chat messages) -->
        <div class="right-content">Chat Messages</div>
      </template>
    </BaseResizable>
  </div>
</template>

<script setup>
import BaseResizable from "~/components/base/BaseResizable.vue";
</script>

<style scoped>
.left-content,
.right-content {
  padding: 10px;
  height: 100%;
}

.left-content {
  background-color: #f0f0f0;
}

.right-content {
  background-color: #fff;
}
</style>