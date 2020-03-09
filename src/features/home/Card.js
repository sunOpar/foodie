import React from 'react'
import Link from '../../components/Link'
import PropTypes from 'prop-types'

function Card({ title, content, href }) {
  return (
    <div className="card">
      <Link href={href}>
        <h3>{title} &rarr;</h3>
        <p>{content}</p>
      </Link>
      <style jsx>{`
        .card {
          margin: 1rem;
          height: 160px;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: #000;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          color: inhreit;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  href: PropTypes.string
}

export default Card
