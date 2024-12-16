import { createI18n } from 'vue-i18n'
import { AppState } from './plugins/appState';

// import Router from './router'

// import * as THREE from 'three';
// window.THREE = THREE;

const i18n_lang = 'English';
const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: i18n_lang,
  fallbackLocale: i18n_lang,
  messages: {
    English: {
      Login: {
        error: 'Can not login!',
        toomany: 'Can not login! Too many requests. Please try again 30s later.'
      },
    },
    ///////////////////////////////////////////////////////
    Japanese: {
      Login: {
        error: 'ログイン・エラー',
        toomany: 'ログイン・エラー : 試行回数オーバー、30秒ほどロックされました。'
      },
    }
  }
  })

///////////////////////////////////////////////////////////
import './assets/style.css';
// import "./style.css";
import "./flags.css";
// import "primevue/resources/themes/lara-dark-green/theme.css";
// import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import "primeicons/primeicons.css";

import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
// import Noir from './presets/Noir.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import AccordionTab from 'primevue/accordiontab';
import AnimateOnScroll from 'primevue/animateonscroll';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DatePicker from 'primevue/datepicker';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Drawer from 'primevue/drawer';
// import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Editor from 'primevue/editor';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FloatLabel from 'primevue/floatlabel';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputChips from 'primevue/inputchips';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputOtp from 'primevue/inputotp';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MeterGroup from 'primevue/metergroup';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayBadge from 'primevue/overlaybadge';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Stepper from 'primevue/stepper';
// import StepperPanel from 'primevue/stepperpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Textarea from 'primevue/textarea';
import TieredMenu from 'primevue/tieredmenu';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import ToggleSwitch from 'primevue/toggleswitch';
import Tooltip from 'primevue/tooltip';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import VirtualScroller from 'primevue/virtualscroller';


const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      // prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false,
    }
  }
});

app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(AppState);

app.use(i18n)
// app.use(Router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);

app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('ButtonGroup', ButtonGroup);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DatePicker', DatePicker);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dock', Dock);
app.component('Drawer', Drawer);
app.component('DynamicDialog', DynamicDialog);
app.component('Editor', Editor);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('FloatLabel', FloatLabel);
app.component('Galleria', Galleria);
app.component('IconField', IconField);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputChips', InputChips);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputIcon', InputIcon);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputOtp', InputOtp);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MeterGroup', MeterGroup);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayBadge', OverlayBadge);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('Popover', Popover);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Row', Row);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Select', Select);
app.component('SelectButton', SelectButton);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Stepper', Stepper);
// app.component('StepperPanel', StepperPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Terminal', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('ToggleSwitch', ToggleSwitch);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('VirtualScroller', VirtualScroller);
app.component('ThemeSwitcher', ThemeSwitcher);


app.mount("#app");