import { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';

function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            const produtosIniciais = [
                {
                    id: 1,
                    nome: 'Notebook',
                    preco: 3500,
                    imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
                    descricao: 'Notebook para trabalho e estudos.'
                },
                {
                    id: 2,
                    nome: 'Smartphone',
                    preco: 1800,
                    imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
                    descricao: 'Smartphone moderno e eficiente.'
                },
                {
                    id: 3,
                    nome: 'Fone de Ouvido',
                    preco: 250,
                    imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
                    descricao: 'Fone de ouvido com ótima qualidade de som.'
                }
            ];

            setProdutos(produtosIniciais);
            setCarregando(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    function cadastrarProduto(event) {
        event.preventDefault();

        const novoProduto = {
            id: Date.now(),
            nome,
            preco: Number(preco),
            imagem: 'https://placehold.co/400x250?text=Novo+Produto',
            descricao
        };

        setProdutos((produtosAnteriores) => [
            ...produtosAnteriores,
            novoProduto
        ]);

        setNome('');
        setPreco('');
        setDescricao('');
    }

    return (
        <main className="container">
            <header className="cabecalho">
                <h1>Catálogo de Produtos</h1>
                <p>Cadastre e visualize seus produtos.</p>
            </header>
            <section className="formulario">
                <h2>Cadastrar Produto</h2>
                <form onSubmit={cadastrarProduto}>
                    <div className="campo">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            placeholder="Digite o nome do produto"
                            required
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="preco">Preço:</label>
                        <input
                            type="number"
                            id="preco"
                            value={preco}
                            onChange={(event) => setPreco(event.target.value)}
                            placeholder="Digite o preço"
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)}
                            placeholder="Descreva o produto"
                            required
                        />
                    </div>
                    <button type="submit" disabled={carregando}> Cadastrar Produto </button>
                </form>
            </section>
            <section className="listagem">
                <h2>Produtos cadastrados</h2>
                {carregando ? (
                    <p className="carregando"> Carregando produtos... </p>
                ) : (
                    <div className="produtos-grid">
                        {produtos.map((produto) => (
                            <ProdutoCard
                                key={produto.id}
                                nome={produto.nome}
                                preco={produto.preco}
                                imagem={produto.imagem}
                                descricao={produto.descricao}
                            />
                        ))}
                    </div>
                )}
            </section>

        </main>
    );
}

export default Produtos;