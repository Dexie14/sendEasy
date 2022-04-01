import Header from '../Components_Home/Header/Header'

const MainLayout = ({children}) => {
  return (
      <div>
    <Header />
    <main>{children}</main>
    </div>
  );
};

export default MainLayout