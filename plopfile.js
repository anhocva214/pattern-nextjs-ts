module.exports = plop => {
    plop.setGenerator('slice', {
        description: 'Create a slice',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your slice name?'
            },
            {
                type: 'confirm',
                name: 'wantAction',
                message: 'Do you want add action file?'
            }
        ],
        actions: function (data) {
            var actions = [
                {
                    // Add a new file
                    type: 'add',
                    // Path for the new file
                    path: './src/store/slices/{{dashCase name}}.slice.ts',
                    // Handlebars template used to generate content of new file
                    templateFile: 'plop-templates/slice.ts.hbs',
                },
                {
                    type: 'append',
                    path: './src/store/reducer.ts',
                    pattern: `/* PLOP_INJECT_IMPORT */`,
                    template: `import \{ {{camelCase name}}Reducer \} from './slices/{{dashCase name}}.slice';`,
                },
                {
                    type: 'append',
                    path: './src/store/reducer.ts',
                    pattern: `/* PLOP_INJECT_USE */`,
                    template: `\t{{camelCase name}}: {{camelCase name}}Reducer,`,
                },
            ];

            if (data.wantAction) {
                actions.push({
                    type: 'add',
                    path: './src/store/actions/{{dashCase name}}.action.ts',
                    templateFile: './plop-templates/action.ts.hbs'
                });
            }

            return actions;
        },
    });


    plop.setGenerator('action', {
        description: 'Create a action',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your action name?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: './src/store/actions/{{dashCase name}}.action.ts',
                templateFile: './plop-templates/action.ts.hbs'
            },
        ]
    });
}