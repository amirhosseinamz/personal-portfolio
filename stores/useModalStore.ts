import { defineStore } from "pinia";
import { DefineComponent } from "vue";

// Define the type for the state
export interface ModalState {
  component: DefineComponent | null;
  props: Record<string, any>;
  onClose?: (data: any) => void;
}

// Define the type for the payload of openModal
export interface OpenModalPayload {
  component: DefineComponent;
  props?: Record<string, any>;
  onClose?: () => void;
}

const basicState: ModalState = { component: null, props: {} };
export default defineStore("modal-store", {
  state: (): { modalState: ModalState } => ({
    modalState: { component: null, props: {} },
  }),
  actions: {
    openModal(payload: any) {
      const { props, component, onClose } = payload;

      const body = document.body;
      if (body) body.style.overflow = "hidden";

      this.modalState = { component, props: props || {}, onClose };
    },

    closeModal(data?: any) {
      if (this.modalState.onClose) {
        this.modalState.onClose(data);
      }
      this.modalState = basicState;

      const body = document.body;
      if (body) body.style.overflow = "auto";
    },
  },
  getters: {},
});
