export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>CodeName: Oranges</title>
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Outfit"/>
      </head>
      <body>
      <nav className="nav-top">
        <a className="nav-link-logo" href="/"><img src="greenes_logo.png" alt="logo" width="30%" height="auto"/></a>
        <div className="nav-top-container">
          <a className="nav-link" href="/partneri.html">Radni paket</a>
          <a className="nav-link" href="/radni_paket.html">Projektna Dokumentacija</a>
          <a className="nav-link" href="/galerija.html">Galerija</a>
          <a className="nav-link" href="/partneri.html">Partneri</a>
          <a className="nav-link" href="/kontakt.html">Kontakt</a>
          <a className="nav-link" href="/index.html">E-Platforma</a>
        </div>
      </nav>
        {children}
      </body>
    </html>
  )
}
