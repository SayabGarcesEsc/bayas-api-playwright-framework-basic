import { test, expect } from '@playwright/test';

// Scenario A: Standard GET Request
test('Verify a GET endpoint returns specific data', async ({ request }) => {
  // Makes a request appeneded directly to the configured baseURL
  const response = await request.get('/posts/1');

  // Validate Response Status is 200
  await expect(response.status()).toBe(200);

  // Parse and validate the response payload
  const body = await response.json();
  
  expect(body.id).toBe(1);
  expect(body.title).toBeTruthy();
});

// Scenario B: Standard POST Request with Paylaod
test('Verify a POST request successfully registers data', async ({ request }) => {
  const response = await request.post('/posts', {
    data: {
      title: 'Testing with Playwright',
      body: 'Automated API validation',
      userId: 1,
    }
  });

  // Validate the HTTP response creation code
  expect(response.status()).toBe(201);

  // Validate the returned object structure matches expectations
  const body = await response.json();
  expect(body).toMatchObject({
    title: 'Testing with Playwright',
    body: 'Automated API validation',
    userId: 1,
  });
});
