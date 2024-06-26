import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Buffer } from 'buffer';

export default function CadastrarFoto() {
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
                    const imagePath =  Buffer.from(response.data.result.data).toString();
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

    function handleLerArquivo(files){
        let reader = new FileReader();
        let format = files.name.replace(".jpg", "")
        setGetName(format)
        if (files.size <= 1048576 && files.type.split('/')[0] === "image" && files.type.split('/')[0] !== "gif" && files.type.split('/')[0] !== "psd"){
            reader.readAsDataURL(files);
            reader.onloadend = () => {
                handleAlterar(reader.result, format)
            }
        }else{
            if(files.size > 1048576 ){
                alert('Erro tamanho de foto muito grande')
            }else{
                alert('Erro ao importar foto')
            }
            
        }
    };

    async function handleAlterar(novaImagem, nome){
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
            console.log("erooooo",error )
        });
    }

    return (
        <>
    

            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            <h3>Envie uma foto do jogador</h3>
            <Form.Control
                onChange={e => { setJogador(getName) }}
                value={getName}
            />

            <Dropzone onDrop={acceptedFiles => handleLerArquivo(acceptedFiles[0])}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <Button className="">
                                            <div>Importar foto</div>
                                            </Button>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                            <h2>Foto registrada</h2>
                            {mostrarImagem != ''?
                                <img className="icone-perfil" src={mostrarImagem} />
                            :
                                <img className="icone-perfil" src="https://jazzaero.com.br/wp-content/uploads/2017/05/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg" alt="perfil" />
                            }

<h3>Escreva o nome do jogado abaixo para buscar a foto registrada</h3>
            <Form.Control
                onChange={e => { setNome(e.target.value) }}
                value={nome}
            />
            <Button className="btn-filtro-arquivo" onClick={(e) => buscarImagem()}>
                <div>Buscar</div>
            </Button>
            {imagemBuscada != '' ?
                                <img className="icone-perfil" src={imagemBuscada} />
                            :
                                <h5>nenhuma imagem encontrada</h5>
                            }
        </>
        

    )
}