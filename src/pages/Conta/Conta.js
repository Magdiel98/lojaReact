import React, { useEffect, useState } from "react";
import "../../components/css/components.css";
import "../Principal/css/Principal.css";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";

function Conta()
{

    const [userData, setUserData] = useState(null); 
    const user = auth.currentUser;
    
    useEffect(() => {
        if(user){
            const userId = user.uid;

            fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/usuario/${userId}.json`)
                .then((response) => response.json())
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.error("Error ao buscar os dados do usuário: ", error);
                });
        }
    }, []);

    if(!userData)
    {
        return <div>Carregando...</div>;
    }

    return(
        <main className="container py-5">
            <div className="container d-flex">
                <div className="card col-3 shadow me-5">
                    <div className="card-body d-flex flex-column align-content-center">
                        <img src="https://via.placeholder.com/100" alt="usuario" className="rounded-circle w-50 align-self-center" id="fotolado"/>
                        <span id="nomelado">{userData.nome}</span>
                        <span id="celularlado">{userData.celular}</span>
                        <span id="emaillado">{userData.email}</span>
                        <div className="btn shadow bg-danger text-white w-50 mt-5 align-self-center" id="descadastrar"><Link to="/" className="text-decoration-none text-white">Descadastrar</Link></div>
                    </div>
                </div>
                <div className="card col-8 shadow">
                    <div className="card-body d-flex flex-column m-5">
                        <div className="d-flex">
                            <div className="d-flex flex-column">
                                <div>
                                    <span>Nome:</span><span id="nomeconta"> {userData.nome}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Sobrenome:</span><span id="sobrenomeconta"> {userData.sobrenome}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Sexo:</span><span id="sexoconta"> {userData.sexo}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Data de Nascimento:</span><span id="dataconta"> {userData.nascimento}</span>
                                </div>
                                <div className="mt-2">
                                    <span>E-mail:</span><span id="emailconta"> {userData.email}</span>
                                </div>
                                <div className="mt-2">
                                    <span>CPF:</span><span id="cpfconta"> {userData.cpf}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Telefone:</span><span id="telefoneconta"> {userData.telefone}</span>
                                </div>
                            </div> 
                            <div className="d-flex flex-column" style={{marginLeft:"200px"}}>
                                <div>
                                    <span>Celular:</span><span id="celularconta"> {userData.celular}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Rua:</span><span id="ruaconta"> {userData.rua}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Número:</span><span id="numeroconta"> {userData.numero}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Complemento:</span><span id="complementoconta"> {userData.complemento}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Referência:</span><span id="referenciaconta"> {userData.referencia}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Bairro:</span><span id="bairroconta"> {userData.bairro}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Estado:</span><span id="estadoconta"> {userData.estado}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 d-flex align-content-center justify-content-center">
                                <button className="btn shadow bg-success text-white w-25" id="atualizarConta"><Link to="/atualizarconta" className="text-decoration-none text-white">Atualizar</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Conta; 