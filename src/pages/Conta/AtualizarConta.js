import React, {useState} from "react";
import "../../components/css/components.css";
import { useNavigate} from "react-router-dom";
import { auth } from "../../firebaseConfig";

//Colocar função onblur
//Usar o useState para atribuir valores à variáveis e enviar para o banco de dados.

function AtualizarConta()
{

    const navigate = useNavigate();
    const uid = auth.currentUser.uid;

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        nascimento: '',
        email: '',
        senha: '',
        cpf: '',
        telefone: '',
        celular: '',
        rua: '',
        numero: '',
        complemento: '',
        referencia: '',
        bairro: ''
    });

    const handleInputChange= (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value 
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData
        }));
    };

    const atualizarUsuario = () => {
        if (!uid) {
            console.error("UID do usuário não fornecido!");
            return;
        }


        const dataToUpdate = { ...formData };
        // Se o campo de foto estiver preenchido, você pode lidar com o upload da imagem aqui.

        fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/usuario/${uid}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToUpdate)
        })
            .then(() => {
                console.log("Dados atualizados com sucesso!");
                navigate('/conta');
            })
            .catch(error => {
                console.error("Erro ao atualizar dados:", error);
            });
    };


    /*
    function atualizarUsuario()
    {
        alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
        fetch(`https://lojareact-7a7e1-default-rtdb.firebaseio.com/usuario.json`, {
            method:'PATCH', 
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
    */

    return(
        <main className="container py-5">
            <div className="d-flex flex-column p-5 border rounded-3 shadow bg-body-secondary">
                <h2>Atualizar Conta</h2>
                <hr/>
                <form>
                    <div className="row mb-3 g-3">

                        <div className="col-6">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control shadow" name="nome" id="nome" placeholder="Digite seu Nome" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                            <input type="text" className="form-control shadow" name="sobrenome" id="sobrenome" placeholder="Digite seu Sobrenome" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="sexo" className="form-label">Sexo</label>
                            <select name="sexo" id="sexo" className="form-select shadow" onChange={handleInputChange}>
                                <option disabled selected hidden>Escolha o Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="col-6">
                            <label htmlFor="nascimento" className="form-label">Data de Nascimento</label>
                            <input type="date" className="form-control shadow" name="nascimento" id="nascimento" placeholder="Data de Nascimento" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control shadow" name="senha" id="senha" placeholder="Digite sua Senha" onChange={handleInputChange}/>
                        </div>

                        <div id="divsenhaconfirm" className="col-6">
                            <label htmlFor="confirmarsenha" className="form-label">Confirmar Senha</label>
                            <input type="password" className="form-control shadow" id="confirmarsenha" placeholder="Confirme sua Senha" />
                        </div>

                        <div className="col-6 mt-5">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text" className="form-control shadow" name="cpf" id="cpf" placeholder="Digite seu CPF" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6"></div>

                        <div className="col-6 mt-5">
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                            <input type="text" className="form-control shadow"name="telefone" id="telefone" placeholder="Digite seu Telefone" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6 mt-5">
                            <label htmlFor="celular" className="form-label">Celular</label>
                            <input type="text" className="form-control shadow" name="celular" id="celular" placeholder="Digite seu Celular" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6 mt-5">
                            <label htmlFor="rua" className="form-label">Rua</label>
                            <input type="text" className="form-control shadow" name="rua" id="rua" placeholder="Digite a Rua" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6"></div>

                        <div className="col-2">
                            <label htmlFor="numero" className="form-label">Número</label>
                            <input type="number" className="form-control shadow" name="numero" id="numero" placeholder="Digite o Número" onChange={handleInputChange}/>
                        </div>

                        <div>
                            <input type="checkbox" name="semnumero" id="semnumero" className="form-check-input shadow"/>
                            <label htmlFor="semnumero" className="form-label">Sem Número</label>
                        </div>

                        <div className="col-6">
                            <label htmlFor="complemento" className="form-label">Complemento</label>
                            <input type="text" className="form-control shadow" name="complemento" id="complemento" placeholder="Digite o Complemento" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="referencia" className="form-label">Referência</label>
                            <input type="text" className="form-control shadow" name="referencia" id="referencia" placeholder="Digite a Referência" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="bairro" className="form-label">Bairros</label>
                            <input type="text" className="form-control shadow" name="bairro" id="bairro" placeholder="Digite o Bairro" onChange={handleInputChange}/>
                        </div>

                        <div className="col-6">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select name="estado" id="estado" class="form-select shadow" onChange={handleInputChange}>
                            <option value="" disabled selected hidden>Escolha o Estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>

                    <div className="col-6">
                        <label htmlFor="foto" className="form-label">Imagem</label>
                        <input type="file" id="foto" name="foto" accept="image/*" className="form-select shadow" onChange={handleFileChange}/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn bg-success text-white mt-5 shadow w-25" id="cadastrar" onClick={atualizarUsuario}>Atualizar</button>
                    </div>

                    </div>
                </form>
            </div>
        </main>
    )
}

export default AtualizarConta; 