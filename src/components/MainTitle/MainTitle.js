import './MainTitle.css';

function MainTitle ({title}) {
    return(
        <div className='main-title'>
        <h2 className="main-title__text">{title}</h2>
        </div>
    );
}

export default MainTitle;