import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function PontosTorneio() {
    const [nomeTorneio, setNomeTorneio] = useState('');
    const [pontos, setPontos] = useState('');
    const [paraAlterarAlgo, setParaAlterarAlgo] = useState(false);
    const [paraDeletarAlgo, setParaDeletarAlgo] = useState(false);
    const [novoNome, setNovoNome] = useState('');
    const [novoPontos, setNovoPontos] = useState(0);
    const [nomeParaAlterar, setNomeParaAlterar] = useState('');
    const [itens, setItens] = useState([]);
    const [idParaAlterar, setIdParaAlterar] = useState(0);
    let itensVar = []
    let contador = 0
    const navigate = useNavigate();


    useEffect(() => {
        async function listarTorneio(e) {
            await apiC.post("pontos_torneio/listar_torneio")
                .then(response => {
                    if (response.status === 200) {
                        inserirData(response.data)
                    }
                })
                .catch((error) => {
                });
        }
        listarTorneio()
    }, [])

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

    function inserirData(data) {

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

    function handleSelecionar(id, nome) {
        setIdParaAlterar(id)
        setNomeParaAlterar(nome)
    }

    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id, row.nome)
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" {...rest} />
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" {...rest} />
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };

    async function criarTorneio(e) {
        await apiC.post("pontos_torneio/criar_torneio", {
            "nome": nomeTorneio,
            "pontos": pontos
        }).then(response => {
            if (response.status === 200) {
                alert("torneio criado")
                location.reload()
            }
        })
            .catch((error) => {
                alert("erro, torneio não criado")
                console.log("erro ", error)
            });

    }


    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Nome
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            text: <p>
                ----------------
            </p>
        },
        {
            dataField: 'pontos',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Pontos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]


    async function alterarTorneio(e) {
        if (novoNome != '' && novoPontos != '') {
            await apiC.post("pontos_torneio/alterar_nome_pontos", {
                "id": idParaAlterar,
                "nome": novoNome,
                "pontos": novoPontos
            }).then(response => {
                if (response.status === 200) {
                    alert("nome e pontos alterados")
                    location.reload()
                }
            })
                .catch((error) => {
                    alert("erro, nome e pontos do torneio não alterados")
                    console.log("erro ", error)
                });
        } else if (novoNome != '' && novoPontos == '') {
            await apiC.post("pontos_torneio/alterar_nome", {
                "id": idParaAlterar,
                "nome": novoNome,
            }).then(response => {
                if (response.status === 200) {
                    alert("nome alterado")
                    location.reload()
                }
            })
                .catch((error) => {
                    alert("erro, nome do torneio não alterado")
                    console.log("erro ", error)
                });
        } else if (novoNome == '' && novoPontos != '') {
            await apiC.post("pontos_torneio/alterar_pontos", {
                "id": idParaAlterar,
                "pontos": novoPontos,
            }).then(response => {
                if (response.status === 200) {
                    alert("pontos alterados")
                    location.reload()
                }
            })
                .catch((error) => {
                    alert("erro, pontos do torneio não alterados")
                    console.log("erro ", error)
                });
        }
    }

    async function deletarTorneio(e) {
        await apiC.post("pontos_torneio/deletar", {
            "id": idParaAlterar,
        }).then(response => {
            if (response.status === 200) {
                alert("torneio deletado")
                location.reload()
            }
        })
            .catch((error) => {
                alert("erro, torneio  não deletado, verificar console de erro")
                console.log("erro ", error)
            });
    }

    return (

        <>

            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>

            <h1>Criar torneio</h1>


            <h2>Nome do torneio</h2>
            <Form.Control
                onChange={e => { setNomeTorneio(e.target.value) }}
                value={nomeTorneio}
            />
            <h2>Pontos do torneio</h2>
            <Form.Control
                onChange={e => { setPontos(e.target.value) }}
                value={pontos}
            />

            <Button onClick={(e) => criarTorneio()}>
                <div>Enviar</div>
                <div className="espaco4"></div>
            </Button>

            <Button  className="alterar" onClick={(e) => setParaAlterarAlgo(!paraAlterarAlgo)}>
                <div>Alterar nome ou pontos do torneio </div>
            </Button>

            <Button className="deletar" onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                <div>Deletar o torneio</div>
            </Button>

            {paraAlterarAlgo &&
                <h3> Digite abaixo o novo o nome ou pontos do torneio {nomeParaAlterar} ? </h3>
            }
            {paraAlterarAlgo &&
                <Form.Control
                    onChange={e => { setNovoNome(e.target.value) }}
                    value={novoNome}
                />
            }
            {paraAlterarAlgo &&
                <h2>Pontos do torneio</h2>
            }
            {paraAlterarAlgo &&
                <Form.Control
                    onChange={e => { setNovoPontos(e.target.value) }}
                    value={novoPontos}
                />
            }

            {paraAlterarAlgo &&
                <Button onClick={(e) => alterarTorneio()}>
                    <div>Enviar</div>
                    <div className="espaco4"></div>
                </Button>
            }

            {paraDeletarAlgo &&
                <h3> Realmente deseja deletar o torneio {nomeParaAlterar} ? </h3>
            }
            {paraDeletarAlgo &&

                <Button onClick={(e) => deletarTorneio()}>
                    <div>Sim</div>
                    <div className="espaco4"></div>
                </Button>
            }

            {paraDeletarAlgo &&
                <Button onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                    <div>Não</div>
                </Button>

            }

            <h2>Abaixo os torneio criados e seus pontos</h2>
            <div>
                <BootstrapTable
                    hover={true}
                    classes="tabela"
                    condensed={true}
                    keyField='id'
                    data={itens}
                    columns={colunas}
                    selectRow={selecaoLinhas}
                    bootstrap4={true}
                    bordered={false}
                />
            </div>



        </>

    )
}