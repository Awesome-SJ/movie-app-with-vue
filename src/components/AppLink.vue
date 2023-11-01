<template>
    <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
      <slot />
    </a>
    <router-link
      v-else
      v-bind="$props"
      custom
      v-slot="{ isActive, href, navigate }"
    >
      <a
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        :class="isActive ? activeClass : inactiveClass"
      >
        <slot />
      </a>
    </router-link>
  </template>
  
  <script>
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',

  props: {
    // TypeScript를 사용한다면, @ts-ignore 추가가 필요함
    ...RouterLink.props,
    inactiveClass: String,
  },



  setup(props) {
    // `props`에는 `to`와 <router-link>에 전달할 수 있는 다른 모든 prop이 포함됨.
    const { navigate, href, route, isActive, isExactActive } = useLink(props)


    return { isExternalLink }
  },
}

  </script>