import createApp from "@shopify/app-bridge";
import {Modal} from "@shopify/app-bridge/actions";

const app = createApp({
  apiKey: "app_bridge_key",
  shopOrigin: "shop1.myshopify.io"
});

const modalOptions = {
  title: "My Modal",
  message: "Hello world!"
};

const myModal = Modal.create(app, modalOptions);

function openModal() {
  myModal.dispatch(Modal.Action.OPEN);
}

window.openModal = openModal;