export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = feature => ({ type: ADD_FEATURE, payload: feature })

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = feature => ({ type: REMOVE_FEATURE, payload: feature });

//   const buyItem = item => {
//     // dipsatch an action here to add an item
//   };

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = item => ({ type: BUY_ITEM, payload: item });