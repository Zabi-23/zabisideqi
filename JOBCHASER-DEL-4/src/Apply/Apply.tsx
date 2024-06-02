import React, { useState, FormEvent, ChangeEvent } from 'react';
import '../App.css'

const ApplicationForm: React.FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [, setCV] = useState<File | null>(null);
    const [, setCoverLetter] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Här kan du implementera logik för att skicka ansökan med bifogade filer
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting application', error);
        }
    };

    const handleCVChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setCV(file);
        }
    };

    const handleCoverLetterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setCoverLetter(file);
        }
    };

    return (
        <div className="application-form-container">
         
            {submitted ? (
                <p className='thank-you-message'> Thank you for your application! </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='fullName'>Full name:</label>
                        <input
                            type='text'
                            id='fullname'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-post:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="cv">Attach CV:</label>
                        <input
                            type="file"
                            id="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleCVChange}
                            className="file-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="coverLetter">Attach cover letter:</label>
                        <input
                            type="file"
                            id="coverLetter"
                            accept=".pdf,.doc,.docx"
                            onChange={handleCoverLetterChange}
                            className="file-input"
                        />
                    </div>
                    <button type='submit' className="submit-btn">
                        <span onMouseDown={(e) => e.preventDefault()}>Submit application</span>
                    </button>
                </form>
            )}
        </div>
    );
};

export default ApplicationForm;
