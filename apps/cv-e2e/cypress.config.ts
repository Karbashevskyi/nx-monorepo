import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cv:serve:development',
        production: 'nx run cv:serve:production',
      },
      ciWebServerCommand: 'nx run cv:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
