import React from "react"
import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"
import {NavBar} from "@components/NavBar"
import {GlobalStoreModel} from "@xotomicro/xotomicro-front-common-registry"

import "./style/overwrite.scss"

export let globalEventDistributor: GlobalStoreModel

export const App: any = (): JSX.Element => (
    <div>
        <NavBar />
    </div>
)

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
})

export function bootstrap(props: any) {
    globalEventDistributor = props.globalEventDistributor
    return headerLifecycles.bootstrap(props)
}

export function mount(props: any) {
    return headerLifecycles.mount(props)
}

export function unmount(props: any) {
    return headerLifecycles.unmount(props)
}

export default App
