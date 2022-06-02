const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

 


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



const cardFoot = [
  {
    id: 1,
    nome: "Carlinhos Bala",
    posicao: "Atacante",
    time: "Associação Cultural e Desportiva Potiguar",
    foto: "/img/bala.jpg.opdownload",
  },

  {
    id: 2,
    nome: "Paulo Dybala",
    posicao: "Atacante",
    time: "Juventos",
    foto: "/img/Paulo-Dybala-11-scaled-e1647959721648.jpg",
  },
];




app.get("/", (req, res) => {

  let jogador = undefined;
  res.render("index", {cardFoot, jogador});
});

app.post("/create", (req, res) =>{
  const jogador = req.body;
  jogador.id = cardFoot.length + 1;
  cardFoot.push(jogador)
 
  res.redirect("/");

});



app.get("/update/:id", (req, res) =>{
  const id = +req.params.id;
  const jogador = cardFoot.find(jogador => jogador.id === id);


  res.render("index" , {jogador, cardFoot});
})


app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}/`)
);
