import { useState } from 'react';
import './css/ProdutoAcao.css';
//Usar o useState para atribuir valores à variáveis e enviar para o banco de dados.
import roupasImg from "../Img/roupas/roupas1-2.jpg";
import jeansImg from "../Img/jeans/jeans1-2.jpg";
import praiaImg from "../Img/praia/praia1-2.jpg";
import fitnessImg from "../Img/fitness/fitness1-2.jpg";
import acessoriosImg from "../Img/acessorios/acessorio1-2.jpg"; 


function ProdutoAcao()
{
    const [categoria, setCategoria] = useState(); 
    const [preco, setPreco] = useState();
    const [parcela, setParcela] = useState("");

    const produtos = {
        roupas: {nome: "Vestido", preco: "300", parcela: "10x 30", imagem: roupasImg},
        jeans: {nome: "Calça Jeans", preco: "200", parcela: "10x 20", imagem: jeansImg},
        praia: {nome: "Saída de Praia", preco: "100", parcela: "10x 10", imagem: praiaImg},
        fitness: {nome: "Conjunto Fitness", preco: "190", parcela: "10x 19", imagem: fitnessImg},
        acessorios: {nome: "Acessórios", preco: "200", parcela: "10x 20", imagem: acessoriosImg}

    };


    function adicionarProduto()
    {
        if(categoria)
        {
            const produto = produtos[categoria];

            fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}.json`, {
                method:'POST', 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(produto),
            })
            .then(() => {
                console.log("Tudo ok!");
            })    
            .catch(error => {
                console.error("Deu errado!");
            })
        }
    }

    function removerProduto()
    {
        if(categoria)
        {

            fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}.json`)
            .then(response => response.json())
            .then(data => {
                if(data){
                    const keys = Object.keys(data);
                    const lastKey = keys[keys.length - 1];

                    fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}/${lastKey}.json`, {
                        method: 'DELETE',
                    })
                    .then(() => {
                        console.log("Último produto removido com sucesso!")
                    })
                    .catch(error => {
                        console.error("Erro ao remover o último produto", error);
                    });
                }
            })    
            .catch(error => {
                console.error("Deu errado!");
            })
        }
    }

    function inputCategoria(event)
    {
        setCategoria(event.target.value);
    }

    function inputPreco(event)
    {
        setPreco(event.target.value);
        setParcela((event.target.value)/10)
    }
    
    function atualizarPrecosCategoria() {
        if (categoria && preco) {
            fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}.json`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const updates = {};
                    Object.keys(data).forEach(key => {
                        updates[`${key}/preco`] = preco;
                        updates[`${key}/parcela`] = parcela;   
                    });

                    fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}.json`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updates),
                    })
                    .then(() => {
                        console.log("Preços da categoria atualizados com sucesso!");
                    })
                    .catch(error => {
                        console.error("Erro ao atualizar os preços", error);
                    });
                }
            })
            .catch(error => {
                console.error("Erro ao buscar produtos!", error);
            });
        }
    }


    return(
        <main className="container py-5">
            <div className="container">
                <div className="card col-12 shadow">
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-content-center">
                            <h1 className="card-title" style={{color: "rgb(150, 150, 150)"}}>Ação Produto</h1>
                        </div>
                        <div>
                            <h1 style={{color:"rgb(120, 120, 120)"}} className="fs-2">Categoria</h1>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <select className="form-select shadow" id="categoriaproduto" onChange={inputCategoria}>
                                        <option disabled selected hidden>Escolha a Categoria</option>
                                        <option value="roupas">Roupas</option>
                                        <option value="jeans">Jeans</option>
                                        <option value="praia">Moda Praia</option>
                                        <option value="fitness">Fitness</option>
                                        <option value="acessorios">Acessórios</option>
                                    </select>
                                </div>
                                <div className="d-flex w-100">
                                    <div className="d-flex justify-content-center w-100">
                                        <button type="button" className="btn shadow mt-5 bg-success text-white w-75 letraacao" id="adicionarproduto" onClick={adicionarProduto}>Adicionar</button>
                                    </div>
                                    <div className="d-flex justify-content-center w-100">
                                        <button type="button" className="btn shadow mt-5 bg-danger text-white w-75 letraacao" id="removerproduto" onClick={removerProduto}>Remover</button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h1 className="fs-3" style={{color:"rgb(120,120,120)"}}>Atualizar Preço</h1>
                                    <input type="number" id="preco" name="preco" step="0.01" min="0" placeholder="R$" className="form-control w-25 shadow" onChange={inputPreco} value={preco}/>
                                    <button type="button" className="btn shadow bg-primary mt-2 text-white w-25" id="atualizarproduto" onClick={atualizarPrecosCategoria}>Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default ProdutoAcao; 
