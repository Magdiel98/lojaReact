import React from "react";
import './css/Carrinho.css';


function Carrinho()
{

    return(
        <main className="container py-5">
            <div className="container">
                <div className="card col-12 shadow">
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-content-center">
                            <h1 className="card-title" style={{color: "rgb(150,150,150)"}}>Carrinho</h1>
                        </div>
                        <div className="d-flex">
                            <section className="w-75 ms-5">
                                Listagem de Produtos
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th className="text-secondary">Produto</th>
                                            <th className="text-secondary">Preço</th>
                                            <th className="text-secondary">Quantidade</th>
                                            <th className="text-secondary">Total</th>
                                            <th>-</th>
                                        </tr>
                                    </thead>
                                    <tbody id="corpo">
                                    </tbody>
                                </table>
                            </section>
                            <aside className="w-25 ms-3">
                                <div className="d-flex flex-column sticky-top" style={{backgroundColor: "#eee"}}>
                                    <header className="align-self-center">Resumo da Compra</header>
                                    <hr/>
                                    <div className="mb-2 p-2">
                                        <div className="d-flex justify-content-between"><span style={{color:"#555"}}>Sub-total</span><span>R$ 600</span></div>
                                        <div className="d-flex justify-content-between"><span style={{color:"#555"}}>Frete</span><span>Gratuito</span></div>
                                    </div>
                                    <footer className="d-flex justify-content-between p-2" style={{backgroundColor: "#ccc"}}>
                                        <span>Total</span><span>R$ 600</span>
                                    </footer>
                                    <button className="btn bg-success rounded-0 text-white mt-2 w-100" id="finalizarcompra">FINALIZAR COMPRA</button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Carrinho; 