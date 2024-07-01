import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function TimesCadastrados() {

    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [itens3, setItens3] = useState([]);
    const [itens4, setItens4] = useState([]);
    const [itens5, setItens5] = useState([]);
    const [itens6, setItens6] = useState([]);
    const [itens7, setItens7] = useState([]);
    const [itens8, setItens8] = useState([]);
    const [itens9, setItens9] = useState([]);
    const [itens10, setItens10] = useState([]);
    const [itens11, setItens11] = useState([]);
    const [itens12, setItens12] = useState([]);
    const [itens13, setItens13] = useState([]);
    const [itens14, setItens14] = useState([]);
    const [itens15, setItens15] = useState([]);
    const [itens16, setItens16] = useState([]);

    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [time5, setTime5] = useState('');
    const [time6, setTime6] = useState('');
    const [time7, setTime7] = useState('');
    const [time8, setTime8] = useState('');
    const [time9, setTime9] = useState('');
    const [time10, setTime10] = useState('');
    const [time11, setTime11] = useState('');
    const [time12, setTime12] = useState('');
    const [time13, setTime13] = useState('');
    const [time14, setTime14] = useState('');
    const [time15, setTime15] = useState('');
    const [time16, setTime16] = useState('');
    const [nomeParaAlterar, setNomeParaAlterar] = useState('');
    const [idParaAlterar, setIdParaAlterar] = useState(0);
    const [paraAlterarAlgo, setParaAlterarAlgo] = useState(false);
    const [novoNome, setNovoNome] = useState('');
    const [paraDeletarAlgo, setParaDeletarAlgo] = useState(false);
    const navigate = useNavigate();

    let contador = 0
    let itensVar = []
    let itensVar2 = []
    let itensVar3 = []
    let itensVar4 = []
    let itensVar5 = []
    let itensVar6 = []
    let itensVar7 = []
    let itensVar8 = []
    let itensVar9 = []
    let itensVar10 = []
    let itensVar11= []
    let itensVar12 = []
    let itensVar13 = []
    let itensVar14 = []
    let itensVar15 = []
    let itensVar16 = []
    let token = JSON.parse(localStorage.getItem("keyToken"))
    let dadosSelecionados = []

    function handleSelecionar(id, nome) {
                setIdParaAlterar(id)
                setNomeParaAlterar(nome)
    }


    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id_jogador, row.nome)
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

    function handleSelecionarTodos() {
        // itens.map((item, i) => {
        //     if (itens[i].id) {
        //         dadosSelecionados.push(itens[i].id);
        //         dadosSelecionadosSorteados.push(itens[i].nome);
        //     }
        // })
    }


    function handleDesselecionarTodos() {
    }

    useEffect(() => {
        async function buscarTimes(e) {
            await apiC.post("listar/time", {
                headers: {
                    'x-access-token': token,
                }
            })
                .then(response => {
                    setTime1(response.data[0].nome)
                    setTime2(response.data[1].nome)
                    setTime3(response.data[2].nome)
                    setTime4(response.data[3].nome)
                    setTime5(response.data[4].nome)
                    setTime6(response.data[5].nome)
                    setTime7(response.data[6].nome)
                    setTime8(response.data[7].nome)
                    setTime9(response.data[8].nome)
                    setTime10(response.data[9].nome)
                    setTime11(response.data[10].nome)
                    setTime12(response.data[11].nome)
                    setTime13(response.data[12].nome)
                    setTime14(response.data[13].nome)
                    setTime15(response.data[14].nome)
                    setTime16(response.data[15].nome)
                    if (response.status === 200) {
                        async function times() {
                            await apiC.post("listar/jogadores", {
                                time: response.data[0].nome,
                                headers: {
                                    'x-access-token': token,
                                }
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "1")
                                    }
                                })
                                .catch((error) => {
                                });

                            await apiC.post("listar/jogadores", {
                                time: response.data[1].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        console.log("response.data", response.data)
                                        inserirData(response.data, "2")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[2].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "3")
                                    }
                                })
                                .catch((error) => {
                                });

                            await apiC.post("listar/jogadores", {
                                time: response.data[3].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "4")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[4].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "5")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[5].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "6")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[6].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "7")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[7].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "8")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[8].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "9")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[9].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "10")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[10].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "11")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[11].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "12")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[12].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "13")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[13].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "14")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[14].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "15")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[15].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "16")
                                    }
                                })
                                .catch((error) => {
                                });
                        } times()

                    }
                })
                .catch((error) => {
                });
        }
        buscarTimes()
    }, [])



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data, time) {
        for (let i = 0; i < data.length; i++) {
         
                if (time == "1") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar[k] = data[j]
                            k++
                        }
                    }
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "2") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar2[k] = data[j]
                            k++
                        }
                    }
                    setItens2(JSON.parse(JSON.stringify(itensVar2)))
                } 
                else if (time == "3") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar3[k] = data[j]
                            k++
                        }
                    }
                    setItens3(JSON.parse(JSON.stringify(itensVar3)))
                } else if (time == "4") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar4[k] = data[j]
                            k++
                        }
                    }
                    setItens4(JSON.parse(JSON.stringify(itensVar4)))
                } else if (time == "5") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar5[k] = data[j]
                            k++
                        }
                    }
                    setItens5(JSON.parse(JSON.stringify(itensVar5)))
                } else if (time == "6") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar6[k] = data[j]
                            k++
                        }
                    }
                    setItens6(JSON.parse(JSON.stringify(itensVar6)))
                } else if (time == "7") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar7[k] = data[j]
                            k++
                        }
                    }
                    setItens7(JSON.parse(JSON.stringify(itensVar7)))
                } else if (time == "8") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar8[k] = data[j]
                            k++
                        }
                    }
                    setItens8(JSON.parse(JSON.stringify(itensVar8)))
                } else if (time == "9") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar9[k] = data[j]
                            k++
                        }
                    }
                    setItens9(JSON.parse(JSON.stringify(itensVar9)))
                } else if (time == "10") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar10[k] = data[j]
                            k++
                        }
                    }
                    setItens10(JSON.parse(JSON.stringify(itensVar10)))
                } else if (time == "11") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar11[k] = data[j]
                            k++
                        }
                    }
                    setItens11(JSON.parse(JSON.stringify(itensVar11)))
                } else if (time == "12") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar12[k] = data[j]
                            k++
                        }
                    }
                    setItens12(JSON.parse(JSON.stringify(itensVar12)))
                } else if (time == "13") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar13[k] = data[j]
                            k++
                        }
                    }
                    setItens13(JSON.parse(JSON.stringify(itensVar13)))
                } else if (time == "14") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar14[k] = data[j]
                            k++
                        }
                    }
                    setItens14(JSON.parse(JSON.stringify(itensVar14)))
                } else if (time == "15") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar15[k] = data[j]
                            k++
                        }
                    }
                    setItens15(JSON.parse(JSON.stringify(itensVar15)))
                } else if (time == "16") {
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar16[k] = data[j]
                            k++
                        }
                    }
                    setItens16(JSON.parse(JSON.stringify(itensVar16)))
                }

           


        }

    }

    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
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

    async function alterarNome() {
        await apiC.post("cadastrar/alterarNome", {
            "id": idParaAlterar,
            "nome": novoNome,
            headers: {
                'x-access-token': token,
            }
        }).then(response => {
            if (response.status === 200) {
                alert("nome alterado")
                location.reload()
            }
        })
        .catch((error) => {
            alert("erro, nome não alterado, verificar console de erro")
            console.log("erro ",error)
        });
    }

    async function deletarNome() {
        await apiC.post("cadastrar/deletarNome", {
            "id": idParaAlterar,
            headers: {
                'x-access-token': token,
            }
        }).then(response => {
            if (response.status === 200) {
                alert("jogador deletado")
                location.reload()
            }
        })
        .catch((error) => {
            alert("erro, jogador não deletado, verificar console de erro")
            console.log("erro ",error)
        });

    }

    return (

        <>
   <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
        
{paraDeletarAlgo &&
                    <h3> Realmente deseja deletar o jogador {nomeParaAlterar} ? </h3>

                }

{paraDeletarAlgo &&
                
<Button onClick={(e) => deletarNome()}>
<div>Sim</div>
<div className="espaco4"></div>
</Button>
            }

{paraDeletarAlgo &&
                <Button onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                <div>Não</div>
                </Button>

            }

{paraAlterarAlgo &&
<h3> Deseja alterar {nomeParaAlterar} para qual nome? </h3>
}

{paraAlterarAlgo &&
  <Form.Control
  onChange={e => { setNovoNome(e.target.value) }}
  value={novoNome}
/>
}
           {paraAlterarAlgo &&
<Button onClick={(e) => alterarNome()}>
<div>Enviar</div>
<div className="espaco4"></div>
</Button>
           }  

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div>
             <Button onClick={(e) => setParaAlterarAlgo(!paraAlterarAlgo)}>
                    <div>Alterar nome do jogador</div>
                </Button>
                 <div className="espaco4"></div>
                <Button onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                    <div>Deletar jogador</div>
                </Button>
                <div className="espaco4"></div>
            </div>
             
            <div className="lado">

                <div>
                    <h3>{time1}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens}
                        columns={colunas}
                        selectRow={selecaoLinhas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time2}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens2}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time3}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens3}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time4}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens4}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
               

            </div>
            <div className="espaco2"></div>
            <div className="lado"> 
            <div>
                    <h3>{time5}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens5}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time6}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens6}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time7}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens7}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time8}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens8}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
            </div>
            <div className="espaco2"></div>
            <div className="lado"> 
            <div>
                    <h3>{time9}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens9}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time10}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens10}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time11}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens11}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time12}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens12}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
            
            </div>
            <div className="espaco2"></div>
            <div className="lado">
                
            <div>
                    <h3>{time13}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens13}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time14}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens14}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time15}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens15}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time16}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens16}
                        selectRow={selecaoLinhas}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div> 
                 </div>
               

               

        </>

    )

}