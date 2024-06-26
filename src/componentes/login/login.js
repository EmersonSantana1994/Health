// PROJETO PARA DESAFIO DE TESTE

import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import SelectGrupo from '../login/selectGrupo'
import { useSelector, useDispatch } from 'react-redux';
import { exampleAction, idioma } from '../../actions/actions';
import en from '../../idioma/ingles.json';
import pt from '../../idioma/portugues.json';
import es from '../../idioma/espanhou.json';
import '../../css/login/stylesscss.scss'; // Importe seu arquivo SCSS aqui


export default function TelaLogin() {

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
    const [text, setText] = useState('');
    // const text = useSelector(state => state.reduxH.idioma);
    const dispatch = useDispatch();


    const [filtroGrupo, setFiltroGrupo] = useState('Selecione')
    const [resetGrupo, setResetGrupo] = useState(false)
    const [cdGrupo, setCdGrupo] = useState('')
    const [revelarSelectGrupo, setRevelarSelectGrupo] = useState(false)
    const [idIdioma, setIdIdioma] = useState('')

    

    let totalItens = 0
    let contador = 0
    let itensVar = []
    let contadorMale = 0
    let contadorFemale = 0


    const navigate = useNavigate();
    async function paraNavegar() {
        window.location.href = '/cadastroUsuario';
    }

    async function salvarToken(response) {
        localStorage.setItem("keyToken", JSON.stringify(response.data.token))

    }

    useEffect(() => {
        localStorage.setItem('idioma', JSON.stringify(pt));
        setText(JSON.parse(localStorage.getItem('idioma')))
    }, [])


    useEffect(() => {
        async function mudarIdioma() {

            if (idIdioma == 2) {
                localStorage.setItem('idioma', JSON.stringify(en));
                setText(JSON.parse(localStorage.getItem('idioma')))
            }else if(idIdioma == 1){
                localStorage.setItem('idioma', JSON.stringify(pt));
                setText(JSON.parse(localStorage.getItem('idioma')))
            }else if(idIdioma == 3){
                localStorage.setItem('idioma', JSON.stringify(es));
                setText(JSON.parse(localStorage.getItem('idioma')))
            }
            
        }

      

        mudarIdioma()
    }, [cdGrupo])


    //FUNÇÃO DE ENFETUAR O LOGIN
    async function efetuarLogin() {
        setLoginError("");
        setCarregando(true)
        if (!email || !password) {
            setLoginError("Preencha e-mail e senha!");
        } else {
            setCarregando(true)
            await apiC.post('usuarios/logar', {
                usuario: email,
                senha: password
            })
                .then(async function (response) {
                    await salvarToken(response)
                    await paraNavegar()
                })
                .catch(function (error) {
                    // MENSAGENS DE ERRO APARECERAM CASO LOGIN DER ALGUM ERRO
                    setCarregando(false)
                    setLoginError(true)
                });
        }
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

<p className='pp bodyy'>
  Bem vindo!
  <span>
  YOU UNIVERSITY
  </span>
  &mdash; Estamos aqui para te ajudar! &mdash;
</p>

            {mostrarRecuperarSenha === 'padrao' &&
                <>
                    <div>
                        <div className="email">
                            <Form.Control

                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                name="campoEmail"
                                id="campoEmail"
                                placeholder={text.email}
                                className="label-login"
                            />
                        </div>
                        <div className='espaco-11'></div>
                        <div>
                            <div className='senha'>
                                <FormControl

                                    placeholder={text.senha}
                                    className="label-login"
                                    type={mostrarEsconder}
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    name="campoSenha"
                                    id="campoSenha"
                                    maxLength="20"
                                />
                            </div>

                        </div>

                        <div>

                            <div className='senha'>
                                <div className="espaco-11" ></div>

                                <div className="coluna-alterar-ciclo-vida-1-status-grupo">
                                    <label className='idioma'>{text.idioma}</label>
                                    <div className="break-4"></div>
                                    <Form.Control placeholder="Idioma" name="GRUPO" type="text" value={filtroGrupo == 'Selecione' || resetGrupo ? '' : filtroGrupo} className="esconder label-login" onChange={(e) => setCdGrupo(e.target.value)} />
                                    {revelarSelectGrupo === false &&
                                        <Button disabled={revelarSelectGrupo !== '' && revelarSelectGrupo !== null && revelarSelectGrupo !== undefined ? false : true} className="campo-texto-cor-3 campo-select-filtro-8" onClick={() => setRevelarSelectGrupo(!revelarSelectGrupo)}>
                                            <div className="fonte-cor-1 label-campo campo-texto-select-tamanho-2">{resetGrupo ? "Selecione" : filtroGrupo.split('*')[0]}</div>
                                            <img className={revelarSelectGrupo ? "campo-select-icone-ativado nao-selecionavel" : "campo-select-icone-desativado-filtro-b nao-selecionavel"} />
                                        </Button>
                                    }
                                    {revelarSelectGrupo === true &&
                                        <SelectGrupo
                                            rota={"filtroSimcard"}
                                            setRevelarSelectGrupo={setRevelarSelectGrupo}
                                            setFiltroGrupo={setFiltroGrupo}
                                            setCdGrupo={setCdGrupo}
                                            setResetGrupo={setResetGrupo}
                                            nomeGrupo={filtroGrupo}
                                            setIdIdioma={setIdIdioma}
                                        >
                                        </SelectGrupo>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='senha'>
                        <Button
                            onClick={(e) => efetuarLogin()}
                            className='botao-entrar'
                        >{text.entrar}

                        </Button>
                    </div>
                    <div className="espaco-11" ></div>
                    <div className="campos-texto-login">
                        <div className='cadastrar'>
                            <Button onClick={(e) => navigate('/cadstrousuario')}
                                className='botao-cadastrar'
                            >{text.cadastrar}</Button>
                        </div>
                    </div>



                </>

            }
        </>

    )
}
