<script setup>
import { ref, onMounted } from 'vue';
import { useAppStore } from '../store';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const router = useRouter();

const selectedDay = ref('');

onMounted(() => {
  selectedDay.value = router.currentRoute.value.params.dayName;
});
</script>