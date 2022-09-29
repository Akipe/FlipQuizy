export abstract class CardContent
{
    private _content: string

    constructor(content: string)
    {
        this._content = content
    }

    public set content(value: string)
    {
        this._content = value
    }

    public get content(): string
    {
        return this._content
    }
}