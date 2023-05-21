import React, { createContext, useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"

const ConfigContext = createContext(null)

export const useConfigContext = () => useContext(ConfigContext)

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({
        character: null,
        wall: null,
        path: null,
        largo: 5,
        ancho: 5,
    })

    useEffect(() => {
        localStorage.setItem("config", JSON.stringify(config))
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

ConfigProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ConfigContext
