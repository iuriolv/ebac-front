
function ProdutoCard({ nome, preco, imagem, descricao }) {
    return (
        <div className="produto-card">
            <img src={imagem} alt={nome} />

            <div className="produto-card__conteudo">
                <h3>{nome}</h3>

                <p>{descricao}</p>

                <strong>
                    {Number(preco).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </strong>
            </div>
        </div>
    );
}

export default ProdutoCard;