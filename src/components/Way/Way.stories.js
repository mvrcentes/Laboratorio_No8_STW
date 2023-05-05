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

export const Secondary = {
    args: {
        label: "Way",
    },
}

export const Large = {
    args: {
        size: "large",
        label: "Way",
    },
}

export const Small = {
    args: {
        size: "small",
        label: "Way",
    },
}
