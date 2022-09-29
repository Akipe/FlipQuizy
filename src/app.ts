import { defineComponent } from 'vue'
import { Card } from './Models/Boards/Card'
import { Answer } from './Models/Boards/Cards/Answer'
import { Question } from './Models/Boards/Cards/Question'
import { Category } from './Models/Boards/Category'
import { Game } from './Models/Game'
import { Team } from './Models/Team'

export default defineComponent({
    data() {
        return {
            currentGame: new Game()
        }
    },
    mounted() {

        this.currentGame.teamsManager.add(new Team("Coco"))
        this.currentGame.teamsManager.add(new Team("Toto"))
        this.currentGame.newBoard()
        this.currentGame.board.categoriesManager.add(new Category("Velo"))
        this.currentGame.board.categoriesManager.add(new Category("Bateau"))
        this.currentGame.board.categoriesManager.add(new Category("Auto"))

        let cardVeloHowMany = new Card(
            new Question("Combien de vélo ?"),
            new Answer("10")
        );
        cardVeloHowMany.reward = 100

        let cardVeloSize = new Card(
            new Question("Taille d'un vélo ?"),
            new Answer("1m50")
        );
        cardVeloSize.reward = 200

        let cardBateauProfondeur = new Card(
            new Question("Quelle profondeur ?"),
            new Answer("350m")
        );
        cardBateauProfondeur.reward = 300

        let cardAutoSpeed = new Card(
            new Question("Quelle vitesse une voiture ?"),
            new Answer("300 km/h")
        );
        cardAutoSpeed.reward = 100

        this.currentGame.board.categoriesManager.getAll()[0].cards.add(cardVeloHowMany)
        this.currentGame.board.categoriesManager.getAll()[0].cards.add(cardVeloSize)
        this.currentGame.board.categoriesManager.getAll()[1].cards.add(cardBateauProfondeur)
        this.currentGame.board.categoriesManager.getAll()[2].cards.add(cardAutoSpeed)

        console.log(this.currentGame)
    }
})
