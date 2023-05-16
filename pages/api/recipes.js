// pages/api/recipes.js
import { sendMethodNotAllowed, sendOk } from "/js/utils/ApiMethods.js";
import { getCollection } from "@/js/utils/functions";
import { ObjectId } from "mongodb";
const COLLECTION_NAME = "recipes";

const getrecipes = async () => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.find({}).toArray();
};

const getrecipe = async (id) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.findOne({ _id: new ObjectId(id) });
};

const postrecipe = async (recipe) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.insertOne(recipe);
};

const putrecipe = async (recipe) => {
  const collection = await getCollection(COLLECTION_NAME);
  const id = recipe._id;
  delete recipe._id;
  return collection.updateOne({ _id: new ObjectId(id) }, { $set: recipe });
};

const deleterecipe = async (id) => {
  const collection = await getCollection(COLLECTION_NAME);
  return collection.deleteOne({ _id: new ObjectId(id) });
};

export default async function handler(req, res) {
  const isAllowedMethod =
    req.method === "GET" ||
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE";
  if (!isAllowedMethod) {
    return sendMethodNotAllowed(res);
  }

  if (req.method === "GET" && req.query.id) {
    const id = req.query.id;
    const recipe = await getrecipe(id);
    return sendOk(res, recipe);
  } else if (req.method === "GET") {
    const recipes = await getrecipes();
    return sendOk(res, recipes);
  } else if (req.method === "POST") {
    const recipe = req.body;
    const result = await postrecipe(recipe);
    return sendOk(res, result);
  } else if (req.method === "PUT") {
    const recipe = req.body;
    const result = await putrecipe(recipe);
    return sendOk(res, result);
  } else if (req.method === "DELETE") {
    const id = req.query.id;
    const result = await deleterecipe(id);
    return sendOk(res, result);
  }
}
