<template>
  <!--  <button @click="openInfoModal">Open info modal</button>-->
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";

// Initialize store
const store = useModalStore();

// Make a function that opens modal with our inner component
// function openInfoModal() {
//   store.openModal({
//     component: ModalInfo,
//     props: { title: "My Dear Prop" },
//     onClose: (data: any) => {
//       console.log("closed: ", data);
//     },
//   });
// }
</script>
