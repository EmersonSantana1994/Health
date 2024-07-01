// PROJETO PARA DESAFIO DE TESTE

import React, { useState } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function TelaCadastro() {

    //VARIAVEIS
    const [mostrarRecuperarSenha, setMostrarRecuperarSenha] = useState('padrao');
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailCadastro, setEmailCadastro] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCadastro, setPasswordCadastro] = useState('');
    const [mostrarEsconder, setMostrarEsconder] = useState("password");
    const [mostrarUploadCsv, setMostrarUploadCsv] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erroAoCadastrar, setErroAoCadastrar] = useState(false);
    const [nomeArquivo, setNomeArquivo] = useState('');
    const [arquivo, setArquivo] = useState('');
    const [mostrarTabela, setMostrarTabela] = useState(false);
    const [itens, setItens] = useState([]);
    const [contMen, setContMen] = useState([]);
    const [contFem, setContFem] = useState([]);
    const [medIdade, setMedIdade] = useState([]);

    let totalItens = 0
    let contador = 0
    let itensVar = []
    let contadorMale = 0
    let contadorFemale = 0

    const navigate = useNavigate();
    const paraNavegar = () => {
        navigate('/home')
    }


    //FUNÇÃO DE CADASTRO
    async function efetuarCadastro(e) {
        // API CADASTRO
        setCarregando(true)
        await apiC.post('usuarios/cadastrar', {
            "usuario": emailCadastro,
            "senha": passwordCadastro
        })
            .then(async function (response) {
                setCarregando(false)
                setErroAoCadastrar(false)
            })
            .catch(function (error) {
                console.log("error", error)
                // CASO ACONTEÇA ALGUM ERRO SERÁ APRESENTADA
                setCarregando(false)
                setErroAoCadastrar(true)
            });
    }



    return (
        <>
            {carregando &&
                <h1>carregando..</h1>
            }
            {erroAoCadastrar &&
                <h4>Erro ao cadastrar</h4>
            }
            {loginError &&
                <h4> E-mail inválido ou senha incorreta </h4>
            }
            
            <div>
                        <Button onClick={(e) => navigate('/')}>Login</Button>
                    </div>
        
                <>
                    
                    <div className="espaco" ></div>
                    <div className="campos-texto-login">
                        <div>
                            <label>Cadastrar e-mail</label>
                            <Form.Control

                                type="email"
                                placeholder="E-mail"
                                onChange={e => setEmailCadastro(e.target.value)}
                                value={emailCadastro}
                                name="cadastrarEmail"
                                id="cadastrarEmail"
                            />
                          
                        </div>

                        <div>
                            <div>
                                <label> Cadastrar senha</label>
                                <FormControl

                                    placeholder="Senha"
                                    type={mostrarEsconder}
                                    onChange={e => setPasswordCadastro(e.target.value)}
                                    value={passwordCadastro}
                                    name="cadastrarSenha"
                                    id="cadastrarSenha"
                                    maxLength="20"
                                />
                            </div>
                           
                        </div>
                    </div>

                    <div>
                        <Button onClick={(e) => efetuarCadastro('/')}>Cadastrar</Button>
                    </div>
                    
                </>

          

        </>

    )
}