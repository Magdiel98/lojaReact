import React, { useState} from 'react';
import { auth } from '../../firebaseConfig'; 
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function Cadastro(){
    
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        sexo: '',
        nascimento: '',
        email: '',
        cpf: '',
        telefone: '',
        celular: '',
        rua: '',
        numero: '',
        complemento: '',
        referencia: '',
        bairro: '',
        estado: ''
    });

    const handleInputChange= (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value 
        }));
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    function handleSignOut(e)
    {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigate("/login");
            })
            .catch((err) => {
                console.error(err);
            });
    }


    const handleChangeEmail = (e) => {
        handleInputChange(e);
        setEmail(e.target.value);
    };


    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    //Criar uma função para enviar dados para o banco de dados 
    function cadastrarUsuario()
    {

        alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);

        fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/usuario.json`, {
            method:'POST', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(() => {
            console.log("Tudo ok!");
        })    
        .catch(error => {
            console.error("Deu errado!");
        })
    }

    return(
        <main className="container py-5">
        <div className="d-flex flex-column p-5 border rounded-3 shadow bg-body-secondary">
            <h2>Cadastro</h2>
            <hr/>
            <form>
                <div className="row mb-3 g-3">

                    <div className="col-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control shadow" name='nome' id="nome" placeholder="Digite seu Nome" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control shadow" name='sobrenome' id="sobrenome" placeholder="Digite seu Sobrenome" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">
                        <label htmlFor="sexo" className="form-label">Sexo</label>
                        <select name="sexo" id="sexo" className="form-select shadow" onChange={handleInputChange}>
                            <option value="" disabled selected hidden>Escolha o Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>

                    <div className="col-6">
                        <label htmlFor="nascimento" className="form-label">Data de Nascimento</label>
                        <input type="date" className="form-control shadow" name='nascimento' id="nascimento" placeholder="Data de Nascimento" onChange={handleInputChange}/>
                    </div>

                    <div id="divemail" className="col-6 mt-5">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control shadow" name='email' id="email" placeholder="Digite seu E-mail" onblur="validacaoEmail()" onChange={handleChangeEmail}/>
                    </div>

                    <div id="divemailconfirm" className="col-6 mt-5">
                        <label htmlFor="confirmaremail" className="form-label">Confirmar Email</label>
                        <input type="email" className="form-control shadow" id="confirmaremail" placeholder="Confirme seu E-mail" onblur="validacaoEmail()"/>
                    </div>

                    <div class="col-6">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input type="password" className="form-control shadow" name='senha' id="senha" placeholder="Digite sua Senha" onblur="validacaoPassword()" onChange={handleChangePassword}/>
                    </div>

            
                    <div id="divsenhaconfirm" className="col-6">
                        <label htmlFor="confirmarsenha" className="form-label">Confirmar Senha</label>
                        <input type="password" className="form-control shadow" id="confirmarsenha" placeholder="Confirme sua Senha" onblur="validacaoPassword(), impressaoPassword()"/>
                    </div>

                    <div className="col-6 mt-5">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input type="text" className="form-control shadow" name='cpf' id="cpf" placeholder="Digite seu CPF" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">

                    </div>

                    <div className="col-6 mt-5">
                        <label for="telefone" className="form-label">Telefone</label>
                        <input type="text" className="form-control shadow" name='telefone' id="telefone" placeholder="Digite seu Telefone" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6 mt-5">
                        <label for="celular" className="form-label">Celular</label>
                        <input type="text" className="form-control shadow" name='celular' id="celular" placeholder="Digite seu Celular" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6 mt-5">
                        <label for="rua" className="form-label">Rua</label>
                        <input type="text" className="form-control shadow" name='rua' id="rua" placeholder="Digite a Rua" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6"></div>

                    <div className="col-2">
                        <label for="numero" className="form-label">Número</label>
                        <input type="number" className="form-control shadow" name='numero' id="numero" placeholder="Digite o Número" onChange={handleInputChange}/>
                    </div>


                    <div>
                        <input type="checkbox" name="semnumero" id="semnumero" className="form-check-input shadow"/>
                        <label for="semnumero" className="form-label">Sem Número</label>
                    </div>

                    <div className="col-6">
                        <label for="complemento" className="form-label">Complemento</label>
                        <input type="text" className="form-control shadow" name='complemento' id="complemento" placeholder="Digite o Complemento" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">
                        <label for="referencia" className="form-label">Referência</label>
                        <input type="text" className="form-control shadow" name='referencia' id="referencia" placeholder="Digite a Referência" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">
                        <label for="bairro" className="form-label">Bairro</label>
                        <input type="text" className="form-control shadow" name='bairro' id="bairro" placeholder="Digite o Bairro" onChange={handleInputChange}/>
                    </div>

                    <div className="col-6">
                        <label for="estado" className="form-label">Estado</label>
                        <select name="estado" id="estado" className="form-select shadow" onChange={handleInputChange}>
                            <option value="" disabled selected hidden>Escolha o Estado</option>
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                        </select>
                    </div>

                    <div className="col-6">
                        <label for="foto" className="form-label">Imagem</label>
                        <input type="file" id="foto" name="foto" accept="image/*" className="form-select shadow"/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn bg-success text-white mt-5 shadow w-25" id="cadastrar" onClick={(e) => {cadastrarUsuario(); handleSignOut(e);}}>Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
    );
}

export default Cadastro; 
