import { useEffect, useState } from "react"

const UserDetails = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch("http://localhost:8000/api/user/allusers", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })

        const data = await response.json() // <-- await here

        if (!response.ok) {
          setError(data.message || "Failed to load users")
          return
        }

        setUsers(data.users)
      } catch (error) {
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserDetails