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
            <a className="nav-link" href="/radni_paket">Radni paket</a>
            <a className="nav-link" href="/projektna_dokumentacija">Projektna dokumentacija</a>
            <a className="nav-link" href="/galerija">Galerija</a>
            <a className="nav-link" href="/partneri">Partneri</a>
            <a className="nav-link" href="/kontakt">Kontakt</a>
            <a className="nav-link" href="/">E-Platforma</a>
          </div>
        </nav>
        {children}
        Aleksandra Medvedeva 20, Niš<br/>
        018 588 211<br/>
        info@akademijanis.edu.rs<br/>
        <br/>
        Copyright © 2023 Oranges
      </body>
    </html>
  )
}
