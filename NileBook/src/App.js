const React = require('react')
// const ReactDOM = require('react-dom')
const { hashHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  // IndexLink
} = require('react-router')

import 'bootstrap/dist/css/bootstrap.css'

const Modal = require('./modal.js')
const Cart = require('./cart.js')
const Checkout = require('./checkout.js')
const Product = require('./product.js')

const PRODUCTS = [
  { id: 0, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg', title: 'Pro Express.js'},
  { id: 1, src: 'https://images-na.ssl-images-amazon.com/images/I/51N2N0whu7L._AC_UL320_SR248,320_.jpg', title: 'Practical Node.js'},
  { id: 2, src: 'https://s-media-cache-ak0.pinimg.com/736x/f8/1d/f3/f81df351b93bc09bae9608c5bba8b4cd.jpg', title: 'Express API Reference'},
  { id: 3, src: 'https://images-na.ssl-images-amazon.com/images/I/51SlU9xoMXL._SX348_BO1,204,203,200_.jpg', title: 'React Quickly'},
  { id: 4, src: 'https://images-na.ssl-images-amazon.com/images/I/517I8GHpNTL._SX403_BO1,204,203,200_.jpg', title: 'Full Stack JavaScript'}
]

const Heading = () => {
  return <h1>Nile Book Store</h1>
}

const Copy = () => {
  return <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.</p>
}

// const Menu = () => {
//   return <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact Us</li>
//   </ul>
// }
// class Menu extends React.Component {
//   render() {
//     let menus = ['Home',
//       'About',
//       'Services',
//       'Portfolio',
//       'Contact us']
//     return (
//       <div>
//         {menus.map((v,i) => {
//           return <div key={i}><Link label={v}/></div>
//         })}
//       </div>
//     )
//   }
// }

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    console.log('Modal: ', this.isModal)
    return (
      <div className="well">
        
        <Heading/>
        <div>
          {(this.isModal)?this.previousChildren:this.props.children}
          {/* {this.props.children} */}
          {(this.isModal)?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
    
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={{pathname: `/products/${picture.id}`,
                state: { modal: true,
                  returnTo: this.props.location.pathname }
                }
              }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}



class Apps extends React.Component {
  render() {
    return (
     <Router history={hashHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
      cartItems={cartItems} products={PRODUCTS}/>
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS}/>
  </Router>
    )
  }
}

export default Apps;
