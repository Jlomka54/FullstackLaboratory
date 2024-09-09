import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default (type, message) => {
  const TOAST_CONFIG = {
    titleSize: '16px',
    maxWidth: 432,
    position: 'topRight',
    closeOnEscape: true,
    theme: 'dark',
    timeout: 4000,
  };

  switch (type) {
    case 'success':
      iziToast.success({
        ...TOAST_CONFIG,
        message,
      });
      break;
    case 'error':
      iziToast.error({
        ...TOAST_CONFIG,
        backgroundColor: '#ef4040',
        message,
      });
      break;
    case 'warning':
      iziToast.warning({
        ...TOAST_CONFIG,
        message,
      });
      break;
  }
};
