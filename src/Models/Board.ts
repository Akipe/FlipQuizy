import type { Category } from "./Boards/Category"
import { ElementManager } from "./Helper/ElementManager";

export class Board
{
    private _name: string
    private _categories: ElementManager<Category>

    constructor()
    {
        this._name = "";
        this._categories = new ElementManager<Category>();
    }

    public set name(value: string)
    {
        this._name = value
    }

    public get name(): string
    {
        return this._name;
    }

    public get categoriesManager(): ElementManager<Category>
    {
        return this._categories;
    }
}
