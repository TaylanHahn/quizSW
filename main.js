const perguntas = [
            {
                pergunta: "Qual é a nave pessoal de Darth Vader?",
                opcoes: ["Millenium Falcon", "TIE Fighter", "X-Wing", "TIE Avançado X1"],
                resposta: "TIE Avançado X1"
            },
            {
                pergunta: "Qual é o nome do planeta em que Luke Skywalker cresceu?",
                opcoes: ["Alderaan", "Tatooine", "Dagobah", "Hoth"],
                resposta: "Tatooine"
            },
            {
                pergunta: "Quem foi o mestre de Anakin Skywalker?",
                opcoes: ["Obi-Wan Kenobi", "Mestre Yoda", "Qui-Gon Jinn", "Han Solo"],
                resposta: "Obi-Wan Kenobi"
            },
            {
                pergunta: "Quem criou o universo de Star Wars?",
                opcoes: ["Quentin Tarantino", "George Lucas", "Steven Spielberg", "Christopher Nolan"],
                resposta: "George Lucas"
            },
            {
                pergunta: "Sem contar spin-offs, quantos filmes tem Star Wars?",
                opcoes: ["6 filmes", "8 filmes", "9 filmes", "10 filmes"],
                resposta: "9 filmes"
            },
            {
                pergunta: "Você gostou do quiz?",
                opcoes: ["sim", "não"],
                resposta: "sim"
            }
        ];

        const perguntaElemento = document.getElementById("pergunta");
        const opcoesElemento = document.getElementById("opcoes");
        const resultadoElemento = document.getElementById("resultado");

        let indicePerguntaAtual = 0;

        function carregarPergunta() {
            const perguntaAtual = perguntas[indicePerguntaAtual];
            perguntaElemento.textContent = perguntaAtual.pergunta;

            opcoesElemento.innerHTML = "";
            perguntaAtual.opcoes.forEach(opcao => {
                const botao = document.createElement("button");
                botao.textContent = opcao;
                botao.addEventListener("click", () => verificarResposta(opcao));
                opcoesElemento.appendChild(botao);
            })
        }

        function verificarResposta(respostaSelecionada) {
            const perguntaAtual = perguntas[indicePerguntaAtual];
            if (respostaSelecionada === perguntaAtual.resposta) {
                resultadoElemento.textContent = "Resposta correta!";
                resultadoElemento.className = "correto";
            } else {
                resultadoElemento.textContent = "Resposta incorreta. A resposta correta é:" + perguntaAtual.resposta;
                resultadoElemento.className = "incorreto";
            }

            // Avança para a próxima pergunta ou finaliza o quiz
            indicePerguntaAtual++;
            if (indicePerguntaAtual < perguntas.length) {
                setTimeout(carregarPergunta, 2000); // Carrega próxima pergunta após 2 segundos
            } else {
                resultadoElemento.textContent = "Que a Força esteja com você!";
                resultadoElemento.className = "concluido";
            }
        }

        // Carrega a primeira pergunta quando a página carrega
        carregarPergunta();
