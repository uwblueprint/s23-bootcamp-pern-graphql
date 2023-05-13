import db from "../models/index";

async function getUser(id) {
  return await db.User.findByPk(id);
}

async function getUsers() {
  return await db.User.findAll();
}

async function createUser(email, password, role) {
  return await db.User.create({
    email,
    password,
    role,
  });
}

async function updateUser(id, email, password, role) {
  const updateResult = await db.User.update(
    {
      email,
      password,
      role,
    },
    {
      returning: true,
      where: { id: id },
    }
  );

  if (updateResult[0] === 1) {
    return updateResult[1][0];
  } else {
    return null;
  }
}

async function deleteUser(id) {
  const deleteResult = await db.User.destroy({
      where: { id: id }
  });

  if (deleteResult === 1) {
      return id;
  } else {
      return null;
  }
}

const userService = { getUser, getUsers, createUser, updateUser, deleteUser };
export default userService;
