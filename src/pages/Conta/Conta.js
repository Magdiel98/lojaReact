import React from "react";
import "../../components/css/components.css";
import "../Principal/css/Principal.css";

function Conta()
{
    return(
        <main className="container py-5">
            <div className="container d-flex">
                <div className="card col-3 shadow me-5">
                    <div className="card-body d-flex flex-column align-content-center">
                        <img src="https://via.placeholder.com/100" alt="usuario" className="rounded-circle w-50 align-self-center" id="fotolado"/>
                        <span id="nomelado"></span>
                        <span id="celularlado"></span>
                        <span id="emaillado"></span>
                        <div className="btn shadow bg-danger text-white w-50 mt-5 align-self-center" id="descadastrar">Descadastrar</div>
                    </div>
                </div>
                <div className="card col-8 shadow">
                    <div className="card-body d-flex flex-column m-5">
                        <div className="d-flex">
                            <div className="d-flex flex-column">
                                <div>
                                    <span>Nome:</span><span id="nomeconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Sobrenome:</span><span id="sobrenomeconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Sexo:</span><span id="sexoconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Data de Nascimento:</span><span id="dataconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>E-mail:</span><span id="emailconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>CPF:</span><span id="cpfconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Telefone:</span><span id="telefoneconta"></span>
                                </div>
                            </div> 
                            <div className="d-flex flex-column" style={{marginLeft:"200px"}}>
                                <div>
                                    <span>Celular:</span><span id="celularconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Rua:</span><span id="ruaconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Número:</span><span id="numeroconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Complemento:</span><span id="complementoconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Referência</span><span id="referenciaconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Bairro:</span><span id="bairroconta"></span>
                                </div>
                                <div className="mt-2">
                                    <span>Estado:</span><span id="estadoconta"></span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 d-flex align-content-center justify-content-center">
                                <button className="btn shadow bg-success text-white w-25" id="atualizarConta">Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Conta; 