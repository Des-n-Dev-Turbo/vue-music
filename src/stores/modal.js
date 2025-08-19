import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref(false);

  const hiddenClass = computed(() => {
    return !isModalOpen.value ? 'hidden' : '';
  });

  const toggleModalOpen = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  return { isModalOpen, hiddenClass, toggleModalOpen };
});
