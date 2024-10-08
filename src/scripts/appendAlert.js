const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

export const appendAlert = (message, type) => {
  alertPlaceholder.innerHTML = `
  <div class="alert alert-${type} alert-dismissible" role="alert">
    <div>${message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
};
