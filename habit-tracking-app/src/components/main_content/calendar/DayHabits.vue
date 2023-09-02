<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedDay = ref('');

onMounted(() => {
  selectedDay.value = router.currentRoute.value.params.dayName;
});
</script>