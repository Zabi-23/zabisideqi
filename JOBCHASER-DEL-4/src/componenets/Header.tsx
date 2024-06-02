import React, { ChangeEvent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 


interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='top-bar'>
            <h1>JOB-CHASER</h1>
            {isHomePage && (
                <div className='search-box'>
                    <input
                        type='text'
                        placeholder='Sök'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type='button'>Sök</button>
                </div>
            )}
            <div>
                
                <Link to="/login" className='user-icon'><FaUser /></Link>
                
            </div>
        </div>
    );
}

export default Header;





 






