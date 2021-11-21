// Requiring module
const chai = require('chai')
const app = require('../server')
const chaiHttp = require('chai-http')

chai.use(chaiHttp);
chai.should();
let expect = chai.expect
// We can group similar tests inside a describe block
describe("Simple BMI Calculations", () => {
  before(() => {
    console.log( "This part executes once before all tests" );
  });
  
  after(() => {
    console.log( "This part executes once after all tests" );
  });
      
  // We can add nested blocks for different tests
  describe( "Positive Test Case: To Handle BMI Request", () => {  
    it("Test Case to check if BMI Handler is working fine", (done) => {
      chai.request(app)
      .post('./server.js')
      .send({})
      .end((err, res) => {
        console.log("res", res)
        res.should.have.status(200);
        expect(res.body.status).to.be.true;
        done();
      })
    });
  });
});