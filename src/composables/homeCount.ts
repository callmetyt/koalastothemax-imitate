import { ref } from "vue";

export default function useHomeCount() {
  let count = ref(0);
  let timer = ref<null | number>(null);

  function close() {
    clearInterval(timer.value!);
    timer.value = null;
  }
  function start() {
    close();
    timer.value = setInterval(() => {
      count.value++;
    }, 100);
  }
  function restart() {
    close();
    count.value = 0;
  }

  return {
    count,
    close,
    start,
    restart,
  };
}
