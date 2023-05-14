import { Timer } from "./Timer"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Timer",
    component: Timer,
    tags: ["autodocs"],
    argTypes: {
    },
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        mins: 0,
        secs: 0,
    },
}
