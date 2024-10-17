<template>
  <div class="index-page">
    <a-row :gutter="16">
      <a-col>
        {{ count }}
      </a-col>
      <a-col>
        <a-button type="primary" @click="useCommonStore().increment()">
          Кнопка
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/store/common';

const { count } = storeToRefs(useCommonStore());
</script>

<style scoped>

</style>
