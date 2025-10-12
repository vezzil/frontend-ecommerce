// Import and export all UI components here for easier imports
import BaseButton from './Button.vue';
import BaseCard from './card/Card.vue';
import CardHeader from './card/CardHeader.vue';
import CardTitle from './card/CardTitle.vue';
import CardDescription from './card/CardDescription.vue';
import CardContent from './card/CardContent.vue';
import CardFooter from './card/CardFooter.vue';
import BaseInput from './input/Input.vue';
import FormLabel from './label/Label.vue';
import BaseTabs from './tabs/Tabs.vue';
import TabsList from './tabs/TabsList.vue';
import TabsTrigger from './tabs/TabsTrigger.vue';
import TabsContent from './tabs/TabsContent.vue';
import DropdownMenu from './dropdownmenu/DropdownMenu.vue';
import DropdownMenuTrigger from './dropdownmenu/DropdownMenuTrigger.vue';
import DropdownMenuContent from './dropdownmenu/DropdownMenuContent.vue';
import DropdownMenuItem from './dropdownmenu/DropdownMenuItem.vue';
import DropdownMenuCheckboxItem from './dropdownmenu/DropdownMenuCheckboxItem.vue';
import DropdownMenuRadioItem from './dropdownmenu/DropdownMenuRadioItem.vue';
import DropdownMenuLabel from './dropdownmenu/DropdownMenuLabel.vue';
import DropdownMenuSeparator from './dropdownmenu/DropdownMenuSeparator.vue';
import Alert from './alert/Alert.vue';
import AlertTitle from './alert/AlertTitle.vue';
import AlertDescription from './alertdialog/AlertDescription.vue';
import Badge from './badge/Badge.vue';
import Avatar from './avatar/Avatar.vue';
import AvatarImage from './avatar/AvatarImage.vue';
import AvatarFallback from './avatar/AvatarFallback.vue';
import BaseCheckbox from './checkbox/Checkbox.vue';
import BaseProgress from './progress/Progress.vue';
import BaseSlider from './slider/Slider.vue';
import BaseTooltip from './tooltip/Tooltip.vue';
import BaseInputOTP from './inputotp/InputOTP.vue';
import InputOTPGroup from './inputotp/InputOTPGroup.vue';
import InputOTPSlot from './inputotp/InputOTPSlot.vue';
import InputOTPSeparator from './inputotp/InputOTPSeparator.vue';
import BaseTextarea from './textarea/Textarea.vue';

export {
  // Button
  BaseButton as Button,

  // Card
  BaseCard as Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,

  // Form
  BaseInput as Input,
  FormLabel as Label,

  // Tabs
  BaseTabs as Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,

  // Dropdown Menu
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  // Alert
  Alert,
  AlertTitle,
  AlertDescription,

  // Badge
  Badge,

  // Avatar
  Avatar,
  AvatarImage,
  AvatarFallback,

  // Form

  // Feedback

  // Input
  Slider: BaseSlider,

  // Overlay
  BaseTooltip as Tooltip,

  // Input OTP
  BaseInputOTP as InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,

  // Form
  BaseTextarea as Textarea,
};

export default {
  // Button
  Button: BaseButton,

  // Card
  Card: BaseCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,

  // Form
  Input: BaseInput,
  Label: FormLabel,

  // Tabs
  Tabs: BaseTabs,
  TabsList,
  TabsTrigger,
  TabsContent,

  // Dropdown Menu
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
