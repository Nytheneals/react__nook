// import express from "express";
const express = require("express");

const app = express();
app.listen(3000, () => {
  console.log("Now listening for request on port 3000");
});