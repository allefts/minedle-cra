import create from "zustand";
import { fetchItems } from "../utils/fetchItems";

const formatItemName = (itemName) => {
  return itemName
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el[0] + el.substring(1))
    .join("_");
};

const mineStore = create((set) => ({
  //Result
  resultItemName: "",
  resultItemType: "",
  resultItemPattern: [],
  resultItemKeys: [],
  resultItemIngredients: [],
  //Current
  currentItemPattern: [],
  currentItemIngredients: [],
  //Check
  isCorrect: false,
  //Inventory
  invItems: [],

  populateResult: async () => {
    const data = await fetchItems();
    const resultItem = data["ResultItem"];
    const ingredientItems = data["IngredientItems"];

    set({
      invItems: ingredientItems,
    });

    if (resultItem.type == "minecraft:crafting_shaped") {
      set({
        resultItemPattern: resultItem.pattern,
        resultItemKeys: resultItem.key,
        resultItemType: resultItem.type,
      });
    } else if (resultItem.type == "minecraft:crafting_shapeless") {
      set({
        resultItemIngredients: resultItem.ingredients,
        resultItemType: resultItem.type,
      });
    } else {
      console.log("Error init store");
    }

    if (resultItem.result.length == 1) {
      set({
        resultItemName: resultItem.result[0].Value,
      });
    } else if (resultItem.result.length > 1) {
      set({
        resultItemName: resultItem.result[1].Value,
      });
    }
  },

  getItemNames: () => {
    let itemsUsed = [];
    if (mineStore.getState().resultItemIngredients.length > 0) {
      //Shapeless
      let ingredients = mineStore.getState().resultItemIngredients;
      //dont know why they are nested but dont want to break anything
      for (const ingredItemWrapper in ingredients) {
        for (const ingredItem in ingredients[ingredItemWrapper]) {
          itemsUsed.push(
            formatItemName(ingredients[ingredItemWrapper][ingredItem].Value)
          );
        }
      }
    } else {
      //Shaped
      for (const keyItem of Object.values(
        mineStore.getState().resultItemKeys
      )) {
        itemsUsed.push(formatItemName(keyItem.Value[0].Value));
      }
    }
    return itemsUsed;
  },

  isCorrect: false,
  setIsCorrect: (check) => {
    if (check) {
      set({ isCorrect: true });
    } else {
      set({ isCorrect: false });
    }
  },
}));

export default mineStore;
