import './style.css';
import manageit from '../src/manageit.svg';

export const NavBar = () => {
  return (
    <div>
      <div className="basic flex justify-between p-5 align-middle place-content-center">

        <div className='logo'>

          <h1 className='capitalize text-xl'><span className='text-blue-500 font-black'>manage</span> it</h1>

        </div>
        <div className='navicon'>

          <img src= {manageit} />

        </div>
      </div>
    </div>
  );
};
