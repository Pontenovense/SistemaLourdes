// Sistema de Notificações
function showNotification(title, message, type = 'success', duration = 4000) {
    const container = document.getElementById('notificationContainer');
    
    // Criar elemento da notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Definir ícones para cada tipo
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="closeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Adicionar ao container
    container.appendChild(notification);
    
    // Mostrar com animação
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-remover após o tempo especificado
    setTimeout(() => {
        closeNotification(notification.querySelector('.notification-close'));
    }, duration);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.classList.remove('show');
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Dados iniciais
let produtos = [
    { id: 1, nome: "Coxinha", nomeAbreviado: "CX", preco: 0.90, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_promocional" },
    { id: 2, nome: "Risoles de carne", nomeAbreviado: "RC", preco: 0.90, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_promocional" },
    { id: 3, nome: "Kibe", nomeAbreviado: "Kibe", preco: 0.90, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_promocional" },
    { id: 4, nome: "Bolinha de queijo", nomeAbreviado: "B.queijo", preco: 0.90, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_promocional" },
    { id: 5, nome: "Croquete de presunto e queijo", nomeAbreviado: "BALÃo", preco: 0.90, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_promocional" },
    { id: 6, nome: "Pastel de carne", nomeAbreviado: "Pastel carne", preco: 1.00, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_normal" },
    { id: 7, nome: "Pastel de queijo", nomeAbreviado: "Pastel queijo", preco: 1.00, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_normal" },
    { id: 8, nome: "Bolinho de aipim c/ carne seca", nomeAbreviado: "B. aipim", preco: 1.20, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_normal" },
    { id: 9, nome: "Mini churros de doce de leite", nomeAbreviado: "Mini churros", preco: 1.20, descricao: "Salgado frito - valor por unidade", categoria: "Salgados", tipoSalgado: "frito_normal" },
    { id: 10, nome: "Doguinho assado", nomeAbreviado: "Doguinho", preco: 1.20, descricao: "Salgado assado - valor por unidade", categoria: "Salgados", tipoSalgado: "assado" },
    { id: 11, nome: "Esfiha de carne", nomeAbreviado: "Esfiha carne", preco: 1.20, descricao: "Salgado assado - valor por unidade", categoria: "Salgados", tipoSalgado: "assado" },
    { id: 12, nome: "Esfiha de frango", nomeAbreviado: "Esfiha frango", preco: 1.20, descricao: "Salgado assado - valor por unidade", categoria: "Salgados", tipoSalgado: "assado" },
    { id: 13, nome: "Folhado de frango", nomeAbreviado: "Folh. frango", preco: 1.20, descricao: "Salgado assado - valor por unidade", categoria: "Salgados", tipoSalgado: "assado" },
    { id: 14, nome: "Folhado de palmito", nomeAbreviado: "Folh. palmito", preco: 1.20, descricao: "Salgado assado - valor por unidade", categoria: "Salgados", tipoSalgado: "assado" },
    { id: 15, nome: "Brigadeiro", nomeAbreviado: "Brigadeiro", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 16, nome: "Cajuzinho", nomeAbreviado: "Caju", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 17, nome: "Brigadeiro Branco", nomeAbreviado: "Brig. Branco", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 18, nome: "Beijinho", nomeAbreviado: "Beijinho", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 19, nome: "Dois Amores", nomeAbreviado: "2 Amores", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 20, nome: "Amendoim", nomeAbreviado: "Amendoim", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 21, nome: "Bicho de pé", nomeAbreviado: "Bicho pé", preco: 1.40, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 22, nome: "Brigadeiro de Churros", nomeAbreviado: "Churros", preco: 1.50, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 23, nome: "Olho de Sogra", nomeAbreviado: "Olho Sogra", preco: 1.50, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 24, nome: "Rosinha Napolitana", nomeAbreviado: "Rosinha Napol.", preco: 1.50, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 25, nome: "Leite ninho com nutella", nomeAbreviado: "ninho nutella", preco: 1.60, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 26, nome: "Surpresa de Uva", nomeAbreviado: "Surp. Uva", preco: 1.70, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 27, nome: "Brigadeiro ao leite c/Split Callebaut", nomeAbreviado: "Brig. Split", preco: 2.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 28, nome: "Ouriço de coco queimado", nomeAbreviado: "Ouriço", preco: 2.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 29, nome: "Bombom Cereja", nomeAbreviado: "Bomb. Cereja", preco: 3.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 30, nome: "Bombom Uva", nomeAbreviado: "Bomb. Uva", preco: 3.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 31, nome: "Bombom de Morango", nomeAbreviado: "Bomb. Morango", preco: 4.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 32, nome: "Brigadeiro Ferreiro", nomeAbreviado: "Ferreiro", preco: 2.00, descricao: "Doce - valor por unidade", categoria: "Doces", tipoSalgado: null },
    { id: 33, nome: "Caixa Doce Mix 42un", nomeAbreviado: "Cx Mix 42un", preco: 60.00, descricao: "Caixa de doces - valor por caixa", categoria: "Doces", tipoSalgado: null },
    { id: 34, nome: "Caixa Doce Mix 100un", nomeAbreviado: "Cx Mix 100un", preco: 150.00, descricao: "Caixa de doces - valor por caixa", categoria: "Doces", tipoSalgado: null },
    { id: 35, nome: "Bolo", nomeAbreviado: "Bolo", preco: 80.00, descricao: "Bolos", categoria: "Doces", tipoSalgado: null },
    { id: 36, nome: "Morango do Amor", nomeAbreviado: "Morango Amor", preco: 10.00, descricao: "Morango do Amor❤️", categoria: "Doces", tipoSalgado: null },
    { id: 37, nome: "DIVERSOS", nomeAbreviado: "DIVERSOS", preco: 0.00, descricao: "Produto personalizado - nome e preço definidos no pedido", categoria: "Diversos", tipoSalgado: null }
];

let pedidos = [];
let proximoNumeroPedido = 1;
let produtosCalculadora = [];
let produtosPedido = [];
let filtroCategoria = 'todos';

// Função para calcular preço dinâmico dos salgados fritos promocionais
function calcularPrecoSalgadoFrito(listaProdutos) {
    // Contar total de salgados fritos promocionais
    const totalSalgadosPromocionais = listaProdutos
        .filter(item => {
            const produto = produtos.find(p => p.id === item.id);
            return produto && produto.tipoSalgado === 'frito_promocional';
        })
        .reduce((total, item) => total + item.quantidade, 0);
    
    // Retornar preço baseado na quantidade total
    return totalSalgadosPromocionais >= 100 ? 0.90 : 1.00;
}

// Função para recalcular preços na calculadora
function recalcularPrecosCalculadora() {
    const precoSalgadoFrito = calcularPrecoSalgadoFrito(produtosCalculadora);
    
    produtosCalculadora.forEach(item => {
        const produto = produtos.find(p => p.id === item.id);
        if (produto && produto.tipoSalgado === 'frito_promocional') {
            item.preco = precoSalgadoFrito;
            item.total = item.quantidade * precoSalgadoFrito;
        }
    });
    
    atualizarListaCalculadora();
}

// Função para recalcular preços no pedido
function recalcularPrecosPedido() {
    const precoSalgadoFrito = calcularPrecoSalgadoFrito(produtosPedido);
    
    produtosPedido.forEach(item => {
        const produto = produtos.find(p => p.id === item.id);
        if (produto && produto.tipoSalgado === 'frito_promocional') {
            item.preco = precoSalgadoFrito;
            item.total = item.quantidade * precoSalgadoFrito;
        }
    });
    
    atualizarListaProdutosPedido();
}

// Variável global para controlar o modo da comanda
let isComandaPrintMode = false;

// Dom Ready
document.addEventListener('DOMContentLoaded', function() {
    // Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('border-pink-600', 'text-pink-600', 'bg-pink-50'));
            tabs.forEach(t => t.classList.add('text-gray-500'));
            this.classList.add('border-pink-600', 'text-pink-600', 'bg-pink-50');
            this.classList.remove('text-gray-500');

            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(c => c.classList.remove('active'));
            const contentId = this.id.replace('tab', 'content');
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Toggle entre modos de visualização da comanda
    const toggleCopyMode = document.getElementById('toggleCopyMode');
    const togglePrintMode = document.getElementById('togglePrintMode');
    const previewNotinha = document.getElementById('previewNotinha');
    const comandaHeader = document.getElementById('comandaHeader');
    const valorTotalPrint = document.getElementById('valorTotalPrint');
    const previewTotal = document.getElementById('previewTotal');
    const previewTotalPrint = document.getElementById('previewTotalPrint');
    const previewCliente = document.getElementById('previewCliente');

    // Função para alternar para modo copiar imagem
    function ativarModoCopiarImagem() {
        // Atualizar botões
        toggleCopyMode.classList.add('bg-white', 'text-pink-600', 'shadow-sm');
        toggleCopyMode.classList.remove('text-gray-500');
        togglePrintMode.classList.remove('bg-white', 'text-pink-600', 'shadow-sm');
        togglePrintMode.classList.add('text-gray-500');

        // Remover classe de modo impressão
        previewNotinha.classList.remove('print-mode');
        
        // Mostrar header da confeitaria
        comandaHeader.style.display = 'block';
        
        // Esconder seção de valor total do modo impressão
        valorTotalPrint.style.display = 'none';
        
        // Mostrar valor total no local original
        previewTotal.parentElement.style.display = 'flex';
        
        // Mostrar header "ITENS PARA PRODUZIR"
        const itensHeader = document.querySelector('#previewItens').previousElementSibling;
        if (itensHeader && itensHeader.tagName === 'H4') {
            itensHeader.style.display = 'block';
        }
    }

    // Função para alternar para modo impressão
    function ativarModoImpressao() {
        // Atualizar botões
        togglePrintMode.classList.add('bg-white', 'text-pink-600', 'shadow-sm');
        togglePrintMode.classList.remove('text-gray-500');
        toggleCopyMode.classList.remove('bg-white', 'text-pink-600', 'shadow-sm');
        toggleCopyMode.classList.add('text-gray-500');

        // Adicionar classe de modo impressão
        previewNotinha.classList.add('print-mode');
        
        // Esconder header da confeitaria
        comandaHeader.style.display = 'none';
        
        // Esconder valor total do local original
        previewTotal.parentElement.style.display = 'none';
        
        // Mostrar seção de valor total do modo impressão
        valorTotalPrint.style.display = 'block';
        
        // Sincronizar valor total
        previewTotalPrint.textContent = previewTotal.textContent;
        
        // Esconder header "ITENS PARA PRODUZIR"
        const itensHeader = document.querySelector('#previewItens').previousElementSibling;
        if (itensHeader && itensHeader.tagName === 'H4') {
            itensHeader.style.display = 'none';
        }
    }

    // Event listeners para os botões de toggle
    toggleCopyMode.addEventListener('click', function() {
        ativarModoCopiarImagem();
        // Atualizar nomes dos produtos na preview quando mudar de modo
        atualizarPreviewProdutos();
    });
    togglePrintMode.addEventListener('click', function() {
        ativarModoImpressao();
        // Atualizar nomes dos produtos na preview quando mudar de modo
        atualizarPreviewProdutos();
    });

    // Inicializar no modo copiar imagem
    ativarModoCopiarImagem();

    // Formulário de Produto
    document.getElementById('formProduto').addEventListener('submit', function(e) {
        e.preventDefault();
        const novoProduto = {
            id: produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1,
            nome: document.getElementById('nomeProduto').value,
            preco: parseFloat(document.getElementById('precoProduto').value),
            descricao: document.getElementById('descricaoProduto').value
        };
        produtos.push(novoProduto);
        atualizarListaProdutos();
        atualizarSelectProdutos();
        this.reset();
        showNotification('Produto Cadastrado!', `${novoProduto.nome} foi adicionado com sucesso ao catálogo.`, 'success');
    });

    // Formulário de Pedido
    document.getElementById('formPedido').addEventListener('submit', function(e) {
        e.preventDefault();

        if (produtosPedido.length === 0) {
            showNotification('Erro!', 'Adicione pelo menos um produto ao pedido.', 'error');
            return;
        }

        const totalCalculado = produtosPedido.reduce((sum, item) => sum + item.total, 0);
        const descricaoGerada = produtosPedido.map(item => 
            `${item.quantidade}x ${item.nome} - ${formatarMoeda(item.preco)} = ${formatarMoeda(item.total)}`
        ).join('\n');

        const novoPedido = {
            id: pedidos.length > 0 ? Math.max(...pedidos.map(p => p.id)) + 1 : 1,
            numero: proximoNumeroPedido++,
            cliente: document.getElementById('clientePedido').value,
            horario: document.getElementById('horarioPedido').value,
            valor: totalCalculado,
            produtos: [...produtosPedido],
            descricao: descricaoGerada,
            observacoes: document.getElementById('observacoesPedido').value
        };
        
        pedidos.push(novoPedido);
        atualizarListaPedidos();
        
        // Limpar formulário e produtos
        this.reset();
        produtosPedido = [];
        atualizarListaProdutosPedido();
        atualizarPreview();
        
        showNotification('Pedido Finalizado!', `Pedido de ${novoPedido.cliente} foi registrado com sucesso.`, 'success');
    });

document.getElementById('produtoPedido').addEventListener('change', function() {
    const produtoId = parseInt(this.value);
    const descricaoBoloContainer = document.getElementById('descricaoBoloContainer');
    const diversosContainer = document.getElementById('diversosContainer');
    const labelQuantidadePedido = document.getElementById('labelQuantidadePedido');

    if (produtoId) {
        const produto = produtos.find(p => p.id === produtoId);

        // Esconder todos os containers primeiro
        descricaoBoloContainer.classList.add('hidden');
        diversosContainer.classList.add('hidden');

        if (produto && produto.nome.toLowerCase() === 'bolo') {
            descricaoBoloContainer.classList.remove('hidden');
            labelQuantidadePedido.textContent = 'KG';
        } else if (produto && produto.nome === 'DIVERSOS') {
            diversosContainer.classList.remove('hidden');
            labelQuantidadePedido.textContent = 'Quantidade';
            // Limpar campos do produto diversos
            document.getElementById('nomeDiversos').value = '';
            document.getElementById('precoDiversos').value = '';
        } else {
            labelQuantidadePedido.textContent = 'Quantidade';
        }

        document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(produto.preco);
        calcularTotalItemPedido();
    } else {
        descricaoBoloContainer.classList.add('hidden');
        diversosContainer.classList.add('hidden');
        labelQuantidadePedido.textContent = 'Quantidade';
        document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(0);
        document.getElementById('totalItemPedido').textContent = formatarMoeda(0);
    }
});

// Event listeners para campos do produto DIVERSOS
document.getElementById('precoDiversos').addEventListener('input', function() {
    const produtoId = parseInt(document.getElementById('produtoPedido').value);
    const produto = produtos.find(p => p.id === produtoId);
    
    if (produto && produto.nome === 'DIVERSOS') {
        const precoPersonalizado = parseFloat(this.value) || 0;
        document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(precoPersonalizado);
        calcularTotalItemPedidoDiversos();
    }
});

document.getElementById('quantidadePedido').addEventListener('input', function() {
    const produtoId = parseInt(document.getElementById('produtoPedido').value);
    const produto = produtos.find(p => p.id === produtoId);
    
    if (produto && produto.nome === 'DIVERSOS') {
        calcularTotalItemPedidoDiversos();
    } else {
        calcularTotalItemPedido();
    }
});

function calcularTotalItemPedidoDiversos() {
    const quantidade = parseFloat(document.getElementById('quantidadePedido').value);
    const precoPersonalizado = parseFloat(document.getElementById('precoDiversos').value) || 0;
    
    if (quantidade > 0 && precoPersonalizado > 0) {
        const total = quantidade * precoPersonalizado;
        document.getElementById('totalItemPedido').textContent = formatarMoeda(total);
    } else {
        document.getElementById('totalItemPedido').textContent = formatarMoeda(0);
    }
}

    document.getElementById('quantidadeCalculo').addEventListener('change', calcularTotal);
    document.getElementById('quantidadeCalculo').addEventListener('input', calcularTotal);

    // Botões da calculadora
    document.getElementById('adicionarProdutoCalculadora').addEventListener('click', adicionarProdutoCalculadora);
    document.getElementById('limparCalculadora').addEventListener('click', limparCalculadora);

    // Eventos para produtos do pedido
    document.getElementById('produtoPedido').addEventListener('change', function() {
        const produtoId = parseInt(this.value);
        if (produtoId) {
            const produto = produtos.find(p => p.id === produtoId);
            document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(produto.preco);
            calcularTotalItemPedido();
        } else {
            document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(0);
            document.getElementById('totalItemPedido').textContent = formatarMoeda(0);
        }
    });

    document.getElementById('quantidadePedido').addEventListener('change', calcularTotalItemPedido);
    document.getElementById('quantidadePedido').addEventListener('input', calcularTotalItemPedido);
    document.getElementById('adicionarProdutoPedido').addEventListener('click', adicionarProdutoAoPedido);

    // Atualizar preview em tempo real
    document.getElementById('clientePedido').addEventListener('input', atualizarPreview);
    document.getElementById('horarioPedido').addEventListener('input', atualizarPreview);
    document.getElementById('observacoesPedido').addEventListener('input', atualizarPreview);

    // Inicialização
    atualizarListaProdutos();
    atualizarSelectProdutos();
    atualizarSelectProdutosPedido();
    atualizarListaPedidos();
    atualizarPreview();
    atualizarListaCalculadora();
    atualizarListaProdutosPedido();
    
    // Inicializar modo da comanda (padrão: copiar imagem)
    setComandaMode(false);
});

// Função para alternar entre modos da comanda
function setComandaMode(printMode) {
    isComandaPrintMode = printMode;
    const previewNotinha = document.getElementById('previewNotinha');
    const toggleCopyBtn = document.getElementById('toggleCopyMode');
    const togglePrintBtn = document.getElementById('togglePrintMode');
    
    if (printMode) {
        // Modo impressão: negrito e sem cabeçalho
        previewNotinha.classList.add('print-mode');
        togglePrintBtn.classList.add('bg-white', 'text-pink-600', 'shadow-sm');
        togglePrintBtn.classList.remove('text-gray-500');
        toggleCopyBtn.classList.remove('bg-white', 'text-pink-600', 'shadow-sm');
        toggleCopyBtn.classList.add('text-gray-500');
    } else {
        // Modo copiar imagem: formato original
        previewNotinha.classList.remove('print-mode');
        toggleCopyBtn.classList.add('bg-white', 'text-pink-600', 'shadow-sm');
        toggleCopyBtn.classList.remove('text-gray-500');
        togglePrintBtn.classList.remove('bg-white', 'text-pink-600', 'shadow-sm');
        togglePrintBtn.classList.add('text-gray-500');
    }
}

function calcularTotal() {
    const produtoId = parseInt(document.getElementById('produtoSelecionado').value);
    const quantidade = parseFloat(document.getElementById('quantidadeCalculo').value);
    
    if (produtoId && quantidade > 0) {
        const produto = produtos.find(p => p.id === produtoId);
        const total = produto.preco * quantidade;
        document.getElementById('totalCalculo').textContent = formatarMoeda(total);
    }
}

function atualizarPreview() {
    // Nome do cliente em maiúsculo
    const nomeCliente = document.getElementById('clientePedido').value || '-';
    document.getElementById('previewCliente').textContent = nomeCliente.toUpperCase();
    
    document.getElementById('previewHorario').textContent = formatarDataHora(document.getElementById('horarioPedido').value) || '-';
    const valorTotal = formatarMoeda(parseFloat(document.getElementById('valorPedido').value) || 0);
    document.getElementById('previewTotal').textContent = valorTotal;
    
    // Sincronizar valor total para modo de impressão SEMPRE
    const previewTotalPrint = document.getElementById('previewTotalPrint');
    if (previewTotalPrint) {
        previewTotalPrint.textContent = valorTotal;
    }
    
    // Atualizar itens baseado nos produtos do pedido
    atualizarPreviewProdutos();
    
    // Atualizar observações em maiúsculo
    const observacoes = document.getElementById('observacoesPedido').value;
    const previewObservacoes = document.getElementById('previewObservacoes');
    const previewObservacoesTexto = document.getElementById('previewObservacoesTexto');
    if (observacoes.trim()) {
        previewObservacoesTexto.textContent = observacoes.toUpperCase();
        previewObservacoes.style.display = 'block';
    } else {
        previewObservacoes.style.display = 'none';
    }
}

function atualizarListaProdutos() {
    const tbody = document.getElementById('listaProdutos');
    tbody.innerHTML = produtos.map(produto => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap font-medium">${produto.nome}</td>
            <td class="px-6 py-4 whitespace-nowrap">${formatarMoeda(produto.preco)}</td>
            <td class="px-6 py-4">${produto.descricao || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onclick="editarProduto(${produto.id})" class="text-pink-600 hover:text-pink-900 mr-2" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="excluirProduto(${produto.id})" class="text-red-600 hover:text-red-900" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function atualizarSelectProdutos() {
    const select = document.getElementById('produtoSelecionado');
    select.innerHTML = '<option value="">Selecione um produto</option>' + 
        produtos.map(p => 
            `<option value="${p.id}">${p.nome} - ${formatarMoeda(p.preco)}</option>`
        ).join('');
    
    // Também atualizar o select de produtos do pedido
    atualizarSelectProdutosPedido();
}

function atualizarListaPedidos() {
    const tbody = document.getElementById('listaPedidos');
    tbody.innerHTML = pedidos.map(pedido => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap font-medium">${pedido.cliente}</td>
            <td class="px-6 py-4 whitespace-nowrap">${formatarDataHora(pedido.horario)}</td>
            <td class="px-6 py-4">
                <div class="max-w-xs">
                    <p class="text-sm text-gray-900 truncate">${pedido.descricao}</p>
                    ${pedido.observacoes ? `<p class="text-xs text-yellow-600 mt-1">⚠️ ${pedido.observacoes}</p>` : ''}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap font-semibold">${formatarMoeda(pedido.valor)}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onclick="visualizarComanda(${pedido.id})" class="text-blue-600 hover:text-blue-900 mr-2" title="Visualizar Comanda">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="imprimirComandaPedido(${pedido.id})" class="text-green-600 hover:text-green-900 mr-2" title="Imprimir Comanda">
                    <i class="fas fa-print"></i>
                </button>
                <button onclick="copiarComandaPedidoImagem(${pedido.id})" class="text-purple-600 hover:text-purple-900 mr-2" title="Copiar Imagem">
                    <i class="fas fa-copy"></i>
                </button>
                <button onclick="cancelarPedido(${pedido.id})" class="text-red-600 hover:text-red-900" title="Cancelar Pedido">
                    <i class="fas fa-times-circle"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Funções auxiliares
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

function formatarDataHora(dataHora) {
    if (!dataHora) return '-';
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return new Date(dataHora).toLocaleDateString('pt-BR', options);
}

// Funções para os botões
function editarProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        document.getElementById('nomeProduto').value = produto.nome;
        document.getElementById('precoProduto').value = produto.preco;
        document.getElementById('descricaoProduto').value = produto.descricao || '';
        
        // Remover o produto para atualização
        produtos = produtos.filter(p => p.id !== id);
        
        // Rolar para o formulário
        document.getElementById('formProduto').scrollIntoView({ behavior: 'smooth' });
    }
}

function excluirProduto(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        produtos = produtos.filter(p => p.id !== id);
        atualizarListaProdutos();
        atualizarSelectProdutos();
        showNotification('Produto Excluído!', 'O produto foi removido do catálogo.', 'warning');
    }
}

function visualizarComanda(id) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        // Preenche a pré-visualização
        document.getElementById('previewCliente').textContent = pedido.cliente;
        document.getElementById('previewHorario').textContent = formatarDataHora(pedido.horario);
        document.getElementById('previewTotal').textContent = formatarMoeda(pedido.valor);
        document.getElementById('previewNumero').textContent = String(pedido.numero).padStart(3, '0');
        
        const previewItens = document.getElementById('previewItens');
        previewItens.innerHTML = pedido.descricao.split('\n').map(linha => 
            linha.trim() ? `<p class="mb-1">• ${linha.trim()}</p>` : ''
        ).join('');

        const previewObservacoes = document.getElementById('previewObservacoes');
        const previewObservacoesTexto = document.getElementById('previewObservacoesTexto');
        if (pedido.observacoes && pedido.observacoes.trim()) {
            previewObservacoesTexto.textContent = pedido.observacoes;
            previewObservacoes.style.display = 'block';
        } else {
            previewObservacoes.style.display = 'none';
        }
        
        // Abre a aba de pedidos e rola para a pré-visualização
        document.getElementById('tabPedidos').click();
        document.querySelector('.kitchen-receipt').scrollIntoView({ behavior: 'smooth' });
    }
}

function imprimirComanda() {
    // Temporariamente ativar modo impressão se não estiver ativo
    const wasInPrintMode = isComandaPrintMode;
    if (!wasInPrintMode) {
        setComandaMode(true);
    }
    
    // Imprimir
    window.print();
    
    // Restaurar modo anterior após impressão
    if (!wasInPrintMode) {
        setTimeout(() => {
            setComandaMode(false);
        }, 1000);
    }
}

function imprimirComandaPedido(id) {
    visualizarComanda(id);
    setTimeout(() => {
        window.print();
    }, 500);
}

function copiarComandaImagem() {
    const receiptElement = document.getElementById('previewNotinha');
    
    if (!receiptElement) {
        showNotification('Erro!', 'Elemento da comanda não encontrado.', 'error');
        return;
    }

    // Temporariamente desativar modo impressão se estiver ativo
    const wasInPrintMode = isComandaPrintMode;
    if (wasInPrintMode) {
        setComandaMode(false);
    }

    // Mostrar loading
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Copiando...';
    button.disabled = true;

    // Aguardar um pouco para a mudança de modo ser aplicada
    setTimeout(() => {
        // Capturar diretamente o elemento da comanda com margem para borda
        html2canvas(receiptElement, {
            backgroundColor: '#ffffff',
            scale: 2,
            useCORS: true,
            allowTaint: true,
            width: receiptElement.offsetWidth + 40,
            height: receiptElement.offsetHeight + 40,
            x: -20,
            y: -20
        }).then(canvas => {
            canvas.toBlob(blob => {
                if (blob) {
                    // Tentar usar a API moderna de clipboard
                    if (navigator.clipboard && window.ClipboardItem) {
                        navigator.clipboard.write([
                            new ClipboardItem({
                                'image/png': blob
                            })
                        ]).then(() => {
                            showNotification('Sucesso!', 'Imagem da comanda copiada para a área de transferência!', 'success');
                        }).catch(err => {
                            console.error('Erro ao copiar:', err);
                            fallbackCopyImage(canvas);
                        });
                    } else {
                        // Fallback para navegadores mais antigos
                        fallbackCopyImage(canvas);
                    }
                }
            }, 'image/png');
        }).catch(err => {
            console.error('Erro ao gerar imagem:', err);
            showNotification('Erro!', 'Não foi possível gerar a imagem da comanda.', 'error');
        }).finally(() => {
            // Restaurar botão
            button.innerHTML = originalText;
            button.disabled = false;
            
            // Restaurar modo anterior
            if (wasInPrintMode) {
                setTimeout(() => {
                    setComandaMode(true);
                }, 500);
            }
        });
    }, 200);
}

function fallbackCopyImage(canvas) {
    // Criar um link temporário para download
    const link = document.createElement('a');
    link.download = `comanda-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showNotification('Download!', 'A imagem foi baixada como fallback.', 'info');
}

function copiarComandaPedidoImagem(id) {
    visualizarComanda(id);
    setTimeout(() => {
        copiarComandaImagem();
    }, 1000);
}

function cancelarPedido(id) {
    if (confirm('Tem certeza que deseja cancelar este pedido?')) {
        const pedido = pedidos.find(p => p.id === id);
        pedidos = pedidos.filter(p => p.id !== id);
        atualizarListaPedidos();
        showNotification('Pedido Cancelado!', `Pedido de ${pedido.cliente} foi cancelado.`, 'error');
    }
}

// Funções da Calculadora
function adicionarProdutoCalculadora() {
    const produtoId = parseInt(document.getElementById('produtoSelecionado').value);
    const quantidade = parseFloat(document.getElementById('quantidadeCalculo').value);
    
    if (!produtoId) {
        showNotification('Erro!', 'Selecione um produto primeiro.', 'error');
        return;
    }
    
    if (!quantidade || quantidade <= 0) {
        showNotification('Erro!', 'Digite uma quantidade válida.', 'error');
        return;
    }
    
    const produto = produtos.find(p => p.id === produtoId);
    let precoFinal = produto.preco;
    
    // Para salgados fritos promocionais, usar preço dinâmico
    if (produto.tipoSalgado === 'frito_promocional') {
        // Criar lista temporária para calcular o preço
        const listaTemp = [...produtosCalculadora, { id: produtoId, quantidade: quantidade }];
        precoFinal = calcularPrecoSalgadoFrito(listaTemp);
    }
    
    const total = precoFinal * quantidade;
    
    const itemCalculadora = {
        id: produtoId,
        nome: produto.nome,
        preco: precoFinal,
        quantidade: quantidade,
        total: total
    };
    
    produtosCalculadora.push(itemCalculadora);
    
    // Recalcular preços de todos os salgados fritos promocionais
    recalcularPrecosCalculadora();
    
    // Limpar seleção
    document.getElementById('produtoSelecionado').value = '';
    document.getElementById('quantidadeCalculo').value = 0;
    document.getElementById('precoUnitario').textContent = formatarMoeda(0);
    document.getElementById('totalCalculo').textContent = formatarMoeda(0);
    
    showNotification('Produto Adicionado!', `${produto.nome} foi adicionado à calculadora.`, 'success');
}

function limparCalculadora() {
    produtosCalculadora = [];
    atualizarListaCalculadora();
    showNotification('Lista Limpa!', 'Todos os produtos foram removidos da calculadora.', 'info');
}

function removerProdutoCalculadora(index) {
    const produto = produtosCalculadora[index];
    produtosCalculadora.splice(index, 1);
    
    // Recalcular preços após remoção
    recalcularPrecosCalculadora();
    
    showNotification('Produto Removido!', `${produto.nome} foi removido da calculadora.`, 'warning');
}

function atualizarListaCalculadora() {
    const lista = document.getElementById('listaProdutosCalculadora');
    const totalGeral = document.getElementById('totalGeralCalculadora');
    
    if (produtosCalculadora.length === 0) {
        lista.innerHTML = '<p class="text-sm text-gray-500 italic">Nenhum produto adicionado</p>';
        totalGeral.textContent = formatarMoeda(0);
        return;
    }
    
    // Calcular total de salgados fritos promocionais para mostrar informação
    const totalSalgadosPromocionais = produtosCalculadora
        .filter(item => {
            const produto = produtos.find(p => p.id === item.id);
            return produto && produto.tipoSalgado === 'frito_promocional';
        })
        .reduce((total, item) => total + item.quantidade, 0);
    
    lista.innerHTML = produtosCalculadora.map((item, index) => {
        const produto = produtos.find(p => p.id === item.id);
        const isSalgadoPromocional = produto && produto.tipoSalgado === 'frito_promocional';
        
        return `
        <div class="flex justify-between items-center bg-gray-50 p-2 rounded">
            <div class="flex-1">
                <span class="font-medium">${item.nome}</span>
                ${isSalgadoPromocional ? `<span class="text-xs bg-blue-100 text-blue-800 px-1 rounded ml-1">Promocional</span>` : ''}
                <br>
                <span class="text-sm text-gray-600">${item.quantidade}x ${formatarMoeda(item.preco)} = ${formatarMoeda(item.total)}</span>
            </div>
            <button onclick="removerProdutoCalculadora(${index})" class="text-red-600 hover:text-red-800 ml-2" title="Remover">
                <i class="fas fa-times"></i>
            </button>
        </div>
        `;
    }).join('');
    
    // Adicionar informação sobre a regra de preço se houver salgados promocionais
    if (totalSalgadosPromocionais > 0) {
        const infoRegra = document.createElement('div');
        infoRegra.className = 'bg-blue-50 border border-blue-200 p-2 rounded mt-2 text-xs';
        infoRegra.innerHTML = `
            <div class="font-medium text-blue-800">📋 Regra de Preço Salgados Fritos:</div>
            <div class="text-blue-700">
                Total salgados promocionais: ${totalSalgadosPromocionais} unidades<br>
                Preço aplicado: ${formatarMoeda(totalSalgadosPromocionais >= 100 ? 0.90 : 1.00)} por unidade<br>
                <span class="text-xs">${totalSalgadosPromocionais >= 100 ? '✅ Desconto ativo (≥100 un)' : '⚠️ Desconto inativo (<100 un)'}</span>
            </div>
        `;
        lista.appendChild(infoRegra);
    }
    
    const valorTotal = produtosCalculadora.reduce((sum, item) => sum + item.total, 0);
    totalGeral.textContent = formatarMoeda(valorTotal);
}

// Funções para Produtos do Pedido
function atualizarSelectProdutosPedido() {
    const select = document.getElementById('produtoPedido');
    select.innerHTML = '<option value="">Selecione um produto</option>' + 
        produtos.map(p => 
            `<option value="${p.id}">${p.nome} - ${formatarMoeda(p.preco)}</option>`
        ).join('');
}

function calcularTotalItemPedido() {
    const produtoId = parseInt(document.getElementById('produtoPedido').value);
    const quantidade = parseFloat(document.getElementById('quantidadePedido').value);
    
    if (produtoId && quantidade > 0) {
        const produto = produtos.find(p => p.id === produtoId);
        const total = produto.preco * quantidade;
        document.getElementById('totalItemPedido').textContent = formatarMoeda(total);
    } else {
        document.getElementById('totalItemPedido').textContent = formatarMoeda(0);
    }
}

function adicionarProdutoAoPedido() {
    const produtoId = parseInt(document.getElementById('produtoPedido').value);
    const quantidade = parseFloat(document.getElementById('quantidadePedido').value);
    const descricaoBolo = document.getElementById('descricaoBolo').value.trim();

    if (!produtoId) {
        showNotification('Erro!', 'Selecione um produto primeiro.', 'error');
        return;
    }

    if (!quantidade || quantidade <= 0) {
        showNotification('Erro!', 'Digite uma quantidade válida.', 'error');
        return;
    }

    const produto = produtos.find(p => p.id === produtoId);
    let precoFinal = produto.preco;

    // Para produto DIVERSOS, usar preço personalizado
    if (produto.nome === 'DIVERSOS') {
        const nomePersonalizado = document.getElementById('nomeDiversos').value.trim();
        const precoPersonalizado = parseFloat(document.getElementById('precoDiversos').value);

        if (!nomePersonalizado) {
            showNotification('Erro!', 'Digite o nome do produto diversos.', 'error');
            return;
        }

        if (!precoPersonalizado || precoPersonalizado <= 0) {
            showNotification('Erro!', 'Digite um preço válido para o produto diversos.', 'error');
            return;
        }

        precoFinal = precoPersonalizado;
    }

    // Para salgados fritos promocionais, usar preço dinâmico
    if (produto.tipoSalgado === 'frito_promocional') {
        // Criar lista temporária para calcular o preço
        const listaTemp = [...produtosPedido, { id: produtoId, quantidade: quantidade }];
        precoFinal = calcularPrecoSalgadoFrito(listaTemp);
    }

    // Para bolo, não contabilizar valor
    let total = precoFinal * quantidade;
    if (produto.nome.toLowerCase() === 'bolo') {
        precoFinal = 0;
        total = 0;
    }

    const itemPedido = {
        id: produtoId,
        nome: produto.nome,
        preco: precoFinal,
        quantidade: quantidade,
        total: total,
        descricaoBolo: produto.nome.toLowerCase() === 'bolo' ? descricaoBolo : '',
        nomePersonalizado: produto.nome === 'DIVERSOS' ? document.getElementById('nomeDiversos').value.trim() : ''
    };

    produtosPedido.push(itemPedido);

    // Recalcular preços de todos os salgados fritos promocionais
    recalcularPrecosPedido();

    // Limpar seleção e campos
    document.getElementById('produtoPedido').value = '';
    document.getElementById('quantidadePedido').value = 0;
    document.getElementById('descricaoBolo').value = '';
    document.getElementById('nomeDiversos').value = '';
    document.getElementById('precoDiversos').value = '';
    document.getElementById('precoUnitarioPedido').textContent = formatarMoeda(0);
    document.getElementById('totalItemPedido').textContent = formatarMoeda(0);

    // Esconder containers
    document.getElementById('descricaoBoloContainer').classList.add('hidden');
    document.getElementById('diversosContainer').classList.add('hidden');

    // Atualizar preview
    atualizarPreviewProdutos();

    const nomeExibir = produto.nome === 'DIVERSOS' ? itemPedido.nomePersonalizado : produto.nome;
    showNotification('Produto Adicionado!', `${nomeExibir} foi adicionado ao pedido.`, 'success');
}

function atualizarListaProdutosPedido() {
    const lista = document.getElementById('produtosPedidoLista');
    const totalPedido = document.getElementById('totalPedidoCalculado');

    if (produtosPedido.length === 0) {
        lista.innerHTML = '<p class="text-sm text-gray-500 italic text-center py-4">Nenhum produto adicionado ao pedido</p>';
        totalPedido.textContent = formatarMoeda(0);
        return;
    }

    // Calcular total de salgados fritos promocionais para mostrar informação
    const totalSalgadosPromocionais = produtosPedido
        .filter(item => {
            const produto = produtos.find(p => p.id === item.id);
            return produto && produto.tipoSalgado === 'frito_promocional';
        })
        .reduce((total, item) => total + item.quantidade, 0);

    lista.innerHTML = produtosPedido.map((item, index) => {
        const produto = produtos.find(p => p.id === item.id);
        const isSalgadoPromocional = produto && produto.tipoSalgado === 'frito_promocional';

        // For bolo, show KG instead of quantidade, show description, hide price and total
        if (produto && produto.nome.toLowerCase() === 'bolo') {
            return `
            <div class="flex justify-between items-center bg-gray-50 p-3 rounded mb-2">
                <div class="flex-1">
                    <div class="font-medium text-gray-900">
                        ${item.nome} - ${item.descricaoBolo ? item.descricaoBolo : ''}
                    </div>
                    <div class="text-sm text-gray-600">
                        ${item.quantidade} KG
                    </div>
                </div>
                <button onclick="removerProdutoPedido(${index})" class="text-red-600 hover:text-red-800 ml-2 p-1" title="Remover">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            `;
        }

        return `
        <div class="flex justify-between items-center bg-gray-50 p-3 rounded mb-2">
            <div class="flex-1">
                <div class="font-medium text-gray-900">
                    ${item.nome}
                    ${isSalgadoPromocional ? `<span class="text-xs bg-blue-100 text-blue-800 px-1 rounded ml-1">Promocional</span>` : ''}
                </div>
                <div class="text-sm text-gray-600">
                    ${item.quantidade}x ${formatarMoeda(item.preco)} = ${formatarMoeda(item.total)}
                </div>
            </div>
            <button onclick="removerProdutoPedido(${index})" class="text-red-600 hover:text-red-800 ml-2 p-1" title="Remover">
                <i class="fas fa-times"></i>
            </button>
        </div>
        `;
    }).join('');

    const valorTotal = produtosPedido.reduce((sum, item) => sum + item.total, 0);
    totalPedido.textContent = formatarMoeda(valorTotal);

    // Atualizar campo valor total do pedido
    document.getElementById('valorPedido').value = valorTotal.toFixed(2);
}

function removerProdutoPedido(index) {
    const produto = produtosPedido[index];
    produtosPedido.splice(index, 1);
    
    // Recalcular preços após remoção
    recalcularPrecosPedido();
    atualizarPreviewProdutos();
    
    showNotification('Produto Removido!', `${produto.nome} foi removido do pedido.`, 'warning');
}

function atualizarPreviewProdutos() {
    const previewItens = document.getElementById('previewItens');
    const totalCalculado = produtosPedido.reduce((sum, item) => sum + item.total, 0);

    // Atualizar total na preview
    const valorTotalFormatado = formatarMoeda(totalCalculado);
    document.getElementById('previewTotal').textContent = valorTotalFormatado;
    
    // Sincronizar valor total para modo de impressão SEMPRE
    const previewTotalPrint = document.getElementById('previewTotalPrint');
    if (previewTotalPrint) {
        previewTotalPrint.textContent = valorTotalFormatado;
    }

    if (produtosPedido.length === 0) {
        previewItens.innerHTML = '<p class="text-gray-500 italic">Aguardando produtos do pedido...</p>';
        return;
    }

    // Verificar se está no modo impressão para usar nomes abreviados
    const isComandaPrintModeActive = document.getElementById('previewNotinha').classList.contains('print-mode');

    function atualizarNomesProdutosPreview() {
        const previewItens = document.getElementById('previewItens');
        const isPrintMode = document.getElementById('previewNotinha').classList.contains('print-mode');

        previewItens.innerHTML = produtosPedido.map(item => {
            const produto = produtos.find(p => p.id === item.id);

            // Usar nome abreviado apenas no modo impressão
            let nomeExibir = item.nome;
            if (isPrintMode && produto && produto.nomeAbreviado) {
                nomeExibir = produto.nomeAbreviado;
            }

            // Converter para maiúsculo mantendo o tamanho original
            nomeExibir = nomeExibir.toUpperCase();


            if (produto && produto.nome.toLowerCase() === 'bolo') {
                const descricaoBoloUpper = item.descricaoBolo ? item.descricaoBolo.toUpperCase() : '';
                return `<p class="mb-1 flex justify-between">
                    <span>• ${item.quantidade} KG ${nomeExibir} - ${descricaoBoloUpper}</span>
                    <strong></strong>
                </p>`;
            }

            // Para produto DIVERSOS, usar o nome personalizado
            if (produto && produto.nome === 'DIVERSOS') {
                const nomePersonalizadoUpper = item.nomePersonalizado ? item.nomePersonalizado.toUpperCase() : nomeExibir;
                return `<p class="mb-1 flex justify-between">
                    <span>• ${item.quantidade}x ${nomePersonalizadoUpper}</span>
                    <strong>${formatarMoeda(item.total)}</strong>
                </p>`;
            }

            return `<p class="mb-1 flex justify-between">
                <span>• ${item.quantidade}x ${nomeExibir}</span>
                <strong>${formatarMoeda(item.total)}</strong>
            </p>`;
        }).join('');
    }

    // Call this function whenever mode changes or produtosPedido changes
    atualizarNomesProdutosPreview();
}
