import { propsSidebar } from '../Ui/index';

type UiActionType = 
   | { type: '[UI] - openSideBarDesktop' } 
   | { type: '[UI] - openSideBarMobile' } 
   | { type: '[UI] - closeSideBar' } 


export const uiReducer = ( state: propsSidebar, action: UiActionType ): propsSidebar => {

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