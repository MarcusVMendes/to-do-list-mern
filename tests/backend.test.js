const frisby = require('frisby');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const {
  describe,
  it,
  beforeAll,
  afterEach,
  afterAll,
} = require('mocha');

const { expect } = require('chai');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/TodoListManager`;
const URL = 'localhost:3000';

describe('check task routes', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
    db = connection.db('TodoListManager');
    await db.collection('Tasks').deleteMany({});
  });

  afterEach(async () => {
    await db.collection('Tasks').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be validated that it is possible to create a task successfully', async () => {
    await frisby
      .post(`${URL}/task`, {
        taskName: 'Estudar NodeJS',
        status: 'pendente',
        createdAt: '16/02/2022',
      })
      .expect('status', 201)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        const task = body.taskName;
        const taskStatus = body.status;
        const taskCreatedAT = body.createdAt;
        expect(task).toEqual('Estudar NodeJS');
        expect(taskStatus).toEqual('pendente');
        expect(taskCreatedAT).toEqual('16/02/2022');
      });
  });
});
