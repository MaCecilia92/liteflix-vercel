import { propsSidebar } from '../Ui/index';

type UiActionType = 
   | { type: '[UI] - openSideBarDesktop' } 
   | { type: '[UI] - openSideBarMobile' } 
   | { type: '[UI] - closeSideBar' } 
   | { type: '[UI] - ToggleContainer' }


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
      
         case '[UI] - ToggleContainer':
            return {
               ...state,
               isMenuOpen: !state.isMenuOpen

         }
      
       default:
          return state;
   }

}