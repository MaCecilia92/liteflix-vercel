import { propsSidebar } from './index';

type UiActionType = 
   | { type: '[UI] - openSideBarDesktop' } 
   | { type: '[UI] - openSideBarMobile' } 
   | { type: '[UI] - closeSideBar' } 


export const uiReducer = ( state: propsSidebar, action: UiActionType ): propsSidebar => {
   console.log("prev", state),
   console.log("action", action)
   switch (action.type) { 
      case '[UI] - openSideBarDesktop':
         
         return {
            ...state,
           
            Anchor: "right",
            Open: true,
         }
      
         case '[UI] - openSideBarMobile':
            return {
               ...state,
               Anchor: "top",
               Open: true
         }
      
         case '[UI] - closeSideBar':
            return {
               ...state,
               Open: false

           }

       default:
          return state;
   }

}