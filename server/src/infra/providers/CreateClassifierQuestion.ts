import { IGetQuestion } from "../../domain/interfaces/IGetQuestion";

import { BayesClassifier } from "natural"
export class CreateClassifierQuestion implements IGetQuestion{

    private classifier: BayesClassifier

    constructor(){
        this.classifier = new BayesClassifier()

        this.classifier.addDocument("qual o elenco atual da furia cs", "O elenco atual da Fúria CS é composto por KSCERATO, Fallen, yuurih, molodoy e YEKINDAR.");
        this.classifier.addDocument("elenco", "O elenco atual da Fúria CS é composto por KSCERATO, Fallen, yuurih, molodoy e YEKINDAR.");
        this.classifier.addDocument("qual o treinador atual da furia", "O treinador da Fúria CS é Sidnei Macedo Pereira, ou 'Sidde' como é chamado.");
        this.classifier.addDocument("treinador", "Sidnei Macedo Pereira, conhecido como 'Sidde', é o treinador da Fúria.");
        this.classifier.addDocument("quem é o dono da furia", "Akari e Jaime Padua são os donos da organização Fúria.");
        this.classifier.addDocument("dono", "Akari e Jaime Padua são os donos da Fúria.");
        this.classifier.addDocument("quem são os jogadores da furia", "Os jogadores da Fúria CS são KSCERATO, Fallen, yuurih, molodoy e YEKINDAR.");
        this.classifier.addDocument("jogadores", "Os jogadores da Fúria CS são KSCERATO, Fallen, yuurih, molodoy e YEKINDAR.")
        this.classifier.addDocument("quantos jogadores tem a furia no elenco", "O elenco da Fúria tem 5 jogadores: KSCERATO, Fallen, yuurih, molodoy e YEKINDAR.");
        this.classifier.addDocument("onde a furia cs é sediada", "A Fúria CS é sediada no Brasil.");
        this.classifier.addDocument("qual a nacionalidade dos jogadores da furia", "Os jogadores da Fúria CS são brasileiros, com exceção de YEKINDAR e molodoy");
        this.classifier.addDocument("a furia já ganhou algum campeonato importante", "Sim, a Fúria já conquistou diversos títulos importantes, incluindo campeonatos internacionais no CS:GO.");
        this.classifier.addDocument("qual a história da furia no cs", "A Fúria tem se destacado no cenário competitivo de CS:GO, conquistando várias vitórias e tornando-se uma das equipes mais respeitadas do Brasil.");
        this.classifier.addDocument("qual o primeiro titulo ganho", "Foi o DreamHack Open Rio 2019 derrotando a INTZ.")
        this.classifier.addDocument("primeiro titulo", "Foi o DreamHack Open Rio 2019 derrotando a INTZ.")
        this.classifier.addDocument("quem é o capitão da furia", "O capitão da Fúria CS é Fallen.");
        this.classifier.addDocument("quando a furia foi fundada", "A Fúria foi fundada em 2017.");
        this.classifier.addDocument("qual é o maior rival da furia", "Os maiores rivais da Fúria CS são equipes como MIBR, Pain e Imperial.");
        this.classifier.addDocument("rival","Os maiores rivais da Fúria CS são equipes como MIBR, Pain e Imperial.")
        this.classifier.train()
    }

    getQuestion(message: string): string {
        const answer = this.classifier.classify(message)
        return answer
    }

}