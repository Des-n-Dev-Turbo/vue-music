<script setup>
import { useModalStore } from '@/stores/modal';
import { defineComponent } from 'vue';

defineComponent({
  name: 'AppHeader',
});

const modalStore = useModalStore();

const toggleModal = () => {
  modalStore.toggleModalOpen();
};
</script>

<template>
  <header id="header" class="bg-gray-700 sticky top-0 z-10">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleModal">Login / Register</a>
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
