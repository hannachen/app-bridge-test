const AppBridge = window["app-bridge"];

console.log("Window", window);
console.log("AppBridge", AppBridge);

const app = AppBridge.createApp({
  apiKey: "app_bridge_key",
  shopOrigin: "shop1.myshopify.io"
});

const toastOptions = {
  message: "Product saved",
  duration: 5000
};
const toastNotice = AppBridge.actions.Toast.create(app, toastOptions);

const button1 = AppBridge.actions.Button.create(app, {
  label: "Show toast message"
});
button1.subscribe(AppBridge.actions.Button.Action.CLICK, data => {
  console.log("Show toast message button clicked", data);
  toastNotice.dispatch(AppBridge.actions.Toast.Action.SHOW);
});

const modalOptions = {
  title: "My Modal",
  message: "Hello world!"
};

const myModal = AppBridge.actions.Modal.create(app, modalOptions);

const button2 = AppBridge.actions.Button.create(app, { label: "Open modal" });
button2.subscribe(AppBridge.actions.Button.Action.CLICK, data => {
  myModal.dispatch(AppBridge.actions.Modal.Action.OPEN);
});

const moreActions = AppBridge.actions.ButtonGroup.create(app, {
  label: "More actions",
  buttons: [button1, button2]
});

const saveButton = AppBridge.actions.Button.create(app, { label: "Save" });

const titleBarOptions = {
  title: "My page title",
  buttons: {
    primary: saveButton,
    secondary: [moreActions]
  }
};

const myTitleBar = AppBridge.actions.TitleBar.create(app, titleBarOptions);
