export const metadata = {
  title: "Venture Protocol — Content Hub",
  description: "Content management dashboard for Venture Protocol",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
