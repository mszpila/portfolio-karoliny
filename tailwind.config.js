/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{css,html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'quiche': ['"quiche-stencil"', 'sans-serif'],
                'sans': ['Open Sans', 'sans-serif'],
            },
            colors: {
                korange: '#FFD0AF',
                kpink:'#EF6C98',
                kwhite:'#F1ECE8',

                background: '#FFFFFF',
                foreground: '#F5F5F7',
                border: '#DBDBDD',
                visualCue: '#969699',
                lowContrast: '#7D7D80',
                mediumContrast: '#525254',
                highContrast: '#212122',
                interaction: '#1166EE',
                error: '#CC4422',
                completion: '#118844',
                interactionTint: '#DDEEFF',
                errorTint: '#FFEEEE',
                completionTint: '#DDFFEE',

                backgroundDark: '#1A1D21',
                foregroundDark: '#282D33',
                borderDark: '#373D44',
                visualCueDark: '#7A8799',
                lowContrastDark: '#6C7787',
                mediumContrastDark: '#95A5BA',
                highContrastDark: '#F2F4F7',

                interactionDark: '#489be0',
                errorDark: '#da0505',
                completionDark: '#0caa48',
                interactionTintDark: '#354d74',
                errorTintDark: '#FFEEEE',
                completionTintDark: '#DDFFEE',

                tacholifeBLue: '#2084D8',
            },
        },
    },
    plugins: [],
}

