import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Buffer } from 'buffer';
import { useSelector, useDispatch } from 'react-redux';

export default function CadastroUsuario() {
    window.Buffer = Buffer;
    const [itens, setItens] = useState([]);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();
    const [jogador, setJogador] = useState('');


    const [jogador1, setJogador1] = useState('');
    const [jogador2, setJogador2] = useState('');
    const [jogador3, setJogador3] = useState('');
    const [jogador4, setJogador4] = useState('');
    const [time, setTime] = useState('');
    const [pesquisarTime, setPesquisarTime] = useState('');
    const [resultado, setResultado] = useState(false);
    const [nenhumResultado, setNenhumResultado] = useState('Nenhum resultado encontrado');
    const [mostrarTime, setMostrarTime] = useState(false);
    let contador = 0
    let itensVar = []
    const [mostrarImagem, setMostrarImagem] = useState('');
    const [imagemBuscada, setImagemBuscada] = useState('');
    const [nome, setNome] = useState('');
    let token = JSON.parse(localStorage.getItem("keyToken"))
    const [getName, setGetName] = useState('');
    const exemplo = ['exemplo']
    const [text, setText] = useState('');

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
                .then(response => {
                    console.log("esta autenticado")
                })
                .catch((error) => {
                    if (error.response.data === 'não autenticado') {
                        navigate('/')
                    }
                });
        }
        setTimeout(autenticar, 5000);
    }, [])

    useEffect(() => {
        setText(JSON.parse(localStorage.getItem('idioma')))
    }, [])

    async function cadastrarTime() {

        await apiC.post("cadastrar/time", {
            "liga": liga,
            "time1": time1,
            "time2": time2,
            "time3": time3,
            "time4": time4,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('liga e times cadastrados')
                }
            })
            .catch((error) => {
                alert(error.response.data)
            });
    }

    async function buscarImagem() {

        await apiC.post("buscar/imagem", {
            "nome": nome,
        })
            .then(response => {
                if (response.status === 200) {
                    const imagePath = Buffer.from(response.data.result.data).toString();
                    setImagemBuscada(imagePath)
                }
            })
            .catch((error) => {
                console.log("error", error)
                // alert(error.response.data)

            });
    }


    async function cadastrarJogador() {

        await apiC.post("cadastrar/jogador", {
            "time": time,
            "jogador1": jogador1,
            "jogador2": jogador2,
            "jogador3": jogador3,
            "jogador4": jogador4,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Jogadores cadastrados')
                }
            })
            .catch((error) => {
                alert(error.response.data)

            });
    }

    async function pesquisaTime() {

        await apiC.post("cadastrar/pesquisar", {
            "time": pesquisarTime,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    inserirData(response.data.result)
                    if (response.data.result.length == 0) {
                        setResultado(true)
                        setMostrarTime(false)
                    } else {
                        setResultado(false)
                        setMostrarTime(true)
                    }

                }
            })
            .catch((error) => {

                alert(error.response.data)

            });
    }

    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    function inserirData(data) {
        itensVar = []
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }
            setItens(JSON.parse(JSON.stringify(itensVar)))
        }
    }

    const colunasTimes = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    function handleLerArquivo(files) {
        let reader = new FileReader();
        let format = files.name.replace(".jpg", "")
        setGetName(format)
        if (files.size <= 1048576 && files.type.split('/')[0] === "image" && files.type.split('/')[0] !== "gif" && files.type.split('/')[0] !== "psd") {
            reader.readAsDataURL(files);
            reader.onloadend = () => {
                handleAlterar(reader.result, format)
            }
        } else {
            if (files.size > 1048576) {
                alert('Erro tamanho de foto muito grande')
            } else {
                alert('Erro ao importar foto')
            }

        }
    };

    async function handleAlterar(novaImagem, nome) {
        await apiC.post('/inserir/imagem', {
            "imagem": novaImagem,
            "nome": nome,
        })
            .then(function (response) {
                setMostrarImagem(novaImagem)
                alert('foto registrada com sucesso')
            })
            .catch(function (error) {
                alert(error.response.data)
                console.log("erooooo", error)
            });
    }

    return (
        <>
            <div className='p-lado'>
                <div className='p-titulo'>

                    <Form.Control
                        onChange={e => { setJogador(e.target.value) }}
                        value={getName}
                        placeholder={text.buscar}
                        className='b-buscar'
                    />
                    <Button className="buscar">
                        <div>OK</div>
                    </Button>
                    <div className='separar'></div>
                    <di className='campo-buscar-corpo'></di>
                    <ul className="campo-select-listaa">
                        {exemplo}
                    </ul>
                </div>




                <di className='vertical'>

                    {mostrarImagem != '' ?
                        <img className="icone-perfil" src={mostrarImagem} />
                        :
                        <img className="icone-perfil" src="https://jazzaero.com.br/wp-content/uploads/2017/05/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg" alt="perfil" />
                    }
                    <Dropzone onDrop={acceptedFiles => handleLerArquivo(acceptedFiles[0])}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                  
                                        {/* <div>{text.importarFoto}</div> */}
                                        <div class="wrapper">
                                            <div class="link_wrapper">
                                                <a className='ae' href="#">Importar foto</a>

                                            </div>

                                        </div>
                                 
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <p className='pre'> Premium</p>
                    <p className='desd'> {text.desde} 20/12/2024</p>
                </di>
                <div className='cima'>
                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='labell'>{text.nome}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder={text.nome}
                                className='imput-1'
                            />
                        </div>

                        <div className='cima'>
                            <label className='labell'>{text.nascimento}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='00/00/0000'
                                className='imput-2'

                            />
                        </div>
                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.telefone}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='(00)00000-0000'
                                className='imput-3'
                            />
                        </div>

                        <div className='cima'>
                            <label className='label-2'>CPF</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='000.000.000-00'
                                className='imput-3'

                            />
                        </div>
                        <div className='cima'>
                            <label className='label-2'>RG/RNE</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='00.000.000.-0'
                                className='imput-3'

                            />
                        </div>
                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>e-mail</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='e-mail'
                                className='label-mais-larga'
                            />
                        </div>

                        <div className='cima'>
                            <label className='label-2'>Instagram</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='Instagram'
                                className='label-mais-larga'

                            />
                        </div>

                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.endereco}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder={text.endereco}
                                className='label-mais-larga'
                            />
                        </div>

                        <div className='cima'>
                            <label className='label-2'>CEP/ZIP</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder='CEP/ZIP'
                                className='label-mais-larga'

                            />
                        </div>
                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.cidade}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder={text.cidade}
                                className='label-mais-larga'
                            />
                        </div>

                        <div className='cima'>
                            <label className='label-2'>{text.pais}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder={text.pais}
                                className='label-mais-larga'

                            />
                        </div>
                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.observacoes}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder=''
                                className='imput-4'
                            />
                        </div>
                    </did>
                    <did className='lado-d'>
                        <Button className="botaoCadastro">
                            <div>Cadastrar</div>
                        </Button>
                        <Button className="botaoCadastro">
                            <div>Limpar</div>
                        </Button>


                    </did>


                </div>


            </div>


        </>


    )
}