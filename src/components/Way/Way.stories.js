import { Way } from "./Way"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Way",
    component: Way,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Way",
    },
}

export const Grama = {
    args: {
        label: "Way",
        backgroundImage: "grama",
    },
}

export const Agua = {
    args: {
        label: "Way",
        backgroundImage: "agua",
    },
}

export const Espacio = {
    args: {
        label: "Way",
        backgroundImage: "espacio",
    },
}

