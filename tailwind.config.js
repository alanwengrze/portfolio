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
			screens: {
				'xs': '480px',
			},
			backgroundImage: {
				noise: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkzIiBoZWlnaHQ9IjQwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGZpbHRlciBpZD0ibm9pc2UiPgogICAgPGZlVHVyYnVsZW5jZSAKICAgICAgdHlwZT0iZnJhY3RhbE5vaXNlIiAKICAgICAgYmFzZUZyZXF1ZW5jeT0iMC42NSIgCiAgICAvPgogICAgPGZlQ29tcG9zaXRlCiAgICAgIG9wZXJldG9yPSJpbiIKICAgICAgaW4yPSJTb3VyY2VHcmFwaGljIgogICAgICByZXN1bHQ9Im1vbm9Ob2lzZSIKICAgIC8+CiAgPC9maWx0ZXI+CjxwYXRoIGQ9Ik0yMjkuMDE4IDU4LjExMzVDMTk4LjUxOCAtOC44ODY1IDE2NC4wMTggLTYwLjM4NjUgNzUuNTE3NyAxNjYuMTEzQzY3LjE4NDQgMTc4LjExMyA0My4wMTc3IDIwOS42MTMgMTMuMDE3NyAyMzkuNjEzQy0xNi45ODIzIDI2OS42MTMgMTYuMTg0NCAzMTcuNDQ3IDM2LjUxNzcgMzM3LjYxM0M0OS41MTc3IDM1OC40NDcgODQuMTE3NyA0MDEuMjE0IDExOC41MTggNDA1LjYxM0MxNjEuNTE4IDQxMS4xMTMgMjM1LjUxOCA0MDAuMTEzIDI1OC41MTggMzkxLjExM0MyODEuNTE4IDM4Mi4xMTMgMzA0LjAxOCAzMTQuNjEzIDI4NS41MTggMjc3LjExM0MyNjcuMDE4IDIzOS42MTMgMTk4LjAxOCAyODguNjEzIDE3NS41MTggMjAyLjExM0MxNTMuMDE4IDExNS42MTMgMjU5LjUxOCAxMjUuMTE0IDIyOS4wMTggNTguMTEzNVoiCmZpbGw9IiNkMGQiCmZpbHRlcj0idXJsKCNub2lzZSkiCi8+Cjwvc3ZnPgo=")'
			},
  		colors: {
				transparent: 'transparent',
  			background: '#0D0D0D',
				textColor: '#A1A1A1',
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

