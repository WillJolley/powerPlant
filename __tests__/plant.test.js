import storeState from '../src/js/plant.js';

describe('feed', () => {
  
  test('should increase soil state by 1', () => {
    const newState = stateControl(feed);
    expect(storeState).toEqual(1);
  })
});