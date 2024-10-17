<template>
  <a-config-provider :theme="configProvider">
    <div class="root">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";
import configProvider from "~/config-provider";
</script>
