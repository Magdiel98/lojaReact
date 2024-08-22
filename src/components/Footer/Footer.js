import React from "react";
import '../css/components.css';
import { Link } from "react-router-dom";
import pagamento1 from '../../pages/Img/visa.png';
import pagamento2 from '../../pages/Img/mastercard.png';
import pagamento3 from '../../pages/Img/amex.png'; 
import pagamento4 from '../../pages/Img/diners.png';
import pagamento5 from '../../pages/Img/hipercard.png';
import pagamento6 from '../../pages/Img/jcb.png';
import pagamento7 from '../../pages/Img/elo.png';
import pagamento8 from '../../pages/Img/boleto.png'; 

function Footer(){
    return(
        <footer className="text-center"> {/*1*/}
            <div className="p-4 d-block"  style={{backgroundColor:"rgb(55, 152,184)"}}> {/*2*/}
                <p className="text-light">Receba novidades:</p> {/*3*/}
                <form className="d-flex justify-content-center"> {/*4*/}
                    <div className="input-group" style={{width:"30rem"}}> {/*5*/}
                        <input className="form-control form-control-sm" placeholder="E-mail"/> {/*6*/}
                        <button className="btn corfundobotao">Cadastrar</button> {/*7*/}
                    </div>
                </form>
                <p className="mt-3 text-light">Nossas Redes:</p> {/*8*/}
                <div> {/*9*/}
                    <a href="https://www.instagram.com/" target="_blank" className="link-dark"><i className="bi-whatsapp" style={{fontSize:"30px"}}></i></a> {/*10*/}
                    <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" className="link-dark"><i className="bi-facebook" style={{fontSize:"30px"}}></i></a> {/*11*/}
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" className="link-dark"><i className="bi-instagram" style={{fontSize:"30px"}}></i></a> {/*12*/}
                </div>

            </div>

            <div className="p-4 container" style={{display: "flex", flexDirection:"column"}}>{/*13*/}
                <span>Bela</span>{/*14*/}
                <div className="posicaof"> {/*15*/}
                    <div style={{display: "flex", flexDirection:"row"}}> {/*16*/}
                        <div className="p-3 m-lg-3 margemf"> {/*17*/}
                            <p className="negrito">Institucional</p> {/*18*/}
                            <p className="tamanho">Sobre a Empresa</p> {/*19*/}
                            <p className="tamanho">Seja um Lojista</p> {/*20*/}
                            <p className="tamanho">Seja um Representante</p> {/*21*/}
                        </div>

                        <div className="p-3 m-lg-3"> {/*22*/}
                            <p className="negrito">Atendimento</p> {/*23*/}
                            <p className="tamanho"><Link to="/faleconosco" className="link-dark" style={{textDecoration:"none"}}>Fale Conosco</Link></p> {/*24*/}
                            <p className="tamanho">Meus Pedidos</p> {/*25*/}
                            <p className="tamanho"><Link to="/conta" className="link-dark" style={{textDecoration:"none"}}>Minha Conta</Link></p> {/*26*/}
                        </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row"}}> {/*27*/}
                        <div className="p-3 m-lg-3"> {/*28*/}
                            <p className="negrito">Política de Privacidade</p> {/*29*/}
                            <p className="tamanho">Política de Privacidade</p> {/*30*/}
                        </div>

                        <div className="p-3 m-lg-3"> {/*31*/}
                            <p className="negrito" style={{marginRight:"2rem"}}>Formas de Pagamento</p> {/*32*/}
                            <div className="ordempagamento"> {/*33*/}
                                
                                <div className="centralizarpagamento"> {/*34*/}
                                    <img src={pagamento1} alt="visa" class="imgpagamento"/>{/*35*/}
                                </div>

                                <div className="centralizarpagmento"> {/*36*/}
                                    <img src={pagamento2} alt="visa" class="imgpagamento"/> {/*37*/}
                                </div>

                                <div className="centralizarpagamento"> {/*38*/}
                                    <img src={pagamento3} alt="visa" class="imgpagamento"/> {/*39*/}
                                </div>

                                <div className="centralizarpagamento"> {/*40*/}
                                    <img src={pagamento4} alt="visa" class="imgpagamento"/> {/*41*/}
                                </div> 

                            </div>

                            <div className="ordempagamento"> {/*42*/}

                                <div className="centralizarpagamento"> {/*43*/}
                                    <img src={pagamento5} alt="visa" class="imgpagamento"/> {/*44*/}
                                </div>

                                <div className="centralizarpagamento"> {/*45*/}
                                    <img src={pagamento6} alt="visa" class="imgpagamento"/> {/*46*/}
                                </div>

                                <div className="centralizarpagamento"> {/*47*/}
                                    <img src={pagamento7} alt="visa" class="imgpagamento"/> {/*48*/}
                                </div>

                                <div className="centralizarpagamento"> {/*49*/}
                                    <img src={pagamento8} alt="visa" class="imgpagamento"/>{/*50*/}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 cordefundo text-light"> {/*51*/}
                <span>Bela</span>  - Todos os direitos reservados. {/*52*/}
            </div>

     </footer>
    )
}


export default Footer; 