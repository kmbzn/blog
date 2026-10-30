<script setup>
import { Content, RouteLink, useRoutePath, usePageData } from 'vuepress/client'
import sections from '@temp/study-sidebar.js'

const path = useRoutePath()
const page = usePageData()
</script>

<template>
  <a class="skip-link" href="#main-content">본문으로 건너뛰기</a>
  <div class="notes-layout">
    <aside class="sidebar" aria-label="전체 게시물">
      <nav>
        <section v-for="section in sections" :key="section.text">
          <h2>{{ section.text }}</h2>
          <ol>
            <li v-for="item in section.children" :key="item.path">
              <RouteLink :to="item.path" :aria-current="path === item.path ? 'page' : undefined">
                {{ item.text }}
              </RouteLink>
            </li>
          </ol>
        </section>
      </nav>
    </aside>
    <main id="main-content" tabindex="-1">
      <template v-if="page.path === '/404.html'">
        <h1>페이지를 찾을 수 없습니다</h1>
      </template>
      <Content v-else />
    </main>
  </div>
</template>
