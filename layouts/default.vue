<template>
  <div class="default-layout">
    <a-layout style="height: 100vh">
      <a-layout-header :style="headerStyle">
        Header
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <slot />
      </a-layout-content>
      <!--      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>-->
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const headerStyle: CSSProperties = {
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #eeeeee',
};

const contentStyle: CSSProperties = {
    lineHeight: '120px',
    paddingInline: '50px',
    backgroundColor: '',
};

const footerStyle: CSSProperties = {
    backgroundColor: 'transparent',
    borderTop: '1px solid #eeeeee',
};
</script>

<style scoped>

</style>
