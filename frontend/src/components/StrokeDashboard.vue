<template>
  <div>
    <h1>Stroke Survivor Dashboard</h1>
    <form @submit.prevent="addBehavior">
      <input v-model="newBehavior.type" placeholder="Type" required />
      <input v-model="newBehavior.description" placeholder="Description" required />
      <input v-model="newBehavior.date" type="date" required />
      <button type="submit">Add Behavior</button>
    </form>
    <ul>
      <li v-for="behavior in behaviors" :key="behavior.id">{{ behavior.type }}: {{ behavior.description }} ({{ behavior.date }})</li>
    </ul>
  </div>
</template>

<script>
import behaviorService from '@/services/behaviorService';

export default {
  data() {
    return {
      behaviors: [],
      newBehavior: {
        type: '',
        description: '',
        date: '',
      },
    };
  },
  async created() {
    this.behaviors = await behaviorService.fetchBehaviors();
  },
  methods: {
    async addBehavior() {
      if (this.newBehavior.type && this.newBehavior.description && this.newBehavior.date) {
        try {
          const behavior = await behaviorService.createBehavior(this.newBehavior);
          this.behaviors.push(behavior);
          this.newBehavior = { type: '', description: '', date: '' };
        } catch (error) {
          console.error('Error adding behavior:', error);
        }
      } else {
        console.warn('Please fill out all fields');
      }
    },
  },
};
</script>

<style scoped>
/* Component styles */
</style>
