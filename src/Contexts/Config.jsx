import { createContext, useState, useEffect, useContext } from "react"

const ConfigContext = createContext(null)

export const useConfigContext = () => useContext(ConfigContext)

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({
        // const r = localStorage.getItem("config")
        // return r
        //     ? JSON.parse(r)
        //     : {
        //           character: null,
        //           wall: null,
        //           path: null,
        //           largo: 5,
        //           ancho: 5,
        //       }

        character: null,
        wall: null,
        path: null,
        largo: 5,
        ancho: 5,
    })

    useEffect(() => {
        localStorage.setItem("config", config)
    }, [config])

    const setConfigValue = (key, value) => {
        setConfig((oldConfig) => ({ ...oldConfig, [key]: value }))
    }

    return (
        <ConfigContext.Provider value={{ config, setConfigValue }}>
            {children}
        </ConfigContext.Provider>
    )
}

export default ConfigContext
