import type { Card } from "./Card"
import { ElementManager } from "../Helper/ElementManager"

export class Category
{
    private _name: string
    private _cards: ElementManager<Card>

    constructor(name: string)
    {
        this._name = name
        this._cards = new ElementManager<Card>()
    }

    public set name(value: string)
    {
        this._name = value
    }

    public get name(): string
    {
        return this._name
    }

    public get cards(): ElementManager<Card>
    {
        return this._cards
    }
}
