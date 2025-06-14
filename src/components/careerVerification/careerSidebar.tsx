import { Link} from 'react-router-dom';
import { useState } from 'react';
function CarreerSidebar () {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const sidebarIcons = [
        { id: 1, label: 'Home', link: '/career-dashboard', defaultIcon: '/assets/icons/home-icon.webp', hoverIcon: '/assets/icons/home.webp' },
        { id: 2, label: 'Profile',  link: '/activate-profile', defaultIcon: '/assets/icons/profile.webp', hoverIcon: '/assets/icons/cv.webp' },
        { id: 3, label: 'CV-Report',  link: '/credentials', defaultIcon: '/assets/icons/carbon_report.webp', hoverIcon: '/assets/icons/Group 134.webp' },
        { id: 4, label: 'Repository',  link: '/career-profile', defaultIcon: '/assets/icons/repo.webp', hoverIcon: '/assets/icons/repo_white.webp' },
        { id: 5, label: 'Settings',  link: '/settings', defaultIcon: '/assets/icons/settings.webp', hoverIcon: '/assets/icons/settings_white.webp' },
    ];
    
    return (
        <>
            <div className='fixed w-[17%] h-[70vh] mt-[70px] z-[1000] p-[5px] py-2 bg-[#F9EDF7] overflow-y-auto'>
                <nav className="flex justify-between items-center mt-[225px] ml-[30px] h-10 pb-13 *:capitalize">
                    <div>
                        <ul>
                            {sidebarIcons.map((item) => (
                                <li
                                    key={item.id}
                                    className="w-[80%]"
                                    onMouseEnter={() => setIsHovered(item.id)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <Link
                                        className="flex mb-[20px] justify-start items-center text-[#9D3B93] pl-[20px] bg-white pr-[10px] py-[11px] border rounded-md hover:text-white hover:bg-[#794C9F] hover:rounded-md"
                                        to={item.link}
                                    >
                                        <img
                                            className="w-[15%] mr-[10px]"
                                            src={isHovered === item.id ? item.hoverIcon : item.defaultIcon}
                                            alt=""
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default CarreerSidebar