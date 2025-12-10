import React, { useEffect, useState } from 'react'

function Github() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGithub() {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch('https://api.github.com/users/ck-solo'),
          fetch('https://api.github.com/users/ck-solo/repos?per_page=5&sort=updated')
        ])
        if (!uRes.ok || !rRes.ok) throw new Error('GitHub API error')
        const u = await uRes.json()
        const r = await rRes.json()
        setUser(u)
        setRepos(Array.isArray(r) ? r : [])
      } catch (err) {
        setError(err.message || 'Failed to load')
      } finally {
        setLoading(false)
      }
    }
    fetchGithub()
  }, [])

  // simple dummy fallback data shown while loading or on error
  const dummy = {
    login: 'ck-solo',
    avatar_url: '/placeholder.png', // replace with local image if you want
    bio: 'Full‑stack dev · demo data',
    public_repos: 0,
    followers: 0,
    following: 0,
  }
  const show = user ?? dummy
  const repoList = repos.length ? repos : [
    { id: 'd1', name: 'demo-repo-1', description: 'Sample repo description' },
    { id: 'd2', name: 'demo-repo-2', description: 'Another sample' },
    { id: 'd3', name: 'demo-repo-3', description: 'More demo data' },
  ]

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 bg-gray-400">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
        <img
          src={show.avatar_url}
          alt={show.login + ' avatar'}
          className="w-28 h-28 object-cover mx-auto mb-4 rounded-md" /* use rounded-none to remove radius */
        />

        <h1 className="text-2xl font-bold mb-1">Github Repositories : {show.public_repos}</h1>
        <p className="text-sm text-gray-600 mb-4">{show.bio}</p>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="mt-6 text-left">
          <h2 className="text-lg font-semibold mb-2">Top repos</h2>
          <ul className="space-y-3">
            {repoList.map((r) => (
              <li key={r.id ?? r.name} className="p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-sm text-gray-600">{r.description ?? 'No description'}</div>
                  </div>
                  <div className="text-xs text-gray-500">{/* optionally show stars/watchers */}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <span className="mr-4">Followers: {show.followers}</span>
          <span className="mr-4">Followings: {show.following}</span>
        </div>
      </div>
    </div>
  )
}

export default Github

 

//  the below code is used to fetch data before rendering the component and  it can be used in the loader prop of the route
export const GithubInfo = async () =>{
    const response = await fetch('https://api.github.com/users/ck-solo')
    return  response.json()
}