const http = require('http')

let alumnosList = [
    alumno1 = {
        name : 'Alejandro Becerra',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
    alumno2 = {
        name : 'Brianith Navarro',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
    alumno3 = {
        name : 'Cristian Moreno',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
    alumno4 = {
        name : 'Cristian Moreno',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
    alumno5 = {
        name : 'Cristopher Rojas ',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
    alumno6 = {
        name : 'Daniel Alvarez',
        position : 'Administrador de empresas y Product Manager',
        githubUsername : 'https://github.com/becerra2906',
    }
]


const app = http.createServer((request, response) => {
    response.writeHead(200, {''})
    response.writeHead(200, {'Content-type' : 'application/json'})
    response.end(JSON.stringify(alumnos.forEach()))
})

app.listen(3000)
console.log('Server running', 3000)