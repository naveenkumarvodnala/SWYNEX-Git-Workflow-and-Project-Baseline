
const { test } = require('node:test');
const assert = require('node:assert');
const { getAppInfo, healthCheck } = require('../src/app');

test('Application information should be correct', () => {
    const info = getAppInfo();

    assert.strictEqual(info.name, 'SWYNEX Git Workflow Project');
    assert.strictEqual(info.version, '1.0.0');
    assert.strictEqual(info.status, 'Running');
});

test('Health check should return healthy status', () => {
    const result = healthCheck();

    assert.strictEqual(result.status, 'Healthy');
    assert.strictEqual(
        result.message,
        'Application is working correctly'
    );
});
