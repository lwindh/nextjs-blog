import { renderToString } from 'react-dom/server'
import React from 'react'
import Home from '../Home'

export const render = (req) => {
  const content = renderToString(React.createElement(Home))

  return `
            <html>
            <head><title>ssr</title></head>
            <body>
                <div id="root">${content}</div>
            </body>
            </html>
            `
}
