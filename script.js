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
    { id: 1, nome: "Coxinha", preco: 0.90, descricao: "Salgado frito - valor por unidade" },
    { id: 2, nome: "Risoles de carne", preco: 0.90, descricao: "Salgado frito - valor por unidade" },
    { id: 3, nome: "Kibe", preco: 0.90, descricao: "Salgado frito - valor por unidade" },
    { id: 4, nome: "Bolinho de queijo", preco: 0.90, descricao: "Salgado frito - valor por unidade" },
    { id: 5, nome: "Croquete de presunto e queijo", preco: 0.90, descricao: "Salgado frito - valor por unidade" },
    { id: 6, nome: "Pastel de carne", preco: 1.00, descricao: "Salgado frito - valor por unidade" },
    { id: 7, nome: "Pastel de queijo", preco: 1.00, descricao: "Salgado frito - valor por unidade" },
    { id: 8, nome: "Bolinho de aipim c/ carne seca", preco: 1.20, descricao: "Salgado frito - valor por unidade" },
    { id: 9, nome: "Mini churros de doce de leite", preco: 1.20, descricao: "Salgado frito - valor por unidade" },
    { id: 10, nome: "Doguinho assado", preco: 1.20, descricao: "Salgado assado - valor por unidade" },
    { id: 11, nome: "Esfiha de carne", preco: 1.20, descricao: "Salgado assado - valor por unidade" },
    { id: 12, nome: "Esfiha de frango", preco: 1.20, descricao: "Salgado assado - valor por unidade" },
    { id: 13, nome: "Folhado de frango", preco: 1.20, descricao: "Salgado assado - valor por unidade" },
    { id: 14, nome: "Folhado de palmito", preco: 1.20, descricao: "Salgado assado - valor por unidade" },
    { id: 15, nome: "Brigadeiro", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 16, nome: "Brigadeiro Branco", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 17, nome: "Beijinho", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 18, nome: "Dois Amores", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 19, nome: "Amendoim", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 20, nome: "Bicho de pé", preco: 1.40, descricao: "Doce - valor por unidade" },
    { id: 21, nome: "Brigadeiro de Churros", preco: 1.50, descricao: "Doce - valor por unidade" },
    { id: 22, nome: "Olho de Sogra", preco: 1.50, descricao: "Doce - valor por unidade" },
    { id: 23, nome: "Rosinha Napolitana", preco: 1.50, descricao: "Doce - valor por unidade" },
    { id: 24, nome: "Leite ninho com nutella", preco: 1.60, descricao: "Doce - valor por unidade" },
    { id: 25, nome: "Surpresa de Uva", preco: 1.70, descricao: "Doce - valor por unidade" },
    { id: 26, nome: "Brigadeiro ao leite c/Split Callebaut", preco: 2.00, descricao: "Doce - valor por unidade" },
    { id: 27, nome: "Ouriço de coco queimado", preco: 2.00, descricao: "Doce - valor por unidade" },
    { id: 28, nome: "Bombom Cereja", preco: 3.00, descricao: "Doce - valor por unidade" },
    { id: 29, nome: "Bombom Uva", preco: 3.00, descricao: "Doce - valor por unidade" },
    { id: 30, nome: "Bombom de Morango", preco: 3.00, descricao: "Doce - valor por unidade" },
    { id: 31, nome: "Brigadeiro Ferreiro", preco: 2.00, descricao: "Doce - valor por unidade" },
    { id: 32, nome: "Caixa Doce Mix 42un", preco: 60.00, descricao: "Caixa de doces - valor por caixa" },
    { id: 33, nome: "Caixa Doce Mix 100un", preco: 150.00, descricao: "Caixa de doces - valor por caixa" }
];

let pedidos = [];
let proximoNumeroPedido = 1;
let produtosCalculadora = [];

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

        const novoPedido = {
            id: pedidos.length > 0 ? Math.max(...pedidos.map(p => p.id)) + 1 : 1,
            numero: proximoNumeroPedido++,
            cliente: document.getElementById('clientePedido').value,
            horario: document.getElementById('horarioPedido').value,
            valor: parseFloat(document.getElementById('valorPedido').value),
            descricao: document.getElementById('descricaoPedido').value,
            observacoes: document.getElementById('observacoesPedido').value
        };
        pedidos.push(novoPedido);
        atualizarListaPedidos();
        this.reset();
        atualizarPreview();
        showNotification('Pedido Finalizado!', `Pedido de ${novoPedido.cliente} foi registrado com sucesso.`, 'success');
    });

    // Atualizar preço na calculadora
    document.getElementById('produtoSelecionado').addEventListener('change', function() {
        const produtoId = parseInt(this.value);
        if (produtoId) {
            const produto = produtos.find(p => p.id === produtoId);
            document.getElementById('precoUnitario').textContent = formatarMoeda(produto.preco);
            calcularTotal();
        } else {
            document.getElementById('precoUnitario').textContent = formatarMoeda(0);
            document.getElementById('totalCalculo').textContent = formatarMoeda(0);
        }
    });

    document.getElementById('quantidadeCalculo').addEventListener('change', calcularTotal);
    document.getElementById('quantidadeCalculo').addEventListener('input', calcularTotal);

    // Botões da calculadora
    document.getElementById('adicionarProdutoCalculadora').addEventListener('click', adicionarProdutoCalculadora);
    document.getElementById('limparCalculadora').addEventListener('click', limparCalculadora);

    // Atualizar preview em tempo real
    document.getElementById('clientePedido').addEventListener('input', atualizarPreview);
    document.getElementById('horarioPedido').addEventListener('input', atualizarPreview);
    document.getElementById('valorPedido').addEventListener('input', atualizarPreview);
    document.getElementById('descricaoPedido').addEventListener('input', atualizarPreview);
    document.getElementById('observacoesPedido').addEventListener('input', atualizarPreview);

    // Inicialização
    atualizarListaProdutos();
    atualizarSelectProdutos();
    atualizarListaPedidos();
    atualizarPreview();
    atualizarListaCalculadora();
});

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
    document.getElementById('previewCliente').textContent = document.getElementById('clientePedido').value || '-';
    document.getElementById('previewHorario').textContent = formatarDataHora(document.getElementById('horarioPedido').value) || '-';
    document.getElementById('previewTotal').textContent = formatarMoeda(parseFloat(document.getElementById('valorPedido').value) || 0);
    
    const descricao = document.getElementById('descricaoPedido').value;
    const previewItens = document.getElementById('previewItens');
    if (descricao.trim()) {
        previewItens.innerHTML = descricao.split('\n').map(linha => 
            linha.trim() ? `<p class="mb-1">• ${linha.trim()}</p>` : ''
        ).join('');
    } else {
        previewItens.innerHTML = '<p class="text-gray-500 italic">Aguardando descrição do pedido...</p>';
    }

    const observacoes = document.getElementById('observacoesPedido').value;
    const previewObservacoes = document.getElementById('previewObservacoes');
    const previewObservacoesTexto = document.getElementById('previewObservacoesTexto');
    if (observacoes.trim()) {
        previewObservacoesTexto.textContent = observacoes;
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
    window.print();
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

    // Mostrar loading
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Copiando...';
    button.disabled = true;

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
    });
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
    const total = produto.preco * quantidade;
    
    const itemCalculadora = {
        id: produtoId,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: quantidade,
        total: total
    };
    
    produtosCalculadora.push(itemCalculadora);
    atualizarListaCalculadora();
    
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
    atualizarListaCalculadora();
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
    
    lista.innerHTML = produtosCalculadora.map((item, index) => `
        <div class="flex justify-between items-center bg-gray-50 p-2 rounded">
            <div class="flex-1">
                <span class="font-medium">${item.nome}</span>
                <br>
                <span class="text-sm text-gray-600">${item.quantidade}x ${formatarMoeda(item.preco)} = ${formatarMoeda(item.total)}</span>
            </div>
            <button onclick="removerProdutoCalculadora(${index})" class="text-red-600 hover:text-red-800 ml-2" title="Remover">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    const valorTotal = produtosCalculadora.reduce((sum, item) => sum + item.total, 0);
    totalGeral.textContent = formatarMoeda(valorTotal);
}
