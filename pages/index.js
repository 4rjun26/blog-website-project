import React from 'react'
import {useEffect } from 'react';
import styles from 'sample/styles/Home.module.css'
import Head from 'next/head';
import { CountUp } from 'use-count-up'

import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Link from 'next/link'
import { SlBubbles } from 'react-icons/sl';
import { BsStopwatch } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { FaSearchDollar } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import Image from 'next/image';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

var controls,controlshero,navopen=false;
var $ = require( "jquery" );
function index() {
  useEffect(() => {
    var container= document.getElementById( 'cnvs' );
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( "rgb(37,231, 225)");
  // const scenehero=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(45,container.offsetWidth/ container.offsetHeight,1,1000);
  camera.position.set(10,10,10);

// const camerahero=new THREE.PerspectiveCamera(45,window.innerWidth/ (window.innerHeight-100),1,1000);
// camera.position.set(10,20,10);

const dlight=new THREE.DirectionalLight(0x242424,50);
dlight.position.set(0,1,0);
dlight.castShadow=true;
scene.add(dlight);
const dlight2=new THREE.DirectionalLight(0x242424,50);
dlight2.position.set(0,-1,0);
dlight2.castShadow=true;
scene.add(dlight2);
const dlight3=new THREE.DirectionalLight(0x242424,50);
dlight3.position.set(1,0,0);
dlight3.castShadow=true;
scene.add(dlight3);
const dlight4=new THREE.DirectionalLight(0x242424,50);
dlight4.position.set(-1,0,0);
dlight4.castShadow=true;
scene.add(dlight4);
// const plight=new THREE.PointLight(0xc4c4c4,5);
// plight.position.set(0,300,500);
// scenehero.add(plight);
// const plight2=new THREE.PointLight(0xc4c4c4,5);
// plight2.position.set(500,100,0);
// scenehero.add(plight2);
// const plight3=new THREE.PointLight(0xc4c4c4,5);
// plight3.position.set(0,100,-500);
// scenehero.add(plight3);
// const plight4=new THREE.PointLight(0xc4c4c4,5);
// plight4.position.set(-500,300,0);
// scenehero.add(plight4);
    scene.add(camera);
//     scenehero.add(camerahero);
//  let canvas=document.querySelector('#cnvs23');

    const renderer=new THREE.WebGLRenderer({
      canvas:container,
      antialias:true  
    });
//     const rendererhero=new THREE.WebGLRenderer({
//       canvas:canvas,
//       antialias:true  
//     });
    renderer.setSize( container.offsetWidth, container.offsetHeight );
//      rendererhero.setSize(window.innerWidth,(window.innerHeight-100));
      

      let loader = new GLTFLoader();
//       let loaderhero=new GLTFLoader();
//       loaderhero.load('cyberpunk_laptop.gltf',function(gltf){
//        gltf.scene.position.y=-0.5;
//         scenehero.add(gltf.scene);

//         animatehero();
//       }); 
      loader.load('scene.gltf',function(gltf){
       gltf.scene.position.y=-0.5;
        scene.add(gltf.scene);

        animate();
      }); 
   
  controls=new OrbitControls(camera,renderer.domElement)
  controls.enableDamping=true
  controls.enablePan=false
  controls.enabled = false;
  controls.enableZoom=true
  controls.autoRotate=true;
  controls.autoRotateSpeed=5;
  controls.minDistance=4.5;
  controls.maxDistance=4.5;
  controls.update();


function animate(){
  controls.update();
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
// function animatehero(){
//    controlshero.update();
//   rendererhero.render(scenehero,camerahero);
//   requestAnimationFrame(animatehero);
// }

   },[]);

  //  const notify = () =>{ 
  //  const elem1=document.getElementById("name");
  //  const elem2=document.getElementById("email");
  //  const elem3=document.getElementById("message");
  //  if(elem1.value.length*elem2.value.length*elem3.value.length>0){
  //   toast("Message Sent");
  //   elem1.value="";elem2.value="";elem3.value="";
  //  }
  //  else{
  //   alert("Please enter all credentials!");
  //  }
// };





  if (typeof window !== "undefined") {
    $(document).ready(function(){
      $(".Home_abtcard__pckKN").hover(function(){
        $(this).find(".Home_techstack__cJEcY").css("scale", "1");
        }, function(){
        $(this).find(".Home_techstack__cJEcY").css("scale", "0");
      });
    });

    $.fn.isInViewport = function() {
      if($(this).offset()!=undefined){
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
  
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
  
      return elementBottom > viewportTop && elementTop < viewportBottom;
      }
    };

    $(window).on('resize scroll', function() {
      if ($('#about').isInViewport()) {
        $('#about .Home_abtcard__pckKN').css({"opacity":"1"});
      } else {
        $('#about .Home_abtcard__pckKN').css({"opacity":"0"});
      }
      if ($('#contactus').isInViewport()) {
        $('#contactus').css({"opacity":"1"});
      } else {
        $('#contactus').css({"opacity":"0"});
      }
      if ($('#hero').isInViewport()) {
        $('#hero').css({"opacity":"1"});
      } else {
        $('#hero').css({"opacity":"0"});
      }
      if ($('#works').isInViewport()) {
        $('#works').css({"opacity":"1"});
      } else {
        $('#works').css({"opacity":"0"});
      }
  });
}
function closeAlert(){
  const elem=document.getElementById("alert");
  elem.style.display="none";
}
  return (
    <div className={styles.body}>
       <Head>
       <link href='https://fonts.googleapis.com/css?family=Dancing Script' rel='stylesheet' />
         <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' />
         <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' />
     </Head>

        {/* Home */}
        <div className={styles.alert} id='alert'>
          <div className={styles.text}>
          <p>Join now and get first 3 blogs absolutely FREE! No credit card. Start instantly.
          <Link href={'#'} className={styles.links}> Sign up now</Link>
          </p>
          </div>
          <button onClick={closeAlert}><GrClose/></button>
        </div>
          <div className={styles.homediv}>
            <br/><br/>
            <h1 className={styles.webname}>Blogify</h1>
            <br/><br/>
            <h1>Blogs, News, Jobs all in one place!</h1>
           <p style={{"display":"block"}}>Stay informed, stay ahead.</p>
            <div className={styles.globecont}>
            <canvas className={styles.box} id='cnvs' style={{"border":"none"}}>

            </canvas>
            </div>
            <button>Get Started</button>
          </div>
        {/* Services */}
        <div className={styles.contentdiv}>
          <div className={styles.abtcard}>
            <div className={styles.icon}>
            <h2><SlBubbles/></h2>
            </div>
            <div className={styles.name}>
            <h1>Blogs</h1>
            <p>Want to start blogging but don't know where to start from? We got you covered.</p>
            </div>
          </div>
          <div className={styles.abtcard}>
          <div className={styles.icon}>
          <h2><BiNews/></h2>
            </div>
            <div className={styles.name}>
            <h1>News Updates</h1>
            <p>Receive regular news updates and stay up to date. Cancel anytime you want.</p>
            </div>
          </div>
          <div className={styles.abtcard}>
          <div className={styles.icon}>
          <h2><FaSearchDollar/></h2>
            </div>
            <div className={styles.name}>
            <h1>Job Searching</h1>
            <p>Seeking Employment Opportunities? Rest assured, we have you covered.</p>
            </div>
          </div>
          <div className={styles.abtcard}>
          <div className={styles.icon}>
          <h2><BsStopwatch/></h2>
            </div>
            <div className={styles.name}>
            <h1>Upcoming events</h1>
            <p>Stay tuned for exciting upcoming events that will showcase the latest technological advancements and inspire innovation in various industries.</p>
            </div>
          </div>
        </div>

        <div className={styles.testimonials}>
          <div className={styles.test}>
            <h1><CountUp isCounting end={500000} duration={3} />+</h1>
            <p>Blogs</p>
          </div>
          <div className={styles.test}>
          <h1><CountUp isCounting end={5000} duration={3} />+</h1>
            <p>Users</p>
          </div>
          <div className={styles.test}>
          <h1><CountUp isCounting end={50000} duration={3} />+</h1>
            <p>Job Opportunities</p>
          </div>
        </div>

        <div className={styles.startnowdiv}>
          <h1>Your first 3 blogs absolutely</h1><h1 style={{"marginTop":"0px","color":"rgb(44, 196, 82)"}}>&nbsp;FREE!</h1>
          <p>No credit card. Start instantly.</p>
          <input type='text' placeholder='Enter your email address' />
          <button>Start free trial</button>
          <br/><br/><br/> <br/><br/><br/>
        </div>

        <div className={styles.finaldiv}>
          <Link href={'#'} className={styles.links}>Terms of service</Link>
          <Link href={'#'} className={styles.links}>Privacy Policy</Link>
          <Link href={'#'} className={styles.links} style={{"border":"none"}}>Sitemap</Link>
        </div>
        <br/><br/><br/><br/><br/>
          {/* Contents */}
          {/* <div className={styles.contentdiv}>
            <h1>Popular Blogs</h1>
            <div className={styles.blogscont}>

              <div className={styles.blog}>
                <div className={styles.head}>
                  <div className={styles.image}>
                <Image 
                className={styles.img}
                src={'/maze.jpg'}
                width={1000}
                height={1000}
                alt='pfp'
                />
                </div>
                <h4>The human 312</h4>
                <button>Follow</button>
                </div>
                <div className={styles.content}>
                  <div className={styles.textcont}>
                    <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
                    </p>
                  </div>
                  <div className={styles.imagecont}>
                    <Image
                    className={styles.img}
                    src={'/blog1.jpg'}
                    width={1000}
                    height={1000}
                    alt='pic'
                    />
                  </div>
                </div>
                <div className={styles.interaction}>
                  <button><AiOutlineHeart/></button>
                  <button><BsBookmarkPlus/></button>
                </div>
              </div>


              <div className={styles.blog}>
                <div className={styles.head}>
                  <div className={styles.image}>
                <Image 
                className={styles.img}
                src={'/maze.jpg'}
                width={1000}
                height={1000}
                alt='pfp'
                />
                </div>
                <h4>The human 312</h4>
                <button>Follow</button>
                </div>
                <div className={styles.content}>
                  <div className={styles.textcont}>
                    <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
                    </p>
                  </div>
                  <div className={styles.imagecont}>
                    <Image
                    className={styles.img}
                    src={'/blog1.jpg'}
                    width={1000}
                    height={1000}
                    alt='pic'
                    />
                  </div>
                </div>
                <div className={styles.interaction}>
                  <button><AiOutlineHeart/></button>
                  <button><BsBookmarkPlus/></button>
                </div>
              </div>

              <div className={styles.blog}>
                <div className={styles.head}>
                  <div className={styles.image}>
                <Image 
                className={styles.img}
                src={'/maze.jpg'}
                width={1000}
                height={1000}
                alt='pfp'
                />
                </div>
                <h4>The human 312</h4>
                <button>Follow</button>
                </div>
                <div className={styles.content}>
                  <div className={styles.textcont}>
                    <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
                    </p>
                  </div>
                  <div className={styles.imagecont}>
                    <Image
                    className={styles.img}
                    src={'/blog1.jpg'}
                    width={1000}
                    height={1000}
                    alt='pic'
                    />
                  </div>
                </div>
                <div className={styles.interaction}>
                  <button><AiOutlineHeart/></button>
                  <button><BsBookmarkPlus/></button>
                </div>
              </div>

          


            </div>
          </div> */}

          {/* What else? */}
          {/* <br/><br/><br/><br/>
          <div className={styles.contentdiv}>
            <h1>We also have...</h1>
              <div className={styles.optionsdiv}>
                  <button id='b1' onClick={showblog}>Blogs</button>
                  <button id='b2' onClick={shownews}>News</button>
                  <button id='b4' onClick={showevents}>Events</button>
                  <button id='b3' onClick={showjobs}>Jobs</button>
              </div>

              <div className={styles.blogseg}>
                <div className={styles.searchnadd}>
                  <button><BsPlusCircle/></button>
                  <input className={styles.srch} type='text' name='searchbar' placeholder='search'/>
                </div>

              <div className={styles.subsegdiv}>
                <button style={{"color":"white","background":"black"}}>Tech</button>
                <button>Education</button>
                <button>Personal</button>
                <button>Business</button>
                <button>Other</button>
              </div>

                <div className={styles.blogscont}>

<div className={styles.blog}>
  <div className={styles.head}>
    <div className={styles.image}>
  <Image 
  className={styles.img}
  src={'/maze.jpg'}
  width={1000}
  height={1000}
  alt='pfp'
  />
  </div>
  <h4>The human 312</h4>
  <button>Follow</button>
  </div>
  <div className={styles.content}>
    <div className={styles.textcont}>
      <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
      </p>
    </div>
    <div className={styles.imagecont}>
      <Image
      className={styles.img}
      src={'/blog1.jpg'}
      width={1000}
      height={1000}
      alt='pic'
      />
    </div>
  </div>
  <div className={styles.interaction}>
    <button><AiOutlineHeart/></button>
    <button><BsBookmarkPlus/></button>
  </div>
</div>

<div className={styles.blog}>
  <div className={styles.head}>
    <div className={styles.image}>
  <Image 
  className={styles.img}
  src={'/maze.jpg'}
  width={1000}
  height={1000}
  alt='pfp'
  />
  </div>
  <h4>The human 312</h4>
  <button>Follow</button>
  </div>
  <div className={styles.content}>
    <div className={styles.textcont}>
      <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
      </p>
    </div>
    <div className={styles.imagecont}>
      <Image
      className={styles.img}
      src={'/blog1.jpg'}
      width={1000}
      height={1000}
      alt='pic'
      />
    </div>
  </div>
  <div className={styles.interaction}>
    <button><AiOutlineHeart/></button>
    <button><BsBookmarkPlus/></button>
  </div>
</div>

<div className={styles.blog}>
  <div className={styles.head}>
    <div className={styles.image}>
  <Image 
  className={styles.img}
  src={'/maze.jpg'}
  width={1000}
  height={1000}
  alt='pfp'
  />
  </div>
  <h4>The human 312</h4>
  <button>Follow</button>
  </div>
  <div className={styles.content}>
    <div className={styles.textcont}>
      <h2>14 things I wish I knew at 25 (now that I’m 38)</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor quis orci pulvinar vulputate. Aenean sit amet pulvinar mauris, vel euismod neque. Sed sed felis est. Praesent sed massa eleifend, varius nulla porta, convallis arcu. Integer feugiat, odio sit amet vehicula consequat, urna tellus mattis arcu, eu iaculis leo neque vitae magna. Morbi euismod nisi a magna viverra, pulvinar viverra purus efficitur. Vivamus vel fringilla ipsum. Fusce non arcu augue. Nam in neque faucibus, suscipit neque at, vehicula leo. Phasellus tempor varius dolor, vel commodo erat porttitor vel. Etiam auctor nisi vitae posuere tempor. Vestibulum nec metus et sem pulvinar lobortis. 
      </p>
    </div>
    <div className={styles.imagecont}>
      <Image
      className={styles.img}
      src={'/blog1.jpg'}
      width={1000}
      height={1000}
      alt='pic'
      />
    </div>
  </div>
  <div className={styles.interaction}>
    <button><AiOutlineHeart/></button>
    <button><BsBookmarkPlus/></button>
  </div>
</div>



</div>
              </div>
          </div> */}
    </div>
  )
}

export default index