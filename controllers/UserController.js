import User from '../models/User.js'

class UserController {
  // Cria um novo usuário
  async create(req, res) {
    try {
      const { name, birthday, tel, email } = req.body

      // Verificar se já existe um usuário com o mesmo telefone ou e-mail
      const userExists =
        (await User.findOne({ where: { tel } })) ||
        (await User.findOne({ where: { email } }))
      if (userExists) {
        return res
          .status(409)
          .json({ error: 'Já existe um usuário com esse telefone ou e-mail' })
      }

      // Cria o usuário
      const user = await User.create({ name, birthday, tel, email })
      return res.status(201).json(user)
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Erro ao criar usuário: ' + error.message })
    }
  }

  // Retorna todos os usuários
  async findAll(_, res) {
    try {
      const users = await User.findAll()
      return res.status(200).json(users)
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Erro ao buscar usuários: ' + error.message })
    }
  }

  // Retorna um usuário por ID
  async findById(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id) // 'findByPk' busca pelo ID primário
      if (user) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Erro ao buscar usuário: ' + error.message })
    }
  }

  // Atualiza um usuário por ID
  async update(req, res) {
    try {
      const { id } = req.params
      const { name, birthday, tel, email } = req.body

      // Verificar se o usuário existe
      const user = await User.findByPk(id)
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      // Atualizar dados do usuário
      await user.update({ name, birthday, tel, email })
      return res.status(200).json(user)
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Erro ao atualizar usuário: ' + error.message })
    }
  }

  // Deleta um usuário por ID
  async delete(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      await user.destroy() // Deleta o usuário
      return res.status(200).json({ message: 'Usuário removido com sucesso' })
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Erro ao remover usuário: ' + error.message })
    }
  }
}

// Exporta o controlador como uma instância singleton
export default new UserController()
