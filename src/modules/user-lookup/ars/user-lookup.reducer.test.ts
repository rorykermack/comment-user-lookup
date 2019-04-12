/* Libs */
import {expect} from 'chai';
/* --- Libs */

/* Reducer */
import Reducer from './user-lookup.reducer';
/* --- Reducer */

/* State */
import InitialState from './user-lookup.initial-state';
/* --- State */

describe('userLookup: Reducer', () => {
  it('should return the initial state', () => {
    expect(Reducer(undefined, {})).to.deep.equal(InitialState);
  });
  describe('SETTERS', () => {
    describe('USER_LOOKUP_SET_RESULTS', () => {
      it('should return the expected result', () => {
        const expected = InitialState.set('searchResults', [{name: 'james bob', avatar_url: 'image.jpg', username: 'jamesbob'}]);
        const value = Reducer(undefined, {
          type: "USER_LOOKUP_SET_RESULTS",
          payload: [{name: 'james bob', avatar_url: 'image.jpg', username: 'jamesbob'}]
        });
        expect(expected).to.deep.equal(value);
      });
    });
    describe('USER_LOOKUP_SET_WATCHING', () => {
      it('should return the expected result', () => {
        const expected = InitialState.set('watching', true);
        const value = Reducer(undefined, {
          type: "USER_LOOKUP_SET_WATCHING",
          payload: true
        });
        expect(expected).to.deep.equal(value);
      });
    });
    describe('USER_LOOKUP_SET_TEMP_START_POSITION', () => {
      it('should return the expected result', () => {
        const expected = InitialState.set('tempStartPosition', 2);
        const value = Reducer(undefined, {
          type: "USER_LOOKUP_SET_TEMP_START_POSITION",
          payload: 2
        });
        expect(expected).to.deep.equal(value);
      });
    });
    describe('USER_LOOKUP_SET_SEARCH_STRING', () => {
      it('should return the expected result', () => {
        const expected = InitialState.set('searchString', 'testing');
        const value = Reducer(undefined, {
          type: "USER_LOOKUP_SET_SEARCH_STRING",
          payload: 'testing'
        });
        expect(expected).to.deep.equal(value);
      });
    });
    describe('USER_LOOKUP_RESET_SEARCH', () => {
      it('should return the expected result', () => {
        const expected = InitialState.set('searchString', '').set('searchResults', []).set('watching', false);
        const value = Reducer(undefined, {
          type: "USER_LOOKUP_RESET_SEARCH",
        });
        expect(expected).to.deep.equal(value);
      });
    });
  });
});