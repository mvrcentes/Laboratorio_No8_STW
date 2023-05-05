import { Wall } from "./Wall"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Wall",
    component: Wall,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Wall",
    },
}

export const Secondary = {
    args: {
        label: "Wall",
    },
}

export const Large = {
    args: {
        size: "large",
        label: "Wall",
    },
}

export const Small = {
    args: {
        size: "small",
        label: "Wall",
    },
}
