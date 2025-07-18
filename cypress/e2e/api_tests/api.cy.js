describe('API Testing on reqres.in with simplified requests', () => {

    // Test Case 1: POST - Create a new user
    it('should create a new user successfully', () => {
        cy.apiRequest('POST', '/users', {
            body: {
                name: 'John Doe',
                job: 'Software Engineer',
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'John Doe');
            expect(response.body).to.have.property('job', 'Software Engineer');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });

    // Test Case 2: GET - Retrieve user details
    it('should get user details successfully', () => {
        cy.apiRequest('GET', '/users/2').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id', 2);
            expect(response.body.data).to.have.property('email');
            expect(response.body.data).to.have.property('first_name');
            expect(response.body.data).to.have.property('last_name');
            expect(response.body.data).to.have.property('avatar');
        });
    });

    // Test Case 3: PUT - Update user details
    it('should update user details successfully', () => {
        cy.apiRequest('PUT', '/users/2', {
            body: {
                name: 'John Doe Updated',
                job: 'Senior Software Engineer',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'John Doe Updated');
            expect(response.body).to.have.property('job', 'Senior Software Engineer');
            expect(response.body).to.have.property('updatedAt');
        });
    });
    // Test Case 4: DELETE - Delete a user
    it('should delete a user successfully', () => {
        cy.apiRequest('DELETE', '/users/2').then((response) => {
            expect(response.status).to.eq(204);
        });
    });

    // Test Case 5: Register a new user
    it('register new user', () => {
        cy.apiRequest('POST', '/register', {
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('token');
        });
    });
    // Test Case 6: Register a new user with missing password
    it('register new user missing password', () => {
        cy.apiRequest('POST', '/register', {
            body: {
                email: 'eve.holt@reqres.in'
            },
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });
});
