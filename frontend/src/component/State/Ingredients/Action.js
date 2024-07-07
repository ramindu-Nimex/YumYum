import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType";
 import { api } from "../../config/api";
 
 export const getIngredientsOfRestaurant = ({id, jwt}) => {
   return async (dispatch) => {
     try {
       const res = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });
       dispatch({ type: GET_INGREDIENTS, payload: res.data });
       console.log("get all ingredients ", res.data);
     } catch (error) {
       console.log("Error", error);
     }
   };
 };
 
 export const createIngredient = ({data, jwt}) => {
   return async (dispatch) => {
     try {
       const res = await api.post(`/api/admin/ingredients`, data, {
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });
       dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: res.data });
       console.log("create ingredients ", res.data);
     } catch (error) {
       console.log("Error", error);
     }
   };
 };

 export const createIngredientCategory = ({data, jwt}) => {
   console.log("data ", data, " jwt ", jwt);
   return async (dispatch) => {
     try {
       const res = await api.post(`/api/admin/ingredients/category`, data, {
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });
       dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
       console.log("create ingredients category ", res.data);
     } catch (error) {
       console.log("Error", error);
     }
   };
 };

 export const getIngredientCategory = ({id, jwt}) => {
   return async (dispatch) => {
     try {
       const res = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });
       dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
       console.log("get ingredients category ", res.data);
     } catch (error) {
       console.log("Error", error);
     }
   };
 };

 export const updateStockOfIngredient = ({id, jwt}) => {
   return async (dispatch) => {
     try {
       const {data} = await api.put(`/api/admin/ingredients/${id}/stoke`, {}, {
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });
       dispatch({ type: UPDATE_STOCK, payload: data });
       console.log("get ingredients category ", data);
     } catch (error) {
       console.log("Error", error);
     }
   };
 };
 