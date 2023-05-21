module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'semi':['error','never'],
        'max-len':['error',{ 'code':120}],
        'prefer-arrow-callback': 'error',
        'quotes': ['error', 'double'],
        'react/function-component-definition': 'off'
    }
}
