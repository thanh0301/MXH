
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Profiles() {

    const [date, setDate] = useState(null);
    return (
        <>
  <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
  
        </>

    )
}



