const { Modal } = require("../models/crud");

async function createUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).join({ error: "Please Provide name and email" });
  }
  const foundUser = await Modal.findOne({
    email,
  });

  if (foundUser) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const data = new Modal({
    name,
    email,
  });

  const response = await data.save();
  console.log(response);
  return res.status(201).json(response);
}

async function getAllUsers(_, res) {
  const users = await Modal.find();
  if (!users) {
    return res.status(404).json({ error: "No users found" });
  }
  return res.status(201).json(users);
}

async function getUserById(req, res) {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ error: "Please provide user id" });
  }

  const foundUser = await Modal.findById(userId);
  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(201).json(foundUser);
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json("valid id");
  }

  const foundUser = await Modal.findById(userId);
  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }

  const deleteUser = await Modal.findByIdAndDelete(foundUser);
  if (deleteUser) {
    return res.status(200).json("user deleted successfully");
  }
}

async function updateUser(req, res) {
  const userId = req.params.id;
  if (!userId) {
    return res.status(404).json("provide a valid user id");
  }

  const foundUser = await Modal.findById(userId);
  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }

  const updatedUser = await Modal.findByIdAndUpdate(userId, req.body, {
    new: true,
  });
  return res.status(201).json({
    message: "User updated successfully",
    user: updatedUser,
  });
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
};
