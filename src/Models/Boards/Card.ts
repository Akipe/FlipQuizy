import type { Question } from "./Cards/Question"
import type { Answer } from "./Cards/Answer"

export class Card
{
    private _hasBeenUsed: boolean
    private _reward: number
    private _question: Question
    private _answer: Answer

    constructor(question: Question, answer: Answer)
    {
        this._hasBeenUsed = false
        this._reward = 0
        this._question = question
        this._answer = answer
    }

    public set reward(value: number)
    {
        this._reward = value
    }

    public get reward(): number
    {
        return this._reward
    }

    public set question(value: Question)
    {
        this._question = value
    }

    public get question(): Question
    {
        return this._question
    }

    public set answer(value: Answer)
    {
        this._answer = value
    }

    public get answer(): Answer
    {
        return this._answer
    }

    public Open(): void
    {
        this._hasBeenUsed = true
    }
}
