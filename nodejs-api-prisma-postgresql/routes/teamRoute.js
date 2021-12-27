const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function(req, res) {
  try {
    const teams = await prisma.team.findMany({
        include: {drivers: true}
    });
    res.status(200).json({
      message: "success",
      data: teams,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/", async function(req, res) {
  try {
    const { name, country } = req.body;
    const result = await prisma.team.create({
      data: {
        name,
        country,
      },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const team = await prisma.team.findUnique({
      where: { id: +req.params.id },
      include: {drivers: true}
    });
    res.status(200).json({
      message: "success",
      data: team,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const { name, country } = req.body;
    const result = await prisma.team.update({
      where: { id: +req.params.id },
      data: { name, country },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const result = await prisma.team.delete({
      where: { id: +req.params.id },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
