import React, { useState } from "react"
import PropTypes from "prop-types"

import { Dropdown } from "../Dropdown/Dropdown"

export const Form = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    return (
        <Dropdown
            name="Skin personaje"
            value={selectedCharacter}
            items={["sapo", "pato", "nave"]}
            selected={selectedCharacter}
            setSelected={setSelectedCharacter}
        />
    )
}

Form.propTypes = {
    /**
     * 
     */
    backgroundImage: PropTypes.oneOf(["tierra", "trampa", "asteroides"]),
}

Form.defaultProps = {
    backgroundImage: null,
}
