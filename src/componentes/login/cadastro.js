import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

    const [itens, setItens] = useState([]);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();

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

    let token = JSON.parse(localStorage.getItem("keyToken"))

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
            .then(response => {
      console.log("esta autenticado")
            })
            .catch((error) => {
                if(error.response.data === 'não autenticado'){
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

    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/torneio')}>
                <div>Torneio</div>
            </Button>
            <h1>Cadastre a liga e os times desta liga</h1>
            <h3>Liga</h3>
            <Form.Control
                onChange={e => { setLiga(e.target.value) }}
                value={liga}
            />
            <h3>Time 1</h3>
            <Form.Control
                onChange={e => { setTime1(e.target.value) }}
                value={time1}
            />
            <h3>Time 2</h3>
            <Form.Control
                onChange={e => { setTime2(e.target.value) }}
                value={time2}
            />
            <h3>Time 3</h3>
            <Form.Control
                onChange={e => { setTime3(e.target.value) }}
                value={time3}
            />
            <h3>Time 4</h3>
            <Form.Control
                onChange={e => { setTime4(e.target.value) }}
                value={time4}
            />
            <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarTime()}>
                <div>Enviar</div>
            </Button>


            <h1>Cadastre os jogadores abaixo</h1>
            <h3>Time</h3>
            <Form.Control
                onChange={e => { setTime(e.target.value) }}
                value={time}
            />
            <h3>Jogador 1</h3>
            <Form.Control
                onChange={e => { setJogador1(e.target.value) }}
                value={jogador1}
            />
            <h3>Jogador 2</h3>
            <Form.Control
                onChange={e => { setJogador2(e.target.value) }}
                value={jogador2}
            />
            <h3>Jogador 3</h3>
            <Form.Control
                onChange={e => { setJogador3(e.target.value) }}
                value={jogador3}
            />
            <h3>Jogador 4</h3>
            <Form.Control
                onChange={e => { setJogador4(e.target.value) }}
                value={jogador4}
            />
            <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarJogador()}>
                <div>Enviar</div>
            </Button>



            <div className="ladoC">


                <h1>Pesquise aqui o time</h1>
                <Form.Control
                    onChange={e => { setPesquisarTime(e.target.value) }}
                    value={pesquisarTime}
                />
                <Button className="btn-filtro-arquivo" onClick={(e) => pesquisaTime()}>
                    <div>Pesquisar</div>
                </Button>

                {resultado &&
                    <div>
                        <h3>Nenhum resultado encontrado</h3>
                    </div>

                }

                {mostrarTime &&
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="tabela"
                            condensed={true}
                            keyField='id_time'
                            data={itens}
                            columns={colunasTimes}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>

                }

            </div>
        </>

    )
}