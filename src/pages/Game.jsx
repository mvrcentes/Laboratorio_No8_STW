import React from "react"

import { Maze } from "../components/Maze/Maze"

import { useConfigContext } from "../Contexts/Config"

export const Game = () => {
    const { config } = useConfigContext()
    return <Maze prompt={config}/>
}
