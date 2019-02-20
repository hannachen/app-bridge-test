import createApp from "@shopify/app-bridge";
import {
  Button,
  Modal,
} from "@shopify/app-bridge/actions";

const app = createApp({
  apiKey: "app_bridge_key",
  shopOrigin: "shop1.myshopify.io"
});

const modalOptions = {
  title: "My Modal",
  message: "Hello world!"
};

const myModal = Modal.create(app, modalOptions);

const button2 = Button.create(app, { label: "Open modal" });
button2.subscribe(Button.Action.CLICK, data => {
  myModal.dispatch(Modal.Action.OPEN);
});
