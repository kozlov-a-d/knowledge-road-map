/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
// Then either:
const expect = chai.expect;
// or:
const assert = chai.assert;
// or:
chai.should();
// according to your preference of assertion style

describe('Example', function() {

    describe('Example subsection', function() {

        before(function() {
            // runs before all tests in this block
        });

        it('promise should be fulfilled', async function() {
            const promise = () => new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 10)
            })
            return expect(promise()).to.eventually.equal(true);
        }); 

        it('test 2', function() {
            assert.equal(0, 0);
        });
       
    });
});