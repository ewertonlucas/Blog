// Carregando módulos
const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const admin = require ("./routes/admin")
const path = require ("path")

// Configurações
// Body-parser 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

// Handlebars 
    app.engine('handlebars', engine({
        defaultLayout: 'main', // Define o layout padrão como 'main'
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }))
    app.set('view engine', 'handlebars');

//Public
    app.use(express.static(path.join(__dirname,"public")))
    
// Rotas
    app.use('/admin', admin)

// Outros
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log("Servidor rodando na porta " + PORT);
    });
