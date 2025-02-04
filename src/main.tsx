import { domAnimation, LazyMotion } from 'framer-motion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LazyMotion features={domAnimation}>
			<App />
		</LazyMotion>
	</StrictMode>
)
