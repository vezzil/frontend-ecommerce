import { defineComponent, h } from 'vue';
import AlertDialog from './AlertDialog.vue';
import AlertDialogAction from './AlertDialogAction.vue';
import AlertDialogCancel from './AlertDialogCancel.vue';
import AlertDialogContent from './AlertDialogContent.vue';
import AlertDialogDescription from './AlertDialogDescription.vue';
import AlertDialogFooter from './AlertDialogFooter.vue';
import AlertDialogHeader from './AlertDialogHeader.vue';
import AlertDialogOverlay from './AlertDialogOverlay.vue';
import AlertDialogPortal from './AlertDialogPortal.vue';
import AlertDialogTitle from './AlertDialogTitle.vue';
import AlertDialogTrigger from './AlertDialogTrigger.vue';

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};

export default {
  install: (app: any) => {
    app.component('AlertDialog', AlertDialog);
    app.component('AlertDialogAction', AlertDialogAction);
    app.component('AlertDialogCancel', AlertDialogCancel);
    app.component('AlertDialogContent', AlertDialogContent);
    app.component('AlertDialogDescription', AlertDialogDescription);
    app.component('AlertDialogFooter', AlertDialogFooter);
    app.component('AlertDialogHeader', AlertDialogHeader);
    app.component('AlertDialogOverlay', AlertDialogOverlay);
    app.component('AlertDialogPortal', AlertDialogPortal);
    app.component('AlertDialogTitle', AlertDialogTitle);
    app.component('AlertDialogTrigger', AlertDialogTrigger);
  },
};
