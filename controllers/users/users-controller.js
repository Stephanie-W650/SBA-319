import Fruit from '../../../fruits/models/fruit.mjs';
import User from '../../models/users/users-model.js';

async function seedUsers(req, res) {
    try {
        
        await User.deleteMany({});
        await User.create(
            {
                id: 1,
                name: "Sophia Smith",
                username: "sophie_username",
                email: "sophia@example.com"
              },
              {
                id: 2,
                name: "Jamal Johnson",
                username: "jamal_username",
                email: "jamal@example.com"
              },
              {
                id: 3,
                name: "Lena Williams",
                username: "lena_username",
                email: "lena@example.com"
              }
        )
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}
