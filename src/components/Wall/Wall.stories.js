import { Wall } from "./Wall"

export default {
    title: "Example/Wall",
    component: Wall,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
    
}

export const Primary = {
    args: {
        label: "Wall",
    },
}

export const Tierra = {
    args: {
        label: "Wall",
        backgroundImage: "tierra",
    },
}

export const Trampa = {
    args: {
        label: "Wall",
        backgroundImage: "trampa",
    },
}

export const Asteroides = {
    args: {
        label: "Wall",
        backgroundImage: "asteroides",
    },
}



