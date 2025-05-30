
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				lecturewala: {
					yellow: "#FFD54C",
					"yellow-light": "#FFECB3",
					"yellow-dark": "#FFC107",
					bg: "#FAFAFA",
					"bg-alt": "#F5F5F5",
					text: "#333333",
					"text-light": "#666666"
				},
				lecturewala2: {
					primary: "#4C9EFF",
					"primary-light": "#B3D8FF",
					"primary-dark": "#007BFF",
					bg: "#F0F8FF",
					"bg-alt": "#E6F2FF",
					text: "#2B3A4A",
					"text-light": "#5A6B7D"
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(2deg)' },
					'50%': { transform: 'translateY(-10px) rotate(-1deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 6s ease-in-out infinite'
			},
			boxShadow: {
				'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, #FFD54C20 0%, #FFFFFF 100%)',
				'hero-gradient-alt': 'linear-gradient(135deg, #E6F4FF 0%, #FFFFFF 100%)',
				'cta-gradient': 'linear-gradient(90deg, #FFD54C40 0%, #E6F4F1 100%)',
				'cta-gradient-alt': 'linear-gradient(90deg, #4C9EFF40 0%, #E6F4F1 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
