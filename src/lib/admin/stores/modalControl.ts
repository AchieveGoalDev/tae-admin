import { writable } from "svelte/store";

export enum StudentModals {
  PERSONAL = "personal",
  CAMPUS = "campus",
  TEST = "test",
}

export class ModalState {
  canProceed: boolean;
  checkErrors: boolean;
  errors: string[];
  currentModal: StudentModals;

  constructor() {
    this.canProceed = false;
    this.errors = [];
    this.checkErrors = false;
    this.currentModal = StudentModals.PERSONAL;
  }
}

export const modalState = writable(new ModalState());
