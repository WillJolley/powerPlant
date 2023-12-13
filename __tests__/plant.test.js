import storeState from '../src/plant.js';

describe('feed', () => {
  
  test('should increase soil state by 1', () => {
    const newState = stateControl(feed);
    expect(newState).toEqual(1);
  })
});