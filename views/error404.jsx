const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="\images\sadmeme.jpg" height="500px" width="500px" alt="sadmanmeme" />
          </main>
      </Def>
    )
  }
  

module.exports = error404