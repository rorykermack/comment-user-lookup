/* Libs */
import {expect} from 'chai';
/* --- Libs */

/* Function */
import lookupUser from './lookup-user';
/* --- Function */

describe("lookupUser", () => {
  it("should return false if params are missing", () => {
    const result = lookupUser();
    expect(result).to.equal(false);
  });

  it("should return false if less than three chars", () => {
    const result = lookupUser('te', []);
    expect(result).to.equal(false);
  });

  it("should return the user data if a match is found", () => {
    const result = lookupUser('tes', [
      {
        "username": "testing-testing",
        "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
        "name": "Paula Turner"
      },
      {
        "username": "pdixon1",
        "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
        "name": "Patrick Dixon"
      },
      {
        "username": "mhansen2",
        "avatar_url": "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
        "name": "Michael Hansen"
      },
    ]);
    expect(result[0]).to.deep.equal({
      "username": "testing-testing",
      "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
      "name": "Paula Turner"
    });
  });

  it("should return a set of possible users if multiple matches are found", () => {
    const result = lookupUser('tes', [
      {
        "username": "testing-testing",
        "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
        "name": "Paula Turner"
      },
      {
        "username": "pdixon1",
        "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
        "name": "Patrick Dixon"
      },
      {
        "username": "testing-besting",
        "avatar_url": "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
        "name": "Michael Hansen"
      },
    ]);
    expect((result as any[]).length).to.equal(2);
    expect(result[0]).to.deep.equal({
      "username": "testing-testing",
      "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
      "name": "Paula Turner"
    });
    expect(result[1]).to.deep.equal({
      "username": "testing-besting",
      "avatar_url": "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
      "name": "Michael Hansen"
    });
  });

  
});