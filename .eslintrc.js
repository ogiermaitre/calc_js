module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        "sourceType": "module",
        "allowImportExportEverywhere": true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {}, // placed above other resolver configs
            webpack: {
                config: './webpack.config.resolve.js',
            },
        },
    },
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    plugins: [],
    extends: [
        'eslint:recommended',
    ],
    rules: {
        camelcase: 0,
        'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
        'no-unused-vars': [
            process.env.NODE_ENV === 'development' ? 'warn' : 'error',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
    },
}
