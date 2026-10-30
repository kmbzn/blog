import { defineClientConfig } from 'vuepress/client'
import { onMounted, onUnmounted } from 'vue'
import Layout from './layouts/Layout.vue'
import { installPrintLayout } from './print-layout.js'
import './styles/index.scss'

export default defineClientConfig({
  layouts: { Layout, NotFound: Layout },
  setup() {
    let dispose
    onMounted(() => { dispose = installPrintLayout() })
    onUnmounted(() => { dispose?.() })
  },
})
