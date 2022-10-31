module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-duplicates': 'off',
        'import/no-namespace': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-commonjs': 'off',
        'import/no-amd': 'off',
        'import/no-nodejs-modules': 'off',
        'import/first': 'off',
        'import/exports-last': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-internal-modules': 'off',
        'import/unambiguous': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/group-exports': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/no-self-import': 'off',
        'import/no-cycle': 'off',
        'import/no-useless-path-segments': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/no-unused-modules': 'off',
        'import/newline-after-import': 'off',
        'import/no-default-export': 'off',
        'import/no-named-export': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'import/no-useless-path-segments': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'import/no-duplicates': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'import/no-useless-path-segments': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/no-self-import': 'off',
        'import/no-cycle': 'off',
        'import/no-useless-path-segments': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};