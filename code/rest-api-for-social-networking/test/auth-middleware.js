const { expect } = require('chai');
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

const authMiddleware = require('../middleware/is-auth');

describe('Auth Middleware', () => {
  it('should throw an error if no authorization header is present', () => {
    const req = {
      get: (headerName) => null,
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      'Not authenticated.'
    );
  });

  it('should throw an error if the authorization header is only one string', () => {
    const req = {
      get: (headerName) => 'xyz',
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it('should throw an error if the token cannot be verified', () => {
    const req = {
      get: (headerName) => 'Bearer xyz',
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      'jwt malformed'
    );
  });

  it('should yield a userId after decoding the token', () => {
    const req = {
      get: (headerName) => 'Bearer aDummyValidJwtToken',
    };
    sinon.stub(jwt, 'verify');
    jwt.verify.returns({ userId: 'ps003' });
    authMiddleware(req, {}, () => {});
    expect(jwt.verify.called).to.be.true;
    expect(req).to.have.property('userId');
    expect(req.userId).to.equal('ps003');
    jwt.verify.restore();
  });
});
