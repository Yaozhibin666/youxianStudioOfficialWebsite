// declare module '*.vue' {
//     import { App, defineComponent } from 'vue'
//     const component: ReturnType<typeof defineComponent> & {
//       install(app: App): void
//     }
//     export default component
//   }

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}