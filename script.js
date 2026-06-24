const flashcardsData = [
    { front: "🌾 Trigo Encantado", back: "Grão fundamental. Na fantasia, cresce com poeira de fada e produz pão que dá energia vital." },
    { front: "🐄 Vaca Lunar", back: "Produz leite e carne. Sob a lua cheia, seu leite ganha propriedades mágicas de cura." },
    { front: "🌱 Rotação de Culturas", back: "Técnica para manter a fertilidade do solo. Magos agrônomos a usam para infundir mana na terra." },
    { front: "🚜 Trator dos Elfos", back: "Máquina que facilita o trabalho. Os elfos a guiam com feitiços de harmonia." },
    { front: "🍅 Tomate Místico", back: "Rico em nutrientes. Na fantasia, protege contra pragas demoníacas." },
    { front: "🐔 Galinhas das Fadas", back: "Produzem ovos. As galinhas encantadas colocam ovos dourados de prosperidade." }
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