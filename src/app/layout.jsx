import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Tit from './head'
import Providers from './Providers'
import Tabs from '@/components/Tabs'
import Welcome from '@/components/Welcome'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <Tit/>
            <link rel="icon" type="png" href="https://private-user-images.githubusercontent.com/104012238/243110609-71ccf159-e656-44b5-b126-4d2be93d3a59.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1ODA4NjE4LCJuYmYiOjE2ODU4MDgzMTgsInBhdGgiOiIvMTA0MDEyMjM4LzI0MzExMDYwOS03MWNjZjE1OS1lNjU2LTQ0YjUtYjEyNi00ZDJiZTkzZDNhNTkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDYwMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA2MDNUMTYwNTE4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YmVlOTk0OTE2OTYyZWUwZDRhZjdlMGQyMmI2YTcwMjZiNDVkMzYzZWFkOTU4OWJjZmU2OGZiNTQwOTEzYjRkNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.U1EyHXrHk8WloJWVShUOfT6vXzlWqxbC7-0ch2qrfVI" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body >
           <Providers>
            <Header/>
            <Tabs/>
            {children}
            </Providers>
        </body>
    </html>
  )
}

export default Layout