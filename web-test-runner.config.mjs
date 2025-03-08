import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: ['packages/*/tests/**/*.test.js'],
  nodeResolve: true,
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    })
  ],
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: '2000'
    }
  },
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: false, // Don't generate files
    reporters: ['text', 'text-summary'], // Only terminal reporting
    threshold: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    },
    exclude: [
      '**/node_modules/**',
      '**/stories/**',
      '**/*.stories.*',
      '**/dist/**'
    ]
  }
};
