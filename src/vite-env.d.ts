/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENV: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    // @ts-ignore
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}