import * as React from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/formmodule.css';

function ContactForm(){

<form action="http://localhost:3000/contact" method="POST">
<label htmlFor="name">Name</label>
<input type="text" name="name" id="name" required />

<label htmlFor="email">Email</label>
<input type="email" name="email" id="email" required />

<button type="submit">Submit</button>
    </form>
}