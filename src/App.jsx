import ItemCardapio from "./components/ItemCardapio";
function App() {
  return (
    <div>
      <h1>Senai Delivery</h1>
      <ItemCardapio
        nome="Morango do amor"
        descricao="Uma porcaria de morango peresivel"
        preco="R$ 13,00"
      />
      <ItemCardapio
        nome="Hamburguer do BigDog"
        descricao="Hambúrguer terrivel, feito pelas mãos da Karine"
        preco="R$ 19,90"
      />
      <ItemCardapio
        nome="Macarrão de salsicha"
        descricao="Macarrão com salsicha e queijo"
        preco="R$ 19,90"
      />
    </div>
);
}

export default App;