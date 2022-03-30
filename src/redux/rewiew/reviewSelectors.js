export const getReviewLoading = ({ review: { isLoading } }) => isLoading;

export const getReviewError = ({ review: { reviewError } }) => reviewError;

export const getReviewResponce = ({ review: { reviewResponse } }) => reviewResponse;

export const getRewiewButtonStatus = ({ review: { buttonDisable } }) => buttonDisable;

export const getModalStatus = ({ review: { showModal } }) => showModal;
