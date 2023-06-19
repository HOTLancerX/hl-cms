import './globals.css'

export const metadata = {
  title: 'HOTLancer CMS',
  description: 'HOTLancer CMS - Next.js Generations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
