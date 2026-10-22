const API_URL = "https://crudcrud.com/api/cf10dd3869444f9aa4bd7bbe76b3c4cc/clientes";
const listaClientes = document.getElementById("lista-clientes");
const formCliente = document.getElementById("form-cliente");

async function listarClientes() {
    try {
        const resposta = await fetch(API_URL);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar clientes.");
        }

        const clientes = await resposta.json();

        listaClientes.innerHTML = "";

        clientes.forEach((cliente) => {
            const item = document.createElement("li");

            item.style.display = "flex";
            item.style.justifyContent = "space-between";
            item.style.alignItems = "center";

            const informacoes = document.createElement("span");
            informacoes.textContent = `${cliente.nome} - ${cliente.email} `;

            const botaoExcluir = document.createElement("button");
            botaoExcluir.textContent = "Excluir";

            botaoExcluir.addEventListener("click", async () => {
                await excluirCliente(cliente._id);
            });

            item.appendChild(informacoes);
            item.appendChild(botaoExcluir);

            listaClientes.appendChild(item);
        });
    } catch (erro) {
        console.error("Erro ao listar clientes:", erro);
        alert("Não foi possível carregar os clientes.");
    }
}

formCliente.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    const novoCliente = {
        nome: nome,
        email: email
    };

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCliente)
        });

        console.log("Status do POST:", resposta.status);
        console.log("Resposta do POST:", await resposta.clone().text());

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar cliente.");
        }

        formCliente.reset();

        await listarClientes();

        alert("Cliente cadastrado com sucesso!");
    } catch (erro) {
        console.error("Erro ao cadastrar cliente:", erro);
        alert("Não foi possível cadastrar o cliente.");
    }
});

async function excluirCliente(id) {
    const confirmar = confirm("Deseja realmente excluir este cliente?");

    if (!confirmar) {
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        console.log("Status do DELETE:", resposta.status);
        console.log("Resposta do DELETE:", await resposta.clone().text());

        if (!resposta.ok) {
            throw new Error("Erro ao excluir cliente.");
        }

        await listarClientes();

        alert("Cliente excluído com sucesso!");
    } catch (erro) {
        console.error("Erro ao excluir cliente:", erro);
        alert("Não foi possível excluir o cliente.");
    }
}

listarClientes();