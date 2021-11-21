import toastr from 'toastr';

const renderToastr = (type, message) => {
    toastr.options = {
        positionClass: 'toast-top-right',
        hideDuration: 300,
        timeOut: 60000
    }
    toastr.clear()
    setTimeout(() => toastr[type](message));
}

export default renderToastr;