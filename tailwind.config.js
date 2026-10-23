export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        'surface-sunken': 'var(--surface-sunken)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-tint': 'var(--primary-tint)',
        'primary-tint-strong': 'var(--primary-tint-strong)',
        'accent-gold': 'var(--accent-gold)',
        'accent-gold-hover': 'var(--accent-gold-hover)',
        'accent-gold-dark': 'var(--accent-gold-dark)',
        'accent-gold-light': 'var(--accent-gold-light)',
        'accent-gold-tint': 'var(--accent-gold-tint)',
        'accent-gold-tint-strong': 'var(--accent-gold-tint-strong)',
        'secondary-lavender': 'var(--secondary-lavender)',
        'secondary-lavender-hover': 'var(--secondary-lavender-hover)',
        'secondary-lavender-dark': 'var(--secondary-lavender-dark)',
        'secondary-lavender-light': 'var(--secondary-lavender-light)',
        'secondary-lavender-tint': 'var(--secondary-lavender-tint)',
        'secondary-lavender-tint-strong': 'var(--secondary-lavender-tint-strong)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-on-accent': 'var(--text-on-accent)',
        'text-on-gold': 'var(--text-on-gold)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        success: 'var(--success)',
        'success-tint': 'var(--success-tint)',
        warning: 'var(--warning)',
        'warning-tint': 'var(--warning-tint)',
        error: 'var(--error)',
        'error-tint': 'var(--error-tint)',
        'gradient-hero-start': 'var(--gradient-hero-start)',
        'gradient-hero-mid': 'var(--gradient-hero-mid)',
        'gradient-hero-end': 'var(--gradient-hero-end)',
        'border-width-hairline': 'var(--border-width-hairline)',
        'border-width-thick': 'var(--border-width-thick)'
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)'
      }
    }
  }
}
