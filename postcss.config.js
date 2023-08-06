//const tailwindcss = require('tailwindcss');

import * as tailwindcss from 'tailwindcss'

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'), require('autoprefixer')
    ]
};
