import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: ['setupTests.ts'],
        environment: 'jsdom',
        watchIgnore: ['node_modules', 'node_modules/(?!lodash-es)'],
        coverage: {
            exclude: [
                '**/*.d.ts',
                'src/constants/**/*',
                'src/redux/**/*',
                'src/reportWebVitals.ts',
                'src/setupTests.ts',
                'src/env-config.js',
                'src/index.tsx',
                'src/**/*.test.{js,ts,tsx}',
            ],
            include: ['src/**/*.{js,ts,tsx}'],
            reporter: ['html', 'json-summary', 'text-summary', 'lcov', 'clover'],
            reportsDirectory: 'target/test-results/',
        },
    },
})
