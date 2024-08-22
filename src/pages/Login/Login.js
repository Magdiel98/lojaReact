import React, { useState } from "react";
import './css/Login.css';
import { Link, useNavigate } from "react-router-dom";
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from "../../firebaseConfig";

//Colocar funções faltantes onblur e onclick

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    function handleSignIn(e)
    {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    if(loading)
    {
        return <p>Carregando...</p>
    }



    return(
    
            <main className="container py-5">
                <div className="d-flex align-items-center flex-column">
                    <form action="" className="border d-flex flex-column p-5 rounded-3 shadow bg-body-secondary">
                        <h2>Login</h2>
                        <hr/>
                        <div id="divemail">
                            <label for="email" className="col-form-label">E-mail</label>
                            <input type="email" className="form-control shadow" placeholder="Digite o E-mail" id="email" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div id="divpassword">
                            <label for="senha" className="col-form-label">Senha</label>
                            <input type="password" className="form-control shadow" placeholder="Digite a Senha" id="password" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <p className="align-self-center mt-2">Esqueceu sua senha</p> 

                        <button type="button" className="btn bg-success text-white" id="entrar" onClick={handleSignIn}>Entrar</button>
                        <hr/>
                        <div className="d-flex flex-row align-self-center">
                            <button type="button" className="btn m-3 botaoface"><i className="bi-facebook" style={{fontSize:"20px"}}></i>Facebook</button>
                            <button type="button" className="btn m-3 botaogoogle"><i className="bi-google" style={{fontSize: "20px"}}></i>Google</button>
                        </div> 

                        <p className="align-self-center"><Link to="/cadastro" className="text-dark">Cadastre-se</Link></p>                      
                    </form>
                </div>
            </main>
    );
}




export default Login; 