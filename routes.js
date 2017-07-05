const fs = require('fs');
const path = require('path');

const routes = fs.readdirSync('./pages').reduce((acc, curr) => {
    const baseName = path.basename(curr, 'js');
    return {
        ...acc,
        [`${baseName}Page`]: {
            path: [`/{baseName}`],
            page: `pages/${baseName}`
        }
    };
}, {})

module.exports = {
    middleware: fs.readdirSync('./middleware'),
    routes
}