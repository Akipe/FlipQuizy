import type { Team } from './Team'
import { Board } from './Board'
import { ElementManager } from './Helper/ElementManager'

export class Game
{
    private _teams: ElementManager<Team>
    private _board: Board

    constructor()
    {
        this._teams = new ElementManager<Team>();
        this._board = new Board();
    }

    public newBoard(): void
    {
        this._board = new Board();
    }

    public get board(): Board
    {
        return this._board;
    }

    public get teamsManager(): ElementManager<Team>
    {
        return this._teams
    }
}
