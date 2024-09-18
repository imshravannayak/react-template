import Swal from 'sweetalert2';
const AlertComponet = ({title,message,type})=>{
    Swal.fire({
        title,
        text: message,
        icon: type === 'success' ? 'success' : 'error',
      });
}
export default AlertComponet;