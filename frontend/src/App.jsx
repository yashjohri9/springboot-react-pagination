import React, { useEffect, useState } from 'react'

const API_BASE = 'http://localhost:8080/api/books'


export default function App() {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(0)
  const [size] = useState(5)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(`${API_BASE}?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setBooks(data.content)
        setTotalPages(data.totalPages)
      })
      .catch(err => console.error(err))
  }, [page, size])

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Books</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>ID</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Title</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td style={{ padding: '8px 0' }}>{b.id}</td>
              <td style={{ padding: '8px 0' }}>{b.title}</td>
              <td style={{ padding: '8px 0' }}>{b.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setPage(0)} disabled={page === 0}>First</button>
        <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>Prev</button>
        <span>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1}>Next</button>
        <button onClick={() => setPage(totalPages - 1)} disabled={page >= totalPages - 1}>Last</button>
      </div>
    </div>
  )
}
