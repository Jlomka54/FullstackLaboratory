import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default (type, message) => {
  const toastConfig = {
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
        ...toastConfig,
        message,
      });
      break;
    case 'error':
      iziToast.error({
        ...toastConfig,
        backgroundColor: '#ef4040',
        message,
      });
      break;
    case 'warning':
      iziToast.warning({
        ...toastConfig,
        message,
      });
      break;
  }
};
