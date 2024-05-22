import { addons } from "@storybook/manager-api";
// import { themes } from '@storybook/theming';
import customTheme from "./customTheme";

addons.setConfig({
  theme: customTheme,
});

// addons.setConfig({
//   navSize: 500,
//   bottomPanelHeight: 500,
//   rightPanelWidth: 500,
//   panelPosition: 'bottom',
//   enableShortcuts: true,
//   showToolbar: true,
//   theme: themes.dark,
//   selectedPanel: undefined,
//   initialActive: 'sidebar',
//   sidebar: {
//     showRoots: false,
//     collapsedRoots: ['other'],
//   },
//   toolbar: {
//     title: { hidden: false },
//     zoom: { hidden: false },
//     eject: { hidden: false },
//     copy: { hidden: false },
//     fullscreen: { hidden: false },
//   },
// });
