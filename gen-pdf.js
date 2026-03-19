const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const highlightJs = require('highlight.js');
const puppeteer = require('puppeteer');

const mdFile = 'StockStrtegies.md';
const pdfFile = 'StockStrtegies.pdf';

// 1. Setup Markdown Engine (Clean, no KaTeX plugin needed)
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && highlightJs.getLanguage(lang)) {
      try { return highlightJs.highlight(str, { language: lang }).value; } catch (__) {}
    }
    return '';
  }
});

const markdown = fs.readFileSync(mdFile, 'utf-8');
const htmlContent = md.render(markdown);

// 2. The Header: Injecting MathJax 3.0
const headContent = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stock Strategies</title>
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      },
      svg: { fontCache: 'global' }
    };
  </script>
  <script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
  </script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.8;
      color: #333;
      background: #fff;
      padding: 50px;
      max-width: 950px;
      margin: 0 auto;
    }

    h1 {
      font-size: 2.2em;
      font-weight: 600;
      margin: 1.5em 0 0.7em 0;
      padding-bottom: 0.5em;
      border-bottom: 2px solid #e1e4e8;
    }

    h2 {
      font-size: 1.8em;
      font-weight: 600;
      margin: 1.3em 0 0.6em 0;
      padding-bottom: 0.4em;
      border-bottom: 1.5px solid #e1e4e8;
    }

    h3 {
      font-size: 1.4em;
      font-weight: 600;
      margin: 1em 0 0.5em 0;
    }

    h4 {
      font-size: 1.2em;
      font-weight: 600;
      margin: 0.8em 0 0.4em 0;
    }

    h5, h6 {
      font-size: 1.05em;
      font-weight: 600;
      margin: 0.6em 0 0.3em 0;
    }

    p {
      margin: 0.8em 0;
      line-height: 1.8;
    }

    ul, ol {
      margin: 1em 0;
      padding-left: 2.5em;
    }

    li {
      margin: 0.5em 0;
      line-height: 2;
    }

    code {
      background-color: rgba(27,31,35,.05);
      border-radius: 4px;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 13px;
      margin: 0;
      padding: 0.3em 0.6em;
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 6px;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 13px;
      line-height: 1.5;
      overflow: auto;
      padding: 18px;
      margin: 1em 0;
      border: 1px solid #e1e4e8;
    }

    pre code {
      background-color: transparent;
      border: 0;
      display: inline;
      line-height: inherit;
      margin: 0;
      overflow: visible;
      padding: 0;
      word-wrap: normal;
      color: #24292e;
    }

    blockquote {
      border-left: 0.3em solid #dfe2e5;
      color: #6a737d;
      padding: 0 1.5em;
      margin: 1em 0;
      font-style: italic;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1.2em 0;
    }

    table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    table th {
      background-color: #f6f8fa;
      border: 1px solid #d1d5da;
      font-weight: 600;
      padding: 8px 16px;
      text-align: left;
    }

    table td {
      border: 1px solid #d1d5da;
      padding: 8px 16px;
    }

    hr {
      background-color: #e1e4e8;
      border: none;
      height: 0.3em;
      margin: 2em 0;
      padding: 0;
    }

    img {
      max-width: 100%;
      height: auto;
      margin: 1.5em 0;
      display: block;
      border-radius: 4px;
    }

    a {
      background-color: transparent;
      color: #0366d6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* MathJax styling */
    .MathJax {
      font-size: 1.1em !important;
      max-width: 100%;
      overflow-x: auto;
    }

    /* Syntax highlighting */
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      background: #f6f8fa;
      color: #24292e;
      line-height: 1.5;
    }

    .hljs-string { color: #032f62; }
    .hljs-number { color: #005cc5; }
    .hljs-literal { color: #005cc5; }
    .hljs-attr { color: #6f42c1; }
    .hljs-built_in { color: #005cc5; }
    .hljs-title { color: #6f42c1; }
    .hljs-keyword { color: #d73a49; }
    .hljs-function { color: #6f42c1; }
  </style>
`;

const fullHTML = `<!DOCTYPE html><html><head>${headContent}</head><body>${htmlContent}</body></html>`;
fs.writeFileSync('_temp_render.html', fullHTML);

// 3. Puppeteer with MathJax Ready-Check
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.goto(`file://${path.resolve('_temp_render.html')}`, {
      waitUntil: 'networkidle0' 
    });

    // CRITICAL: Wait until MathJax finishes rendering all formulas
    await page.evaluate(async () => {
      await window.MathJax.typesetPromise();
    });

    // Extra wait to ensure SVG rendering is complete
    await new Promise(r => setTimeout(r, 500));

    await page.pdf({
      path: pdfFile,
      format: 'A4',
      margin: { top: '0.6in', bottom: '0.6in', left: '0.6in', right: '0.6in' },
      printBackground: true
    });

    await browser.close();
    fs.unlinkSync('_temp_render.html');
    
    const stats = fs.statSync(pdfFile);
    console.log(`✓ PDF created successfully: ${pdfFile}`);
    console.log(`✓ File size: ${(stats.size / 1024).toFixed(1)} KB`);
    console.log(`✓ Formulas rendered with MathJax SVG`);
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
})();
