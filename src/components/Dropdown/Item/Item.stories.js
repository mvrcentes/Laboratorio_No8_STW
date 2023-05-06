import { Item } from "./Item"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Item",
    component: Item,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Item",
    },
}

export const Tierra = {
    args: {
        label: "Item",
        backgroundImage: "tierra",
    },
}

export const Trampa = {
    args: {
        label: "Item",
        backgroundImage: "trampa",
    },
}

export const Asteroides = {
    args: {
        label: "Item",
        backgroundImage: "asteroides",
    },
}
