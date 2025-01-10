import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar  variant='dark' expand='lg' className='bg-c' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='Formal Suits' className='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='larg-m'>
            <Nav className='ms-auto'>
              <SearchBox />
              <Nav.Link as={Link} to='/cart'>
                <FaShoppingCart /> المشتريات
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              <NavDropdown title='الاقسام' id='category'>
                  <NavDropdown.Item as={Link} to='/categories/بدل رجالي'>
                 بدل رجالي                
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/categories/بلازرات'>
                  بلازرات
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/categories/بدل اطفالي'>
                 بدل اطفالي
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/categories/أحزية'>
                 أحزية
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/categories/أحزمة'>
                 أحزمة
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/categories/بناطيل'>
                  بناطيل
                  </NavDropdown.Item>
                 
                  
                  
                  <NavDropdown.Item as={Link} to='/categories/شرابات	'>
                  شرابات                  
                  </NavDropdown.Item>
                </NavDropdown>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <NavDropdown.Item as={Link} to='/profile'>
                      الملف الشخصى
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                    تسجيل الخروج
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <FaUser /> تسجيل الدخول
                </Nav.Link>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                  منتجات
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                  طلبات
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                  المستخدمين
                  </NavDropdown.Item>
                </NavDropdown>
              )}
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
