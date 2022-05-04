module.exports = plop => {
    plop.setGenerator('redux', {
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
            // {
            //     type: 'confirm',
            //     name: 'wantAction',
            //     message: 'Do you want add action file?'
            // }
        ],
        actions: function (data) {
            var actions = [
                {
                    // Add a new file
                    type: 'add',
                    // Path for the new file
                    path: './src/redux/{{dashCase name}}.redux.ts',
                    // Handlebars template used to generate content of new file
                    templateFile: 'plop-templates/redux.ts.hbs',
                },
                {
                    type: 'append',
                    path: './src/redux/reducer.ts',
                    pattern: `/* PLOP_INJECT_IMPORT */`,
                    template: `import \{ {{camelCase name}}Reducer \} from './{{dashCase name}}.redux';`,
                },
                {
                    type: 'append',
                    path: './src/redux/reducer.ts',
                    pattern: `/* PLOP_INJECT_USE */`,
                    template: `\t{{camelCase name}}: {{camelCase name}}Reducer,`,
                },
            ];

            return actions;
        },
    });


}