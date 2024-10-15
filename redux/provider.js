'use client'
import {  store  } from "./store"
// import { UseSelector } from "react-redux"

const { Provider } = require("react-redux")

export const Providers = ({ children }) => {
    // const a = wrapper.useWrappedStore()
    // console.log(wrapper.useWrappedStore(store))

    return <Provider store={store}>{children}</Provider>
}

// const Providers = ({ children }) => {
//     return < >{children}</>
// }

// export default wrapper.withRedux(MyApp);