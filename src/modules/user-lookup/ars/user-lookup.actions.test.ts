/* Libs */
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
/* --- Libs */

/* Actions */
import * as actions from './user-lookup.actions';
/* --- Actions */

/* Test Config */
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
/* --- Test Config */

describe('userLookup: actions', () => {
  describe('SETTERS:', () => {
    describe('userLookupSetLoading', () => {
      it('should return the correct object', () => {
        const value = actions.userLookupSetLoading(true);
        expect(value).to.deep.equal({
          payload: true,
          type: "USER_LOOKUP_SET_LOADING"
        });
      });
    });
    describe('userLookupSetResults', () => {
      it('should return the correct object', () => {
        const pl = [{name: 'one test', avatar_url: 'image.jpg', username: 'username'}];
        const value = actions.userLookupSetResults(pl);
        expect(value).to.deep.equal({
          payload: pl,
          type: "USER_LOOKUP_SET_RESULTS"
        });
      });
    });
    describe('userLookupSetWatching', () => {
      it('should return the correct object', () => {
        const value = actions.userLookupSetWatching(true);
        expect(value).to.deep.equal({
          payload: true,
          type: "USER_LOOKUP_SET_WATCHING"
        });
      });
    });
    describe('userLookupSetTempStartPosition', () => {
      it('should return the correct object', () => {
        const value = actions.userLookupSetTempStartPosition(0);
        expect(value).to.deep.equal({
          payload: 0,
          type: "USER_LOOKUP_SET_TEMP_START_POSITION"
        });
      });
    });
    describe('userLookupSetSearchString', () => {
      it('should return the correct object', () => {
        const value = actions.userLookupSetSearchString('test');
        expect(value).to.deep.equal({
          payload: 'test',
          type: "USER_LOOKUP_SET_SEARCH_STRING"
        });
      });
    });
    describe('userLookupResetSearch', () => {
      it('should return the correct object', () => {
        const value = actions.userLookupResetSearch();
        expect(value).to.deep.equal({
          type: "USER_LOOKUP_RESET_SEARCH"
        });
      });
    });
  });
  describe('ACTIONS:', () => {
    describe('userLookupSearch', () => {
      const appState = {
        userLookup: {
          userList: [
            {
              "username": "pturner0",
              "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
              "name": "Paula Turner"
            },
            {
              "username": "pdixon1",
              "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
              "name": "Patrick Dixon"
            }
          ],
          searchResults: [],
          watching: false,
          tempStartPosition: 0,
          tempComment: '',
          searchString: ''
        }
      };
      const store = mockStore(appState);
      const expectedActions = [
        {
          payload: true,
          type: "USER_LOOKUP_SET_LOADING"
        },
        {
          payload: 'test',
          type: "USER_LOOKUP_SET_SEARCH_STRING"
        },
        {
          payload: [],
          type: "USER_LOOKUP_SET_RESULTS"
        },
        {
          payload: false,
          type: "USER_LOOKUP_SET_LOADING"
        }
      ];
      store.dispatch(actions.userLookupSearch({searchTerm: "test"}));
      expect(store.getActions()).deep.equal(expectedActions);
    });
  });
});