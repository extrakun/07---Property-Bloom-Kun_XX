# Property Bloom

You are to simulate a property boom with this mini-project. Imagine a small town is being represented by a 8x8 array, with each cell representing a house.

Here are the rules of the simulation:

 * Each 'cell' in the array has a number ranging from 0 to 3
 * A cell that has a 0 is empty, and has no house here. If the cell has a 1, 2, or 3, then there's a house in it, and the number is the value of the house
 * Every year, each cell's value will change according to the rules below:
   * If a house has less than two neighbouring houses, its value drops by 1, but never below 0.
   * If a house is next to two or three neighbouring houses, its value increase by 1, up to a maximum of 3.
   * If a house is is next to **more than 3** neighbouring houses, its value drops by 1, but never below 0
   * Any cell that has a 0 becomes a 1 if it is adjacent to 3 or more houses.
   * If none of the above applies, the cell's value stays the same.

**Note**: Adjacent means up, down, left, right and the diagonals

The skeleton code has been written. All you have to do is to implement the simulation logic in the `simulate()` function. You shoud perform the checks on the `map` array but store the results in the `temp` array.

