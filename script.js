// Dados dos Flashcards (18 cards)
const flashcardsData = [
    { front: "🌾 Trigo Encantado", back: "Grão fundamental. Na fantasia, cresce com poeira de fada e produz pão que dá energia vital." },
    { front: "🐄 Vaca Lunar", back: "Produz leite e carne. Sob a lua cheia, seu leite ganha propriedades mágicas de cura." },
    { front: "🌱 Rotação de Culturas", back: "Técnica para manter a fertilidade do solo. Magos agrônomos a usam para infundir mana na terra." },
    { front: "🚜 Trator dos Elfos", back: "Máquina que facilita o trabalho. Os elfos a guiam com feitiços de harmonia." },
    { front: "🍅 Tomate Místico", back: "Rico em nutrientes. Na fantasia, protege contra pragas demoníacas." },
    { front: "🐔 Galinhas das Fadas", back: "Produzem ovos dourados que simbolizam prosperidade para a fazenda." },
    { front: "🌳 Pomar dos Druidas", back: "Árvores frutíferas que crescem com magia natural. Produzem frutas com poderes curativos." },
    { front: "🐎 Cavalo Alado", back: "Animal de tração. Na fantasia, pode voar curtas distâncias ao amanhecer." },
    { front: "🌿 Adubo Encantado", back: "Composto orgânico feito com essência de floresta ancestral." },
    { front: "🐖 Porco das Montanhas", back: "Sua banha é usada em poções de proteção contra o frio." },
    { front: "☀️ Irrigação Solar", back: "Sistema que usa energia do sol e feitiços de evaporação controlada." },
    { front: "🌽 Milho Dourado", back: "Suas espigas brilham ao pôr do sol e alimentam exércitos inteiros." },
    { front: "🐑 Ovelhas das Nuvens", back: "Produzem lã leve como nuvem que protege do fogo." },
    { front: "🧪 Controle Biológico", back: "Uso de insetos benéficos invocado por druidas." },
    { front: "🥕 Cenoura das Fadas", back: "Melhora a visão noturna dos guardiões da floresta." },
    { front: "🐝 Apicultura Mística", back: "Abelhas que produzem mel com propriedades de cura e energia." },
    { front: "🌾 Colheita Lunar", back: "Feita durante a lua cheia para maximizar o poder mágico dos alimentos." },
    { front: "🌍 Solo Vivo", back: "Terra rica em microrganismos encantados. Base de toda agricultura próspera." }
];

let currentCards = [...flashcardsData];

// Atualiza contador
function updateCounter() {
    const counter = document.getElementById('counter');
    counter.textContent = `${currentCards.length} cartas`;
}

// Cria os flashcards
function createFlashcards() {
    const deck = document.getElementById('flashcard-deck');
    deck.innerHTML = '';

    currentCards.forEach(card => {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-title">${card.front}</div>
                    <p style="opacity:0.8;">Clique para revelar o segredo...</p>
                </div>
                <div class="card-back">
                    <div class="card-title">Revelação Mística ✨</div>
                    <p style="font-size:1.15rem;line-height:1.6;">${card.back}</p>
                </div>
            </div>
        `;
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
        deck.appendChild(flashcard);
    });
    
    updateCounter();
}

// Embaralhar
document.getElementById('shuffle-btn').addEventListener('click', () => {
    currentCards = [...flashcardsData].sort(() => Math.random() - 0.5);
    const deck = document.getElementById('flashcard-deck');
    deck.style.opacity = '0';
    
    setTimeout(() => {
        createFlashcards();
        deck.style.opacity = '1';
    }, 400);
});

// Modo Estudo (mostra todos)
document.getElementById('study-btn').addEventListener('click', () => {
    currentCards = [...flashcardsData];
    createFlashcards();
});

// Inicialização
window.onload = () => {
    createFlashcards();
    
    console.log('%c🌟 Reino Místico da Agropecuária carregado!', 'color:#ffd700; font-size:16px;');
};