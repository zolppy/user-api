import client from '../config/db.js'

const search = async (field, value) => {
  const query = `SELECT * FROM public.user WHERE ${field} = $1`
  const result = await client.query(query, [value])

  return result.rows.length > 0
}

export default search
