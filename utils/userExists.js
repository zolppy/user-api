import client from '../config/db.js'

// Verifica se um usuário existe, com base no campo e valor fornecidos
const userExists = async (fieldName, fieldValue) => {
  // Essa forma de consulta (via parâmetro "$1"), evita SQL Injection
  const query = `SELECT * FROM public.user WHERE ${fieldName} = $1`
  const result = await client.query(query, [fieldValue])

  return result.rows.length > 0 // Retorna "true" se encontrar um ou mais usuários
}

export default userExists
