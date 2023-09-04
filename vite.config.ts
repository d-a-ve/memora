import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		alias: {
			"@appwrite": "./src/appwrite",
			"@components": "./src/components",
			"@context": "./src/context",
			"@hooks": "./src/hooks",
			"@Home": "./src/pages/Home",
			"@Signup": "./src/pages/Signup",
			"@Login": "./src/pages/Login",
			"@Dashboard": "./src/pages/Dashboard",
			"@utils": "./src/Utils",
			"@contants": "./src/contants",
		},
	},
});
