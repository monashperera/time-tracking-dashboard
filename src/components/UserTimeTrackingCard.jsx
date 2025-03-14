import { useContext, useEffect, useState } from 'react';
import ellipsisImg from '../assets/images/icon-ellipsis.svg';
import { TimeTrackingContext } from '../App';
import trackingData from '../data/data.json';

const Ellipsis = () => {
    return <img src={ellipsisImg} alt="Ellipsis" />
};

const UserTimeTrackingCard = () => {

    const { daily, weekly, monthly } = useContext(TimeTrackingContext);

    const [trackType, setTrackType] = useState('Last Week');

    useEffect(() => {
        if (daily === true) {
            setTrackType('Yesterday');
        } else if (weekly === true) {
            setTrackType('Last Week');
        } else {
            setTrackType('Last Month');
        }
    }, [daily, weekly, monthly]);

    let timeUnit = 'hrs';
    return (
        <>
            {trackingData.map((data, index) => (
                <div className="tracking-card" key={index}>
                    <div className="tracking-card-body">
                        <div>
                            <span className="card-title">{data.title}</span>
                            <Ellipsis />
                        </div>
                        <div>
                            <p className='card-timeframe-current'>
                            <span>
                                    {daily ? data.timeframes.daily.current : ''}
                                    {weekly ? data.timeframes.weekly.current : ''}
                                    {monthly ? data.timeframes.monthly.current : ''}
                                </span>
                                <span>{timeUnit}</span>
                            </p>
                            <p className='card-timeframe-previous'>
                                <span>{trackType}</span>&nbsp;-&nbsp;
                                <span>
                                    {daily ? data.timeframes.daily.previous : ''}
                                    {weekly ? data.timeframes.weekly.previous : ''}
                                    {monthly ? data.timeframes.monthly.previous : ''}
                                </span>
                                <span>{timeUnit}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserTimeTrackingCard;