import Headertwo from './Headertwo/Headertwo';

const MainLay2 = ({children}) => {
  return (
    <div>
    <Headertwo />
    <main>{children}</main>
    </div>
  );
};

export default MainLay2