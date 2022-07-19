import React,{useState} from 'react';
import './login.css'
import Loginimg from '../../assets/Web illustration TASC.png'
import Tasklogo from '../../assets/task-logo.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate();
    let login_Model = {
        id: '',
        password: '',
      }
      const [loginModel, setLoginModal] = useState(login_Model)
      const handleChange = (event) => {
        const { name, value } = event.target
        setLoginModal({
          ...loginModel,
          [name]: value,
        })
      }
    const handleLogin = () => {
        navigate("../dashboard", { replace: true });
        // axios
        //     .post(`https://tasc-ms.herokuapp.com/users`, {
        //         request: {
        //             method: "getUser",
        //             data: {
        //                 user: {
        //                     password:loginModel.password ,
        //                    _id: loginModel.id
        //                 }
        //             },
        //         },
        //     })
        //     .then((res) => {
        //         console.log('res',res);

        //     })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className=" col-12 col-md-8">
                    <img className='img-fluid' src={Loginimg} alt='loginpic' />
                </div>
                <div className="col-12 col-md-4 ">
                    <div style={{
                        height: "640px",
                        backgroundColor: "rgb(149, 0, 20)",
                        borderColor: "rgb(149, 0, 20)"
                    }}>
                        <div className='login-card'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-12 col-lg-12 col-12'>
                                    <div>
                                        <img  className='img-fluid' style={{  marginTop: "30px" }} src={Tasklogo} alt='taskpic' />
                                        <h3 className='text-center text-white' style={{ fontSize: '20px' }}> Login to manage your logistics Tasks </h3>
                                        {/* </div> */}
                                    </div>

                                </div>
                                <div className='mx-auto'>

                                    <form onSubmit={(e) => e.preventDefault()} id="login_Form">
                                        {/* <input
                                            className="form-control form-control-lg mb-3"
                                            type="phone"
                                            placeholder="Phone"
                                            // value={loginModel.email}
                                            // name="email"
                                            // id="email"
                                            // onChange={(e) => handleChange(e)}
                                            // onKeyDown={handlepress}
                                            autoComplete="off"
                                        /> */}
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <span class="glyphicon glyphicon-envelope"></span>
                                            </div>
                                            <input class="form-control mb-3" id="id" name="id" value={loginModel.id} type="phone"
                                                placeholder="Phone"  onChange={(e) => handleChange(e)}/>
                                        </div>

                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <span class="glyphicon glyphicon-envelope"></span>
                                            </div>
                                            <input class="form-control mb-3" id="email" name="password" value={loginModel.password} type="text"
                                                placeholder="Password"  onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div >
                                            <button
                                                className='loginbtn'
                                                aria-label="Handle Login"
                                                //btn btn-primary bg-primary
                                                //   style={{
                                                //     color: "#ae0017!important",
                                                //     height: "36px",
                                                //     minWidth: "64px",
                                                //     padding: "0 16px",
                                                //     paddingRight: "36px!important",
                                                //     paddingLeft: "36px!important",
                                                //   }}
                                                onClick={() => handleLogin()}
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default Login;
