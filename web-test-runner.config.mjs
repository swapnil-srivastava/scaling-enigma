import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: ['packages/*/tests/**/*.test.js'],
  nodeResolve: true,
  plugins: [],
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: '10000'
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
  },
  testRunnerHtml: testFramework =>
    `<html>
      <body>
        <script>window.snapshots = {}</script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
  snapshots: {
    directory: 'tests/__snapshots__'
  }
};
