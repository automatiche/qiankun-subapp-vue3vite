import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// 定义主应用地址  

let app: any

const render = (container?: any, origin?: string) => {
  app = createApp(App)
  app.provide('mainAppUrl', origin)
  app
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container, origin } = props
      render(container, origin)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    },
    update() {
      app.update()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
