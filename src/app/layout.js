// /Users/ratpartyserver/git/infinite-zimmah/src/app/layout.js

import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}