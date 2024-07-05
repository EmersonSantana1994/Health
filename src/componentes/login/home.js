import React, { useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();


    useEffect(() => {
        async function criarTabelas(e) {
            await apiC.post("criar/tabelas")
                .then(response => {
                    console.log("tabelas criadas")
                })
                .catch((error) => {
                    console.log("erro tabelas não criadas")
                });
        }
        criarTabelas()
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


    function redirecionar(code) {
        if (code == "1") {
            navigate('/torneio');
        } else if (code == "2") {
            navigate('/cadastro');
        } else if (code == "3") {
            navigate('/transferencia');
        } else if (code == "4") {
            navigate('/jogadores');
        } else if (code == "5") {
            navigate('/times');
        } else if (code == "6") {
            navigate('/ligas');
        } else if (code == "7") {
            navigate('/artilheiro');
        } else if (code == "8") {
            navigate('/rankingJogadores');
        } else if (code == "9") {
            navigate('/ranking');
        }

    }


    return (
        <>
            <h1>Toneio</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("1")}>
                <div>Toneio</div>
            </Button>
            <h1>Artilheiro do campeonato em disputa</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/artilheiroTorneio')}>
                <div>Artilheiro do campeonato em disputa</div>
            </Button>
            <h1>Copa</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/copa')}>
                <div>Copa</div>
            </Button>
            <h1>Super Copa</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/superCopa')}>
                <div>Super Copa</div>
            </Button>
            <h1>Tabela geral</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/tabelaGeral')}>
                <div>Tabela geral</div>
            </Button>

            <h1>Transferência</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("3")}>
                <div>Transferência</div>
            </Button>

            <h1>Jogadores Cadastrados</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("4")}>
                <div>Jogadores Cadastrados</div>
            </Button>

            <h1>Times Cadastrados</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("5")}>
                <div>Times Cadastrados</div>
            </Button>

            <h1>Ligas Cadastrados</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("6")}>
                <div>Ligas Cadastrados</div>
            </Button>
            <h1>Artilheiro da temporada</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("7")}>
                <div>Artilheiro</div>
            </Button>

            <h1>Ranking Jogadores</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("8")}>
                <div>Ranking Jogadores</div>
            </Button>

            <h1>Ranking Clubes</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("9")}>
                <div>Ranking Clubes</div>
            </Button>
            <h1>Cadastro</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => redirecionar("2")}>
                <div>Cadastro</div>
            </Button>



            <h1>Cadastrar Pontos do Torneio</h1>

            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/pontosTorneio')}>
                <div>Cadastrar Pontos do Torneio</div>
            </Button>

            <h1>Cadastrar foto</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/cadastrarFoto')}>
                <div>Cadastrar foto</div>
            </Button>
            <h1>Alterar dono do time</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/dono')}>
                <div>Alterar dono do time</div>
            </Button>
            <h1>Donos dos times</h1>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/listarDono')}>
                <div>Donos dos times</div>
            </Button>
            
        </>


    )
}