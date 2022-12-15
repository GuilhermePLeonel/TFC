import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as bcrypt from 'bcryptjs';

import App from '../app';
import User from '../database/models/users';
import { Response } from 'superagent';

const userMock = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Testando a rota login', () => {
  let chaiHttpResponse: Response; 

  beforeEach(async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);
  });

  afterEach(() => {
(User.findOne as sinon.SinonStub).restore();
  });


    it('Login feito', async () => {
      sinon.stub(bcrypt, 'compareSync').returns(true);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "admin@admin.com",
          "password": "secret_admin"
        });

      expect(chaiHttpResponse.status).to.be.equal(200);

      (bcrypt.compareSync as sinon.SinonStub).restore(); 
    });
    it('Login com email ou senha invalidos', async () => {
      sinon.stub(bcrypt, 'compareSync').returns(false);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          "email": "admin@admin.com",
          "password": "pessego"
        });

      expect(chaiHttpResponse.status).to.be.equal(401);

      (bcrypt.compareSync as sinon.SinonStub).restore(); 
    });

    describe('Validação do token', () => {
      it('Login com token correto', async () => {
        const token = {
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2NjkzOTg5MDksImV4cCI6MTY2OTQ4NTMwOX0.uWwq79vuBzN-4amiV8LotjI9CtR5d8qiUuY19Cea4xw',
        }
        chaiHttpResponse = await chai
          .request(app)
          .get('/login/validate')
          .set(token);
  
        expect(chaiHttpResponse.status).to.be.equal(200);
      });
      it('Login com token invalido', async () => {
        const token = {
          authorization: 'paranguaquitimiribirruaro',
        }
        chaiHttpResponse = await chai.request(app).get('/login/validate').set(token);
  
        expect(chaiHttpResponse.status).to.be.equal(200);
      });
    })
  });