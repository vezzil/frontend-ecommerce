import { defineComponent, h } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbList from './BreadcrumbList.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';
import BreadcrumbLink from './BreadcrumbLink.vue';
import BreadcrumbPage from './BreadcrumbPage.vue';
import BreadcrumbSeparator from './BreadcrumbSeparator.vue';
import BreadcrumbEllipsis from './BreadcrumbEllipsis.vue';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

export default {
  install: (app: any) => {
    app.component('Breadcrumb', Breadcrumb);
    app.component('BreadcrumbList', BreadcrumbList);
    app.component('BreadcrumbItem', BreadcrumbItem);
    app.component('BreadcrumbLink', BreadcrumbLink);
    app.component('BreadcrumbPage', BreadcrumbPage);
    app.component('BreadcrumbSeparator', BreadcrumbSeparator);
    app.component('BreadcrumbEllipsis', BreadcrumbEllipsis);
  },
};
