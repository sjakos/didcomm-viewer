import React, { useEffect, useState } from 'react'
import { agent } from './veramo/setup'

export const App = () => {
  const [didDoc, setDidDoc] = useState();
  const [didUrl, setDidUrl] = useState('did:key:z6MktUAq41YHngp2Yh1gvstPct1aMJadb29AXj2NastgRKD4')

  const resolve = async () => {
    const doc = await agent.resolveDid({
      didUrl,
    })

    setDidDoc(doc)
  }

  useEffect(() => {
    resolve()
  }, [])

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">DIDComm Viewer</h1>
          </div>
        </header>
        <main>
          <div class="grid grid-cols-2 gap-4">
            <div>

              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <label for="did-url" className={[
                  'block',
                  'mb-2',
                  'text-sm',
                  'font-medium',
                  'text-gray-900',
                  'dark:text-gray-300'
                ].join(' ')}>DID URL</label>
                <input type="text" id="did-url" onChange={({ target: { value } }) => setDidUrl(value)} className={[
                  'bg-gray-50',
                  'border',
                  'border-gray-300',
                  'text-gray-900',
                  'text-sm',
                  'rounded-lg',
                  'focus:ring-blue-500',
                  'focus:border-blue-500',
                  'block',
                  'w-full',
                  'p-2.5',
                  'dark:bg-gray-700',
                  'dark:border-gray-600',
                  'dark:placeholder-gray-400',
                  'dark:text-white',
                  'dark:focus:ring-blue-500',
                  'dark:focus:border-blue-500'
                ].join(' ')} placeholder="did:example:01fa3066def946018677b3a2b58f18ab" required />
                <button className='my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => resolve()}>Resolve</button>
              </div>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
                <label for="result" className={[
                  'block',
                  'mb-2',
                  'text-sm',
                  'font-medium',
                  'text-gray-900',
                  'dark:text-gray-300'
                ].join(' ')}>DID Document</label>
                <div className="p-6 sm:px-2 overflow-x-auto border border-gray-300 rounded-lg">
                  <pre id="result">{didDoc && JSON.stringify(didDoc, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App;
