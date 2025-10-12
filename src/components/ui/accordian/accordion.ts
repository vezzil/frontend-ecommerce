import { defineComponent, h, provide, ref, toRefs, watch } from 'vue';
import Accordion from './Accordion.vue';
import AccordionItem from './AccordionItem.vue';
import AccordionTrigger from './AccordionTrigger.vue';
import AccordionContent from './AccordionContent.vue';

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
};

export default {
  install: (app: any) => {
    app.component('Accordion', Accordion);
    app.component('AccordionItem', AccordionItem);
    app.component('AccordionTrigger', AccordionTrigger);
    app.component('AccordionContent', AccordionContent);
  }
};
