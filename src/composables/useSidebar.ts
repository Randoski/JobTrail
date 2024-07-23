import { ref } from 'vue';

const isOpen = ref(false);

export function useSidebar() {
  const openSidebar = () => {
    isOpen.value = true;
  };

  const closeSidebar = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    openSidebar,
    closeSidebar,
  };
}
