import Team from "../Team";
import Character from "../Character";

describe('Team module', () => {
  test ('iterate on teams', () => {
    const ch1 = new Character("Лучник", "Bowman", 50, 1, 40, 10);
    const ch2 = new Character("Человек-паук", "Spiderman", 10, 1, 85, 25);
    expect([...new Team(ch1, ch2)]).toEqual([ch1, ch2]);
  })
})