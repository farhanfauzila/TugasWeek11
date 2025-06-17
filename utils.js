// utils.js

function generateHtml(title, content) {
  return `
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; }
          h1 { color: #d35400; }
          ul { padding-left: 20px; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${content}
      </body>
    </html>
  `;
}

module.exports = { generateHtml };
