import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }
        it('is imuttable', () => {
            let state = 42;
            let nextState = increment(state);
            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        })
    })

    describe('a list', () => {
        function addOneToList(currentState, oneToAdd) {
            return currentState.push(oneToAdd);
        }
        it('is immutable', () => {
            let state = List.of('one', 'two');
            let nextState = addOneToList(state, 'three');

            expect(nextState).to.equal(List.of(
                'one',
                'two',
                'three'
            ));
            expect(state).to.equal(List.of(
                'one',
                'two'
            ))
        })
    })

    describe('a tree', () => {
        function addOneToMap(currentState, newThing) {
            return currentState.set(
                'someThings',
                currentState.get('someThings').push(newThing)
            )
        }
        it('is immutable', () => {
            let state = Map({
                someThings: List.of('oneThing', 'secondThing')
            });
            let nextState = addOneToMap(state, 'thirdOne');
            expect(nextState).to.equal(Map({
                someThings: List.of(
                    'oneThing',
                    'secondThing',
                    'thirdOne'
                )
            }))
            expect(state).to.equal(Map({
                someThings: List.of(
                    'oneThing',
                    'secondThing'
                )
            }))
        });
    });
})