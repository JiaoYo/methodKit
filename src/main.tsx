// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 导出组件
export * from './utils'
const mode = import.meta.env.MODE

if (mode !== 'production') {
  // <App /> 组件里面可以放我们的组件测试代码 所以开发环境这一步是必要的
  // 但是生产环境渲染节点会显得多余 所以生产环境不需要这一步（主要是react18+ createRoot不能使用多次，否则开发者使用该包时控制台会报警告）
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
  )
}

