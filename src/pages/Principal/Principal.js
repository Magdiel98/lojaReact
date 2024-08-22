import React from 'react'
import './css/Principal.css'
import '../../components/css/components.css'
import { Link } from 'react-router-dom';

import acessorio1 from '../Img/acessorios/acessorio1-2.jpg';
import acessorio2 from '../Img/acessorios/acessorio2-2.jpg';
import acessorio3 from '../Img/acessorios/acessorio3-2.jpg';
import acessorio4 from '../Img/acessorios/acessorio4-2.jpg';
import acessorio5 from '../Img/acessorios/acessorio5-2.jpg';

import fitness1 from '../Img/fitness/fitness1-2.jpg';
import fitness2 from '../Img/fitness/fitness2-2.jpg';
import fitness3 from '../Img/fitness/fitness3-2.jpg';
import fitness4 from '../Img/fitness/fitness4-2.jpg';
import fitness5 from '../Img/fitness/fitness5-2.jpg'; 

import roupas1 from '../Img/roupas/roupas1-2.jpg';
import roupas2 from '../Img/roupas/roupas2-2.jpg';
import roupas3 from '../Img/roupas/roupas3-2.jpg';
import roupas4 from '../Img/roupas/roupas4-2.jpg';
import roupas5 from '../Img/roupas/roupas5-2.jpg';


import praia1 from '../Img/praia/praia1-2.jpg';

import jeans1 from '../Img/jeans/jeans1-2.jpg';

function Principal(){
    return(
        <main className="d-flex flex-column align-content-center justify-content-center container py-5 mb-5">
            
            <div className='row row-cols-xl-2 row-cols-1 g-3'>
                <div className='col'>
                    <div className='card-body'>
                        <Link to="/categoria">
                            <img src={acessorio1} className='card-img rounded shadow' alt=''></img>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-body'>
                        <Link to="/categoria">
                            <img src={acessorio2} className='card-img rounded shadow' alt=''></img>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column mt-5'>
                <h1>Categorias</h1>
                <div className='d-flex justify-content-center align-content-center row row-cols-md-3 row-cols-xl-5 row-cols-2 g-3'>
                    <div className='col'>
                        <Link to="/categoria" className='text-decoration-none' href='#'>
                            <div className='card text-bg-secondary'>
                                <h5 className='card-title'><span className='letra'>ROUPAS</span></h5>
                                <img className='estruturaimagem' src={roupas1}/>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/categoria" className='text-decoration-none' href='#'>
                            <div className='card text-bg-secondary'>
                                <h5 className='card-title'><span className='letra'>JEANS</span></h5>
                                <img className='estruturaimagem' src={jeans1}/>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/categoria" className='text-decoration-none' href='#'>
                            <div className='card text-bg-secondary'>
                                <h5 className='card-title'><span className='letra'>MODA PRAIA</span></h5>
                                <img className='estruturaimagem' src={praia1}/>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/categoria" className='text-decoration-none' href='#'>
                            <div className='card text-bg-secondary'>
                                <h5 className='card-title'><span className='letra'>FITNESS</span></h5>
                                <img className='estruturaimagem' src={fitness1}/>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/categoria" className='text-decoration-none' href='#'>
                            <div className='card text-bg-secondary'>
                                <h5 className='card-title'><span className='letra'>ACESSÓRIOS</span></h5>
                                <img className='estruturaimagem' src={acessorio1}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-content-center flex-column mt-5 mb-5'>

                <h1>Looks</h1>
                    <div className='d-flex justify-content-center align-content-center row row-cols-xl-4 row-cols-2 g-3'>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={acessorio1}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={acessorio2}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={acessorio3}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={acessorio4}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={fitness1}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={fitness2}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={fitness3}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={fitness4}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={roupas1}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={roupas2}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={roupas3}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link to="/categoria" className='text-decoration-none' href='#'>
                                <div className='card text-bg-secondary'>
                                    <img className='estruturaimagem' src={roupas4}/>
                                    <h6 className='card-title'><span className='letra'>NOME</span></h6>
                                    <span style={{fontWeight: "bold"}}>PREÇO</span>
                                    <span>PARCELADO</span>
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>

            <div className='row row-cols-xl-2 row-cols-1 g-3'>
                <div className='col'>
                    <div className='card-body'>
                        <Link to="/categoria">
                            <img src={fitness4} className='card-img rounded shadow'/>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-body'>
                        <Link to="/categoria">
                            <img src={roupas5} className='card-img rounded shadow'/>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Principal; 