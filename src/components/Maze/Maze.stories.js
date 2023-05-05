import { Maze } from "./Maze"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Maze",
    component: Maze,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Maze",
    },
}

export const Secondary = {
    args: {
        label: "Maze",
    },
}

export const Large = {
    args: {
        size: "large",
        label: "Maze",
    },
}

export const Small = {
    args: {
        size: "small",
        label: "Maze",
    },
}
