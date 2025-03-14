import { useContext } from 'react';
import { TimeTrackingContext } from '../App';
import userImg from '../assets/images/image-jeremy.webp';

const UserInfoControls = () => {

    const { daily, setDaily, weekly, setWeekly, monthly, setMonthly } = useContext(TimeTrackingContext);

    return (
        <div className="info-controls-container">
            <div className='user-info'>
                <div>
                    <img className='img-user' src={userImg} alt="Jeremy Robson" />
                </div>
                <div>
                    <span>Report for</span>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className='tracking-controls'>
                <button
                    type='button'
                    className={`btn-data-filter ${daily ? 'active' : ''}`}
                    onClick={() => {
                        setDaily(true);
                        setWeekly(false);
                        setMonthly(false);
                    }}
                >
                    Daily
                </button>
                <button
                    type='button'
                    className={`btn-data-filter ${weekly ? 'active' : ''}`}
                    onClick={() => {
                        setDaily(false);
                        setWeekly(true);
                        setMonthly(false);
                    }}
                >
                    Weekly
                </button>
                <button
                    type='button'
                    className={`btn-data-filter ${monthly ? 'active' : ''}`}
                    onClick={() => {
                        setDaily(false);
                        setWeekly(false);
                        setMonthly(true);
                    }}
                >
                    Monthly
                </button>
            </div>
        </div>
    )
};

export default UserInfoControls;