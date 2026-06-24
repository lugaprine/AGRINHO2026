const flashcardsData = [
    { front: "🌾 Trigo Encantado", back: "Grão fundamental. Na fantasia, cresce com poeira de fada e produz pão que dá energia vital." },
    { front: "🐄 Vaca Lunar", back: "Produz leite e carne. Sob a lua cheia, seu leite ganha propriedades mágicas de cura." },
    { front: "🌱 Rotação de Culturas", back: "Técnica para manter a fertilidade do solo. Magos agrônomos a usam para infundir mana na terra." },
    { front: "🚜 Trator dos Elfos", back: "Máquina que facilita o trabalho. Os elfos a guiam com feitiços de harmonia." },
    { front: "🍅 Tomate Místico", back: "Rico em nutrientes. Na fantasia, protege contra pragas demoníacas." },
    { front: "🐔 Galinhas das Fadas", back: "Produzem ovos. As galinhas encantadas colocam ovos dourados de prosperidade." },
    
    // 🔥 Novos Flashcards
    { front: "🌳 Pomar dos Druidas", back: "Árvores frutíferas que crescem com magia natural. Produzem frutas com poderes curativos." },
    { front: "🐎 Cavalo Alado", back: "Animal de tração e transporte. Na fantasia, pode voar curtas distâncias ao amanhecer." },
    { front: "🌿 Adubo Encantado", back: "Composto orgânico que acelera o crescimento. Feito com essência de floresta ancestral." },
    { front: "🐖 Porco das Montanhas", back: "Produz carne suína. Sua banha é usada em poções de proteção contra o frio." },
    { front: "☀️ Irrigação Solar", back: "Sistema que usa energia do sol para levar água às plantas com feitiços de evaporação controlada." },
    { front: "🌽 Milho Dourado", back: "Cultivo energético. Suas espigas brilham ao pôr do sol e alimentam exércitos inteiros." },
    
    { front: "🐑 Ovelhas das Nuvens", back: "Produzem lã mágica. Sua lã é leve como nuvem e protege do fogo." },
    { front: "🧪 Controle Biológico", back: "Uso de insetos benéficos contra pragas. Invocado por druidas para manter o equilíbrio." },
    { front: "🥕 Cenoura das Fadas", back: "Melhora a visão noturna. Muito usada por guardiões das florestas." },
    { front: "🐝 Apicultura Mística", back: "Criação de abelhas que produzem mel com propriedades mágicas de cura e energia." },
    { front: "🌾 Colheita Lunar", back: "Feita durante a lua cheia para maximizar o poder mágico dos alimentos." },
    { front: "🌍 Solo Vivo", back: "Terra rica em microrganismos encantados. A base de toda agricultura próspera." }
];

function createFlashcards() {
    const deck = document.getElementById('flashcard-deck');
    deck.innerHTML = '';

    flashcardsData.forEach(card => {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div style="font-size:2.5rem;margin-bottom:1rem;">${card.front}</div>
                    <p>Clique para revelar o segredo...</p>
                </div>
                <div class="card-back">
                    <div style="font-size:1.4rem;margin-bottom:1rem;color:#ffd700;">Revelação Mística</div>
                    <p>${card.back}</p>
                </div>
            </div>
        `;
        flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
        deck.appendChild(flashcard);
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    const deck = document.getElementById('flashcard-deck');
    deck.style.opacity = '0';
    setTimeout(() => {
        flashcardsData.sort(() => Math.random() - 0.5);
        createFlashcards();
        deck.style.opacity = '1';
    }, 300);
});

window.onload = createFlashcards;