import React, { useState } from "react";
import './css/produto.css';
import '../Principal/css/Principal.css';
import '../../components/css/components.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

import roupas1 from "../Img/roupas/roupas1-2.jpg";
import roupas2 from "../Img/roupas/roupas2-2.jpg";
import roupas3 from "../Img/roupas/roupas3-2.jpg";
import roupas4 from "../Img/roupas/roupas4-2.jpg";
import roupas5 from "../Img/roupas/roupas5-2.jpg";


import jeans1 from "../Img/jeans/jeans1-2.jpg";
import jeans2 from "../Img/jeans/jeans2-2.jpg";
import jeans3 from "../Img/jeans/jeans3-2.jpg";
import jeans4 from "../Img/jeans/jeans4-2.jpg";
import jeans5 from "../Img/jeans/jeans5-2.jpg";


import praia1 from "../Img/praia/praia1-2.jpg";
import praia2 from "../Img/praia/praia2-2.jpg";
import praia3 from "../Img/praia/praia3-2.jpg";
import praia4 from "../Img/praia/praia4-2.jpg";
import praia5 from "../Img/praia/praia5-2.jpg";


import fitness1 from "../Img/fitness/fitness1-2.jpg";
import fitness2 from "../Img/fitness/fitness2-2.jpg";
import fitness3 from "../Img/fitness/fitness3-2.jpg";
import fitness4 from "../Img/fitness/fitness4-2.jpg";
import fitness5 from "../Img/fitness/fitness5-2.jpg"; 


import acessorios1 from "../Img/acessorios/acessorio1-2.jpg";
import acessorios2 from "../Img/acessorios/acessorio2-2.jpg";
import acessorios3 from "../Img/acessorios/acessorio3-2.jpg";
import acessorios4 from "../Img/acessorios/acessorio4-2.jpg";
import acessorios5 from "../Img/acessorios/acessorio5-2.jpg";


function Produto()
{
    const location = useLocation();
    const navigate = useNavigate();

    const {produto, categoria} = location.state || {};
    

    

    const getImagensPorCategoria = (categoria) => {
        switch(categoria) {
            case "roupas": 
                return [
                    roupas1, roupas2, roupas3, roupas4, roupas5 
                ];
            case "jeans": 
                return [
                    jeans1, jeans2, jeans3, jeans4, jeans5
                ];
            case "praia": 
                return [
                    praia1, praia2, praia3, praia4, praia5
                ];
            case "fitness": 
                return [
                    fitness1, fitness2, fitness3, fitness4, fitness5
                ];
            case "acessorios": 
                return [
                    acessorios1, acessorios2, acessorios3, acessorios4, acessorios5
                ];
            default:
                return[];
        }
    };

    const [imagemPrincipal, setImagemPrincipal] = useState(getImagensPorCategoria(categoria)[0]);
    const [quantidade, setQuantidade] = useState(1);
    const [modalVisivel, setModalVisivel] = useState(false);

    if(!produto || !categoria)
    {
        navigate("/");
        return null;
    }

    const handleImagemClick = (imagem) => {
        setImagemPrincipal(imagem);
    };

    const handleMais = () => {
        setQuantidade(quantidade + 1);
    };

    const handleMenos = () => {
        if(quantidade > 1){
            setQuantidade(quantidade - 1);
        }
    }

    const handleComprar = () => {
        setModalVisivel(true);
    };

    const handleFecharModal = () => {
        setModalVisivel(false);
    };

    const imagens = getImagensPorCategoria(categoria);

    return(
        <main className="mb-5 d-flex justify-content-center align-content-center mt-5 flex-column">
            <h1 className="align-self-center">{produto?.nome}</h1>
            <div className="d-flex align-self-center w-100">
                <div className="d-flex align-self-center flex-column me-5 ms-5">
                    {imagens.map((imagem, index) => (
                        <img 
                            key={index}
                            className="rounded shadow mb-2 larguralateral caracteristicaimagem" 
                            id={`img${index + 1}`} 
                            src={imagem} 
                            alt={`Imagem ${index + 1}`} 
                            onClick={() => handleImagemClick(imagem)}
                        />
                    ))}
                </div>
                <div>
                <img 
                        className="larguraproduto rounded shadow" 
                        id="imgp" 
                        src={imagemPrincipal} 
                        alt="Imagem Principal"
                    />
                </div>
                <div className="container">
                    <div className="card col-10 alturacard shadow">
                        <div className="card-body">
                            <h5 className="card-title">Preço</h5>
                            <h6 className="card-subtitle">Valor Parcelado</h6>
                            <div className="d-flex justify-content-center align-content-center">
                                <button className="btn bg-primary bg-gradient mt-5 w-75"><Link className="text-decoration-none text-white" to="/tabela" target="_blank">Tabela de Medidas</Link></button>
                            </div>
                            <div className="mt-5">
                                <h5 className="card-title">Sobre o Produto</h5>
                                <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium distinctio incidunt 
                                    cupiditate voluptates, libero optio! Veritatis, eveniet? Earum non natus quos perferendis libero 
                                    sed provident magni saepe cum laudantium!
                                </p>
                            </div>
                            <div className="d-flex justify-content-center align-content-center w-100 ms-4">
                                <div className="quantidade mt-5 me-2 rounded pe-4 ps-4 d-flex justify-content-center align-content-center">
                                    <button type="button" id="menos" onClick={handleMenos}><i className="bi-dash"></i></button>
                                    <span className="me-2 ms-2" id="valor">{quantidade}</span>
                                    <button type="button" id="mais" onClick={handleMais}><i className="bi-plus"></i></button>
                                </div>
                                <div className="d-flex align-content-center mt-2 w-100 h-25 align-self-end">
                                    <button className="btn bg-success bg-gradient w-75 text-white" id="botaocompra" onClick={handleComprar}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalVisivel && (
                <div id="modal">
                    <div className="modal-content d-flex flex-column align-content-center justify-content-center rounded-4">
                        <span className="mt-0" id="fecharModal" onClick={handleFecharModal}>&times;</span>
                        <h2 className="align-self-center" style={{color:"rgb(39,174,96)", fontSize:"1.5rem"}}>Produto adicionado ao seu carrinho!</h2>
                        <p className="align-self-center" style={{color:"rgb(120,120,120)"}}>O que você deseja fazer a seguir?</p>
                        <div className="align-self-center d-flex">
                            <button className="btn border shadow-sm letramodal" style={{color:"rgb(120,120,120)"}} id="continuar" onClick={handleFecharModal}>Continuar Comprando</button>
                            <button className="btn border shadow-sm text-white ms-3" id="finalizar"><Link to="/carrinho" className="text-decoration-none text-white letralmodal">Finalizar Compra</Link></button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}


export default Produto; 