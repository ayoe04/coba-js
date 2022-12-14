const alat1Controller = require('./controllers/Input1Controller')
const alat2Controller = require('./controllers/Input2Controller')

// Define url API in Here
const _routes = [
     ['/coba-alat-1', alat1Controller],
     ['/coba-alat-2', alat2Controller]
]

// https://localhost:5001/tes

const routes = (app) => {
     _routes.forEach((route) => {
          const [ url, controller ] = route
          app.use(`${url}`, controller)
     })
}

module.exports = routes 

// kalo class exports nya harus pake new