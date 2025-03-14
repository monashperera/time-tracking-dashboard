import dataDevInfo from "./data/data";
const Footer = () => {

    return (
        <>
            {dataDevInfo.map(data => (
                <div className="attribution" key={data.id}>
                    <span>Challenge by&nbsp;</span>
                    <a
                        href={data.challengerURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.challengerName}
                    </a>.
                    <span>Coded by&nbsp;</span>
                    <a
                        href={data.coderURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid='coder-link'
                    >
                        {data.coderName}
                    </a>.
                </div>
            ))}
        </>
    );
};

export default Footer;