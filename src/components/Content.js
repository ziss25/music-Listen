import '../App.css';
import play from '../images/play.svg';
import Swal from 'sweetalert2';
const imgPlay = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'sory this content not finished',
    showConfirmButton: false,
    timer: 2000,
  });
};

const Content = () => {
  return (
    <section className="flex justify-between items-center mt-32 ">
      <div className="content-text text-white text-7xl font-semibold leading-snug ">
        <h2>THE REAL SOUND</h2>
      </div>
      <div className=" flex items-center pr-12 ">
        <h4 className="text-xl font-medium  mr-2 ">Click Here To Listen</h4>
        <div>
          <img className=" play-img mt-2" src={play} onClick={imgPlay} />
        </div>
      </div>
    </section>
  );
};

export default Content;
