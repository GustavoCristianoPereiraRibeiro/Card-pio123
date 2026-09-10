function itemCardapio({ nome, descricao, preco }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
        }}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>{preco}</p>
        </div>
    );
}

export default itemCardapio;