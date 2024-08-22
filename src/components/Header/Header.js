import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/components.css';
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged , signOut } from "firebase/auth";


function Header()
{
    const location = useLocation();
    const currentPath = location.pathname;

    const isCadastroPage = currentPath === '/cadastro';
    const isLoginPage = currentPath === '/login';
    const isFalePage = currentPath === '/faleconosco'; 
    const isAtualizarPage = currentPath === '/atualizarconta';
    const isCompraPage = currentPath === '/compra'
    const isProdutoPage = currentPath === '/produtoacao'; 

    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isCompraVisible, setCompraVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();

    }, [auth]);

    const toggleLoginVisibility = () => {
        setLoginVisible(!isLoginVisible);
    };

    const toggleCompraVisibility = () => {
        setCompraVisible(!isCompraVisible); 
    };

    const handleLogout = ()  => {
        signOut(auth)
            .then(() => {
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("Erro ao deslogar:", error);
            });
    }

    return(
        <header className="cordefundo"> {/*1*/} 
            <nav className="navbar navbar-expand-sm navbar-expand-sm">  {/*2*/} 
                <div className="container d-flex justify-content-center coluna"> {/*3*/} 
                    <Link to="/" className="navbar-brand text-light">Bela</Link> {/*4*/} 

                    <button className="navbar-toggler p3 corfundohamburguer" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar"> {/*5*/}
                        <span className="navbar-toggler-icon"></span> {/*6*/}
                    </button>

                    <div className="d-flex displaynavegacao"> {/*7*/}
                        <div className="collapse navbar-collapse display-flex p3" id="menuNavbar">{/*8*/}
                            <div className="navbar-nav"> {/*9*/}
                                {!isCompraPage && !isFalePage && (
                                    <>
                                        <Link to="/categoria?nome=roupas" className="nav-link active text-light m-xxl-3">Roupas</Link> {/*10*/}
                                        <Link to="/categoria?nome=jeans" className="nav-link active text-light m-xxl-3">Jeans</Link> {/*11*/}
                                        <Link to="/categoria?nome=praia" className="nav-link active text-light m-xxl-3">Moda Praia</Link> {/*12*/}
                                        <Link to="/categoria?nome=fitness" className="nav-link active text-light m-xxl-3">Fitness</Link>  {/*13*/}
                                        <Link to="/categoria?nome=acessorios" className="nav-link active text-light m-xxl-3">Acessórios</Link> {/*14*/}
                                    </>
                                )}
                            </div> 
                        </div>
                        {!isCompraPage && !isFalePage &&(
                            <form action="" className="d-flex m-2 m-xl-5 p1"> {/*15*/}
                                <div className="input-group"> {/*16*/}
                                    <input type="search" name="" id="" className="form-control" placeholder="Buscar..."/> {/*17*/}
                                    <button type="submit" className="corfundobotao btn">Buscar</button> {/*18*/}
                                </div>
                            </form>
                        )}
                        {!isCompraPage && !isLoginPage && !isCadastroPage && !isAtualizarPage && !isFalePage && (
                            <div className="d-flex flex-column align-self-center h-25 justify-content-center p5" id="botoes"> {/*19*/}
                                <div className="d-flex align-self-center justify-content-center h-25"> {/*20*/}
                                    <div className="d-flex flex-column align-self-center h25" style={{position: "relative"}}> {/*21*/}
                                        <button type="button" className="btn rounded-circle shadow corfundologin" id="pessoa" onClick={toggleLoginVisibility}> {/*22*/}
                                            <i className="bi-person" style={{fontSize: "25px"}}/> {/*23*/}
                                        </button>
                                        {isLoginVisible && (
                                            <div style={{ position: "absolute", top: "100%", left: "0", zIndex: 1000 }}>
                                            {isLoggedIn ? (
                                                <div>
                                                    <div className="d-flex align-content-center justify-content-center rounded-2 mb-0" id="divlogin">
                                                        <button type="button" className="btn corfundobotao" id="conta">
                                                            <Link to="/conta" className="text-black text-decoration-none">Minha Conta</Link>
                                                        </button>
                                                    </div>
                                                    <div className="d-flex align-content-center justify-content-center rounded-top-2 mt-0" id="divconta">
                                                        <button type="button" className="btn corfundosair" id="sair" onClick={handleLogout} style={{width:"5rem"}}>Sair</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="d-flex align-content-center justify-content-center rounded-2 mb-2" id="divlogin">
                                                        <button type="button" className="btn w-100 corfundologin" id="login">
                                                            <Link to="/login" className="text-black text-decoration-none">Login</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        )}   
                                    </div>
                                    <div class="d-flex flex-column align-self-center h-25 m-5" style={{position:"relative"}}> {/*32*/}
                                        <button className="btn rounded-circle shadow corfundocadastro" id="sacola" onClick={toggleCompraVisibility}> {/*33*/}
                                            <i className="bi-handbag" style={{fontSize:"25px"}}></i> {/*34*/}
                                        </button>
                                        {isCompraVisible &&(
                                            <div className="d-flex align-content-center justify-content-center"> {/*35*/}
                                                <div className="rounded-2 shadow corfundosacola d-flex flex-column align-content-center justify-content-center" style={{position: "absolute"}} id="divsacola"> {/*36*/}
                                                    <span id="compras" className="align-self-center">Compras</span> {/*37*/}
                                                    <span className="d-flex flex-column" id="comprasimagem"> {/*38*/}
                                                    </span> 
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div> 
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}



export default Header; 