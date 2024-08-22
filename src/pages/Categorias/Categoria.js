import React, {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import roupasImg from "../Img/roupas/roupas1-2.jpg";
import jeansImg from "../Img/jeans/jeans1-2.jpg";
import praiaImg from "../Img/praia/praia1-2.jpg";
import fitnessImg from "../Img/fitness/fitness1-2.jpg";
import acessoriosImg from "../Img/acessorios/acessorio1-2.jpg"; 
import "./css/categoria.css";

function Categoria()
{
    const [categoria, setCategoria] = useState("");
    const [produtos, setProdutos] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const categoriaParam = searchParams.get("nome");
        if(categoriaParam){
            setCategoria(categoriaParam);
            fetchProdutos(categoriaParam);
        } 
    }, [searchParams]);

    const fetchProdutos = (categoria) => {
        fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/${categoria}.json`)
            .then((response) => response.json())
            .then((data) => {
                const produtosArray = Object.values(data || {});
                setProdutos(produtosArray);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos", error);
            });
    };

    const getImagem = (categoria) => {
        switch(categoria) {
            case "roupas": return roupasImg;
            case "jeans": return jeansImg;
            case "praia": return praiaImg;
            case "fitness": return fitnessImg;
            case "acessorios": return acessoriosImg;
            default: return null;
        }
    };

    return(
        <div>
            <div className="backcategoria w-100 d-flex justify-content-center align-content-center">
                 <span className="nomecategoria">{categoria}</span>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 ms-3 mb-3 mt-3">
                    {produtos.map((produto, index) => (
                        <Link 
                        key={index} 
                        to={`/produto`} 
                        state={{ produto, categoria }} 
                        className="text-decoration-none"
                        >
                        <div className="col" key={index}>
                            <div className="card h-100">
                                <img 
                                    src={getImagem(categoria)} 
                                    className="card-img-top" 
                                    alt={produto.nome} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{produto.nome}</h5>
                                    <p className="card-text ">
                                        Preço: R$ {produto.preco} <br/>
                                        Parcela: 10 x R$ {produto.parcela}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Categoria; 