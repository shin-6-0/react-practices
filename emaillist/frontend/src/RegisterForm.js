import React from 'react';
import styles from './assets/scss/RegisterForm.scss';
import Email from './Email';

function RegisterForm(addEmail) {
    return (
        <form 
            className={styles.RegisterForm}
            onSubmit={(e)=>{
                e.preventDefault(); //이벤트 막기 ?
                const email ={
                    firstName: e.target.firstName.value,
                    lastName: e.target.lastName.value,
                    email : e.target.email.value
                };
                
                addEmail(Email);
            }}>
            <input type='text' name='firstName' placeholder='성' className={styles.InputFirstName} />
            <input type='text' name='lastName' placeholder='이름' className={styles.InputLastName} />
            <input type='text' name='email' placeholder='이메일' className={styles.InputEmail} />
            <input type='submit' value='등록' />
        </form> 
    );
}

export default RegisterForm;