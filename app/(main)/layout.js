import React from 'react'
import Header from '../_components/Header'

function layout({children}) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default layout