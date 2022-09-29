export class ElementManager<type>
{
    private _elements: Array<type>

    constructor()
    {
        this._elements = new Array<type>
    }

    public add(element: type): void
    {
        this._elements.push(element)
    }

    public remove(element: type)
    {
        let indexToRemove = this._elements.indexOf(element);

        this._elements.splice(indexToRemove, 1)
    }

    public getAll(): Array<type>
    {
        return this._elements
    }
}