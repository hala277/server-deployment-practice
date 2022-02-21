'use strict'

const server = require('../server.js');

// i will use super test to test my server
const supertest = require('supertest');

// here I can fake running my server to test my server
const request = supertest(server.app);

describe('testing API server',() => {
    // start unit test
    // it is for add test case, senario
    it('testing /', async() => {
        const response = await request.get('/');
        // console.log(response);
        expect(response.text).toEqual('home route');
        // or 
        // expect(response.status).toEqual(200);

    })

    it('test /data', async() => {
const response = await request.get('/data');
// console.log(response);
expect(typeof response.body).toEqual('object');

    } )
})
