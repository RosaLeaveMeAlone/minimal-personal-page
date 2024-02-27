import { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log('id',id);
        console.log('value',value);
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let message = `
        <h1> New message from your website.</h1>
        <strong>Name</strong>: ${formData.name} <br>
        <strong>Email</strong>: ${formData.email} <br>
        <strong>Message</strong>: <br>
        ${formData.message}
        `;  

        fetch('https://api.joel-uzcategui.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: message})
        })
        .then(response => {
            console.log('End');
            setFormData({
                name: '',
                email: '',
                message: ''
                });
        })
        .catch(error => {
            // console.error('Error:', error);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="bg-white rounded-lg py-5">
            <h5 className="text-center mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">Contact me</h5>
            <div className="flex flex-col mx-10 items-start space-y-2">
                <div className="w-full">
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Name</label>
                <input type="text" value={formData.name} onChange={handleChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 block w-full p-2.5" placeholder="Joel" required />
                </div>

                <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">Email</label>
                <input type="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition border duration-500 ease-in-out" placeholder="joeluzcategui102@gmail.com" required />
                </div>
                <div className="w-full">
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-900">Message</label>
                <textarea value={formData.message} onChange={handleChange} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your message here..." required></textarea>
                </div>
                <div className="w-full flex justify-end">
                <button type="submit" disabled={isSubmitting} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                </div>
            </div>
            </div>
        </form>
    );

}


export default ContactForm;

