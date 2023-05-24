const searchCandies = require('./searchCandies');

describe('searchCandies function', () => {
  it('should return Mars and Maltesers when given "Ma" 10' , () => {
    expect(searchCandies('Ma', 10)).toEqual(["Mars", "Maltesers"]);
  });

  it('should return Mars when given "Ma" and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(["Mars"]);
  });

  it('should return Skitties, Skittles, Starburst when given "S" and 10', () => {
    expect(searchCandies('S', 10)).toEqual(["Skitties", "Skittles", "Starburst"]);
  });

  it ('should return Skitties, Skittles, when given "S" and 4', () => {
   expect(searchCandies('S', 4)).toEqual(["Skitties", "Skittles"]);
  });

  it('should return Mars and Maltesers when given "ma" 10' , () => {
    expect(searchCandies('ma', 10)).toEqual(["Mars", "Maltesers"]);
  });
});