# Commands
```bash
npx nx g @nx/angular:component --name=profile --directory=libs/ui-components/src/lib/profile --nameAndDirectoryFormat=as-provided --export --style=scss
```

Prepare the storybook configuration for the ui-components library, answers: `false`, `true`, `false`;
```bash
npx nx g @nx/angular:storybook-configuration ui-components
```

```bash
npx nx g @nx/js:lib interfaces --bundler=tsc
```
