import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default { 
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	animation: {
  		'gradient-x': 'gradient-x 15s ease infinite',
  		'blob': 'blob 10s infinite',
  		'grid-cell-1': 'grid-cell 8s ease-in-out infinite',
  		'grid-cell-2': 'grid-cell 8s ease-in-out infinite 2s',
  		'grid-cell-3': 'grid-cell 8s ease-in-out infinite 4s',
  		'grid-cell-4': 'grid-cell 8s ease-in-out infinite 6s',
  		'spin-slow': 'spin 8s linear infinite',
  	},
  	keyframes: {
  		'gradient-x': {
  			'0%, 100%': {
  				'background-size': '200% 200%',
  				'background-position': 'left center'
  			},
  			'50%': {
  				'background-size': '200% 200%',
  				'background-position': 'right center'
  			},
  		},
  		blob: {
  			'0%, 100%': {
  				transform: 'translate(0, 0) scale(1)',
  			},
  			'33%': {
  				transform: 'translate(30px, -50px) scale(1.1)',
  			},
  			'66%': {
  				transform: 'translate(-20px, 20px) scale(0.9)',
  			},
  		},
  		'grid-cell': {
  			'0%, 100%': {
  				opacity: '0',
  			},
  			'33%': {
  				opacity: '1',
  			},
  			'66%': {
  				opacity: '0',
  			}
  		},
  	},
  	backgroundImage: {
  		'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  	},
  },
  plugins: [animate],
}
