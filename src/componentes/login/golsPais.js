import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';


export default function GolsPais() {
    window.Buffer = Buffer;
    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const navigate = useNavigate();
    const [aviso, setAviso] = useState(false);
    const [tabela, setTabela] = useState(false);



    let contador = 0
    let itensVar = []
    let token = JSON.parse(localStorage.getItem("keyToken"))
    let dadosSelecionados = []



    useEffect(() => {

        async function buscarTodos(e) {
            setAviso(true)
            await apiC.post("listar/gols_pais", {
            })
                .then(response => {
                    if (response.status === 200) {
                        setAviso(false)
                        inserirData(response.data)
                    }
                })
                .catch((error) => {
                    alert(error.response.data)

                });

        }
        buscarTodos()
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



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
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

   


    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)

    const colunas = [
        {
            dataField: 'Gols',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Pais',
            headerClasses: 'selecionavel',
            sort: true,
            text: <p>
                Pais
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

  

    


    return (

        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/tabelaGeral')}>
                <div>Tabela geral</div>
            </Button>


            <div className="lado"></div>

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            {aviso &&
                <h1>Carregando tabela...</h1>
            }
           
          
                
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="table table-striped thead-light"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                    <div className="espaco2"></div>
                
            


        </>

    )

}