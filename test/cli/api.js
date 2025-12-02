import test from 'ava'
import sinon from 'sinon'
import proxyquire from 'proxyquire'

const fetchStub = sinon.stub()

const api = proxyquire('../../src/cli/api', {
  'node-fetch': fetchStub,
  '../conf': { host: 'localhost', port: 2000 }
})

test.beforeEach(() => {
  fetchStub.resetHistory()
})

test('fetch should parse JSON when content-type is application/json', async t => {
  fetchStub.resolves({
    ok: true,
    headers: { get: () => 'application/json' },
    json: () => Promise.resolve({ foo: 'bar' })
  })

  const result = await api.fetch('test')
  t.deepEqual(result, { foo: 'bar' })
})

test('fetch should return text when content-type is not application/json', async t => {
  fetchStub.resolves({
    ok: true,
    headers: { get: () => 'text/plain' },
    text: () => Promise.resolve('ok')
  })

  const result = await api.fetch('test')
  t.is(result, 'ok')
})

test('fetch should return text when content-type is missing', async t => {
  fetchStub.resolves({
    ok: true,
    headers: { get: () => null },
    text: () => Promise.resolve('')
  })

  const result = await api.fetch('test')
  t.is(result, '')
})
