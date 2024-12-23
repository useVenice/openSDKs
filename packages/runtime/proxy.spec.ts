/* eslint-disable */

test('should get property value through proxy', () => {
  const target: {[key: string]: any} = {message: 'Hello, world!'}
  const proxy = new Proxy(target, {
    get: (obj, prop) => {
      return prop in obj ? (obj as any)[prop] : {GET: (arg: unknown) => arg}
    },
  })
  Object.assign(proxy, {override: 'This is an override'})

  expect(proxy['override']).toBe('This is an override')
  expect(proxy['message']).toBe('Hello, world!')
  expect(proxy['/nonExistent'].GET('missing')).toBe('missing')

  const proxy2 = new Proxy(target, {
    get: () => {
      return 'from proxy'
    },
  })
  Object.assign(proxy2, {override: 'This is an override'})
  expect(proxy2['override']).toBe('from proxy')
  expect(proxy2['message']).toBe('from proxy')
  expect(proxy2['/nonExistent']).toBe('from proxy')
})

test('should set property value through proxy', () => {
  const target = {message: 'Hello, world!'}

  const proxy = new Proxy(target, {
    set: (obj, prop, value) => {
      ;(obj as any)[prop] = value
      return true
    },
  })

  proxy.message = 'Hello, Jest!'
  expect(target.message).toBe('Hello, Jest!')
})

test('should delete property through proxy', () => {
  const target = {message: 'Hello, world!'}

  const proxy = new Proxy(target, {
    deleteProperty: (obj, prop) => {
      if (prop in obj) {
        delete (obj as any)[prop]
        return true
      }
      return false
    },
  })

  delete (proxy as any).message
  expect(target.message).toBeUndefined()
})
