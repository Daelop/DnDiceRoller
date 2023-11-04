import { rollDice } from "./diceRoll"
import {test, expect} from "vitest";

test("the dice rolls a number", () =>
{
    expect(rollDice(6,1)).toBeTypeOf(Array)
})

