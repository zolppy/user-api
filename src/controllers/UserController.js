import client from '../config/db.js'

class UserController {
  async create(req, res) {
    const query =
      'INSERT INTO public.user(name, birthday, tel, email) VALUES($1, $2, $3, $4) RETURNING *'

    const { name, birthday, tel, email } = req.body

    try {
      const result = await client.query(query, [name, birthday, tel, email])
      res.status(201).json(result.rows[0])
    } catch (err) {
      console.error('Falha ao adicionar usuário:', err)
      res.status(500).json({ error: 'Erro ao criar usuário' })
    }
  }

  async findAll(_, res) {
    const query = 'SELECT * FROM public.user'

    try {
      const result = await client.query(query)
      res.status(200).json(result.rows)
    } catch (err) {
      console.error('Falha ao buscar usuários:', err)
      res.status(500).json({ error: 'Erro ao buscar usuários' })
    }
  }

  async findById(req, res) {
    const query = 'SELECT * FROM public.user WHERE id = $1'
    const { id } = req.params

    try {
      const result = await client.query(query, [id])
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0])
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' })
      }
    } catch (err) {
      console.error('Falha ao buscar usuário:', err)
      res.status(500).json({ error: 'Erro ao buscar usuário' })
    }
  }

  async update(req, res) {
    const query =
      'UPDATE public.user SET name = $1, birthday = $2, tel = $3, email = $4 WHERE id = $5 RETURNING *'
    const { name, birthday, tel, email } = req.body
    const { id } = req.params

    try {
      const result = await client.query(query, [name, birthday, tel, email, id])
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0])
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' })
      }
    } catch (err) {
      console.error('Falha ao atualizar usuário:', err)
      res.status(500).json({ error: 'Erro ao atualizar usuário' })
    }
  }

  async delete(req, res) {
    const query = 'DELETE FROM public.user WHERE id = $1 RETURNING *'
    const { id } = req.params

    try {
      const result = await client.query(query, [id])
      if (result.rows.length > 0) {
        res.status(200).json({ message: 'Usuário removido com sucesso' })
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' })
      }
    } catch (err) {
      console.error('Falha ao remover usuário:', err)
      res.status(500).json({ error: 'Erro ao remover usuário' })
    }
  }
}

// Padrão Singleton
export default new UserController()
