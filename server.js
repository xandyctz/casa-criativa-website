// usei o express para criar e configurar meu servidor
const express = require('express');

const server = express();

const ideas = [
  {
    img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
    title: 'Curso de Programacao',
    category: 'Estudo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'https://rocketseat.com.br',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/2729/2729005.svg',
    title: 'Exercicios',
    category: 'Saude',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'https://rocketseat.com.br',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/2729/2729027.svg',
    title: 'Meditacao',
    category: 'Mentalidade',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'https://rocketseat.com.br',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/2729/2729032.svg',
    title: 'Karaoke',
    category: 'Diversao em Familia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'https://rocketseat.com.br',
  },
  
]

// configurar arquivos estaaticos (cc, script, imagens)
server.use(express.static('public'));

// configuracao do nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  express: server,
  noCache: true,  // boolean
});

// criei uma rota /
// e capturo o pedido do cliente para responder
server.get('/', function(req, res) {
  const reverseIdeas = [...ideas].reverse()

  let lastIdeas = []
  for (let idea of reverseIdeas) {
    if(lastIdeas.length < 2) {
      lastIdeas.push(idea)
    }
  }


  const h1 = 'oi do back end'
  return res.render('index.html', { ideas: lastIdeas });
});
server.get('/ideias', function(req, res) {
  const reverseIdeas = [...ideas].reverse()

  return res.render('ideias.html', {ideas: reverseIdeas});
});

// liguei meu servidor na porta 3000
server.listen(3000);