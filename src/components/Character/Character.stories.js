import { Character } from "./Character"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: "Example/Character",
    component: Character,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        // color: { control: "color" },
    },
    
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        label: "Character",
    },
}

export const Sapo = {
    args: {
        label: "Character",
        backgroundImage: "sapo",
    },
}

export const Pato = {
    args: {
        label: "Character",
        backgroundImage: "pato",
    },
}

export const Nave = {
    args: {
        label: "Character",
        backgroundImage: "asteroides",
    },
}
