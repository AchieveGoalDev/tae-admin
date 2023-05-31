import { writable } from "svelte/store";

export enum CreateModals {
  CREATE_STUDENT = "create-student",
  CREATE_APPLICATION = "create-application",
  CREATE_COURSE = "create-course",
}

export enum UpdateModals {
  UPDATE_STUDENT = "update-student",
  UPDATE_APPLICATION = "update-application",
  UPDATE_COURSE = "update-course",
}

export enum DeleteModals {
  DELETE_STUDENT = "delete-student",
  DELETE_APPLICATION = "delete-application",
  DELETE_COURSE = "delete-course",
}

export enum StudentModals {
  PERSONAL = "personal",
  CAMPUS = "campus",
  TEST = "test",
}

type AllModals = CreateModals | UpdateModals | DeleteModals;

type CreateStudentErrors = {
  personal: string[];
  campus: string[];
  test: string[];
};

const createStudentErrors: CreateStudentErrors = {
  personal: [],
  campus: [],
  test: [],
};

export class ModalState {
  canProceed: boolean;
  personalErrors: string[];
  campusErrors: string[];
  testErrors: string[];
  currentModal: CreateModals | UpdateModals | DeleteModals;
  currentWindow: string;
  errors: CreateStudentErrors | null;

  constructor(currentModal: AllModals) {
    this.canProceed = false;
    this.personalErrors = [];
    this.currentModal = currentModal;
    this.errors = null;

    this.handleErrorType(this.currentModal);
  }

  handleErrorType(currentModal: AllModals) {
    switch (currentModal) {
      case "create-student":
        this.errors = createStudentErrors;
    }
  }

  checkErrors() {
    let hasErrors = false;

    if (this.personalErrors.length > 0) {
      hasErrors = true;
    }

    return hasErrors;
  }
}

export const modalState = writable(new ModalState(CreateModals.CREATE_STUDENT));
