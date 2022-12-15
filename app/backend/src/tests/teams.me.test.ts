import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as bcrypt from 'bcryptjs';
import App from '../app';
import Team from '../database/models/teams';
import {idTeamMock, allTeamsMock} from './mocks/teams.mock';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testando a rota teams', () => {
let reponse: Response;

it('Recebe uma lista com todos os times', async () => {
    sinon.stub(Team, 'findAll').resolves(allTeamsMock as any)

    reponse = await chai.request(app).get('/teams')

    expect(reponse.status).to.be.equal(200)
    expect(reponse.body).to.be.deep.equal(allTeamsMock);
});
it('Recebe o time referente ao id requisitado', async () => {
    sinon.stub(Team, 'findOne').resolves(idTeamMock as any)

    reponse = await chai.request(app).get('/teams/5')

    expect(reponse.status).to.be.equal(200)
    expect(reponse.body).to.be.deep.equal(idTeamMock);
});
});