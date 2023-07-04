// import React, { useState } from 'react';
// import EmailForm from './CambiarContraseña/emailForm';
// import NewPassword from './CambiarContraseña/newPassword';
// import RecoveryCode from './CambiarContraseña/recoveryCode';

// const PasswordRecovery = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState('');
//   const [recoveryCode, setRecoveryCode] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     // Aca podes agregar la lógica para enviar el correo electrónico y obtener el código de recuperación
//     // Una vez que se obtiene el código, pasa al siguiente paso
//     setStep(2);
//   };

//   const handleCodeSubmit = (e) => {
//     e.preventDefault();
//     // Aca podes agregar la lógica para verificar el código de recuperación
//     // Si el código es válido, pasa al siguiente paso
//     setStep(3);
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     // Aca podes agregar la lógica para cambiar la contraseña
//     // Una vez que la contraseña se cambia con éxito, puedes mostrar un mensaje de éxito o redirigir a la página de inicio de sesión
//     // Por simplicidad, en este ejemplo, simplemente mostraremos un mensaje de éxito
//     alert('Contraseña cambiada con éxito');
//     // Restablecer los campos y volver al primer paso
//     setEmail('');
//     setRecoveryCode('');
//     setNewPassword('');
//     setStep(1);
//   };

//   return (
//     <div>
//       {step === 1 && (
//         <form onSubmit={handleEmailSubmit}>
//           <EmailForm/>
//         </form>
//       )}

//       {step === 2 && (
//         <form onSubmit={handleCodeSubmit}>
//             <RecoveryCode/>
//         </form>
//       )}

//       {step === 3 && (
//         <form onSubmit={handlePasswordSubmit}>
//             <NewPassword/>
//         </form>
//       )}
//     </div>
//   );
// };

// export default PasswordRecovery;
