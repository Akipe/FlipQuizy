export class Team
{
    private _name: string
    private _score: number

    constructor(name: string)
    {
        this._score = 0;
        this._name = name;
    }

    public set name(value: string)
    {
        this._name = value
    }

    public get name(): string
    {
        return this._name
    }

    public incrementScore(value: number): void
    {
        this._score += value
    }

    public get score(): number
    {
        return this._score
    }
}
