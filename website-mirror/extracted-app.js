function Lp({
  className:t,variant:i="default",render:s,...r
}){
  return I6({
    defaultTagName:"span",props:Ja({
      className:tn(G6({
        variant:i
      }),t)
    },r),render:s,state:{
      slot:"badge",variant:i
    }
  })
}const Y6=[{
  name:"SHAHEED PRAMOD B.Ed College",description:"Excellence in Teacher Education. NCTE Approved.",image:"https://i.ibb.co/wFjMW67p/photo-6266973922368622074-y.jpg",link:"https://shaheedpramod.in",badge:"NCTE Approved"
},{
  name:"SHAHEED PRAMOD Higher Education",description:"Quality BBA, BCA, and BLIS programs for modern careers.",image:"https://i.ibb.co/JWybS3Yk/photo-6266973922368622077-y.jpg",link:"https://shaheedpramod.in",badge:"UGC Recognized"
},{
  name:"SHAHEED PRAMOD Nursing Institute",description:"Compassionate care, professional training. ANM, GNM, B.Sc Nursing.",image:"https://i.ibb.co/BKPB5fSv/photo-6266973922368622073-y.jpg",link:"https://spnursing.in",badge:"INC Approved"
}],q6=[{
  title:"B.Ed",category:"Education",duration:"2 Years",eligibility:"Graduation with 50%",scope:"Secondary School Teacher",image:"https://i.ibb.co/yncYLZ4L/photo-6278394468041953204-y.jpg"
},{
  title:"D.El.Ed",category:"Education",duration:"2 Years",eligibility:"10+2 with 50%",scope:"Primary School Teacher",image:"https://i.ibb.co/fdBVvJZ0/photo-6273812502441300493-x-1.jpg"
},{
  title:"B.Sc Nursing",category:"Nursing",duration:"4 Years",eligibility:"10+2 PCB with 45%",scope:"Registered Nurse, Healthcare",image:"https://i.ibb.co/yFpdHwT6/photo-6278394468041953205-y.jpg"
},{
  title:"BCA",category:"Higher Education",duration:"3 Years",eligibility:"10+2 with Math/CS",scope:"Software Developer, IT Sector",image:"https://i.ibb.co/YFRSv3sg/photo-6273812502441300440-x.jpg"
},{
  title:"BBA",category:"Higher Education",duration:"3 Years",eligibility:"10+2 Any Stream",scope:"Management, HR, Marketing",image:"https://i.ibb.co/C5w6PQQy/photo-6273812502441300439-x.jpg"
},{
  title:"GNM",category:"Nursing",duration:"3 Years",eligibility:"10+2 Any Stream",scope:"Staff Nurse, Clinical Care",image:"https://i.ibb.co/V0t65Y1L/photo-6273812502441300438-x.jpg"
},{
  title:"ANM",category:"Nursing",duration:"2 Years",eligibility:"10+2 Any Stream",scope:"Female Health Worker",image:"https://i.ibb.co/dJVrg6kD/photo-6273812502441300437-x.jpg"
},{
  title:"B.Lis",category:"Higher Education",duration:"1 Year",eligibility:"Graduation (Any Stream)",scope:"Librarian, Information Officer",image:"https://i.ibb.co/ccbNVbrs/photo-6273812502441300441-x.jpg"
}],F6=[{
  name:"Priya Sharma",course:"B.Ed",review:"The faculty here is exceptional. They focus on practical teaching skills that really prepared me for my career.",rating:5,photo:"https://i.pravatar.cc/150?u=priya"
},{
  name:"Manoj Kumar",course:"BCA",review:"Modern labs and industry-aligned curriculum. I got placed in a top IT firm right after my final semester.",rating:5,photo:"https://i.pravatar.cc/150?u=manoj"
},{
  name:"Poonam Kumari",course:"GNM",review:"The clinical exposure at SHAHEED PRAMOD Nursing Institute is unmatched. We get hands-on training with real patients.",rating:5,photo:"https://i.pravatar.cc/150?u=poonam"
},{
  name:"Uday Kumar",course:"B.Sc Nursing",review:"The clinical training and hospital exposure are outstanding. The faculty ensures we are ready for real-life medical situations. I'm proud to be a part of this institute.",rating:5,photo:"https://i.ibb.co/yBFwtpdf/photo-6278394468041953214-y.jpg"
}],X6=["https://i.ibb.co/RXxQ0mX/photo-6278394468041953224-y.jpg","https://i.ibb.co/0phddZzH/photo-6278394468041953223-y.jpg","https://i.ibb.co/3929192n/photo-6278394468041953222-y.jpg","https://i.ibb.co/FLvFpFLF/photo-6278394468041953221-y.jpg","https://i.ibb.co/5h6RqMwb/photo-6278394468041953219-x.jpg","https://i.ibb.co/RTP53HVV/photo-6278394468041953218-x.jpg","https://i.ibb.co/jFY5jQm/photo-6278394468041953217-x.jpg","https://i.ibb.co/4nWJDCp4/photo-6266973922368622073-y.jpg","https://i.ibb.co/VYPZ31Bg/photo-6253643297364577725-y.jpg","https://i.ibb.co/S4rRwsBJ/photo-6253643297364577722-y.jpg"],kc=[{
  title:"B.Ed Courses",subtitle:"Shape the Minds of Tomorrow",image:"https://i.imageupload.app/f8b89fff171fefabefd4.jpeg"
},{
  title:"Nursing Courses",subtitle:"Compassion Meets Professionalism",image:"https://i.imageupload.app/6df61b3de596a6205061.jpeg"
},{
  title:"BBA/BCA Courses",subtitle:"Innovate and Lead in the Digital Age",image:"https://i.imageupload.app/b71a5ee9b79f53ae0443.jpeg"
}],K6=()=>w.jsx("div",{
  className:"bg-royal-blue text-white py-2 overflow-hidden border-b border-gold/30",children:w.jsx("div",{
    className:"scrolling-text font-medium",children:"पैसा नही बनेगा आपके पढ़ाई में बाधा - Bihar Student Credit Card. • Admissions Open 2026 – Apply Now Today • Limited Seats Available for B.Ed & Nursing • Scholarship Opportunities for Meritorious Students • Visit Campus for Free Career Counseling •"
  })
}),Z6=()=>{
  const[t,i]=A.useState(!1),[s,r]=A.useState(!1);
  return A.useEffect(()=>{
    const l=()=>i(window.scrollY>50);
    return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)
  },[]),w.jsxs("nav",{
    className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"glass py-2 shadow-lg":"bg-transparent py-4"}`,children:[w.jsxs("div",{
      className:"container mx-auto px-4 flex items-center justify-between",children:[w.jsxs("div",{
        className:"flex items-center gap-3",children:[w.jsx("img",{
          src:"https://i.ibb.co/7tLhYn0B/photo-6266973922368622069-y.jpg",alt:"SHAHEED PRAMOD Group of Education Logo",className:"h-12 w-12 object-contain rounded-full bg-white p-1",referrerPolicy:"no-referrer"
        }),w.jsxs("div",{
          className:"hidden sm:block",children:[w.jsx("h1",{
            className:`text-lg font-bold leading-tight ${t?"text-royal-blue":"text-white"}`,children:"SHAHEED PRAMOD"
          }),w.jsx("p",{
            className:"text-[10px] font-semibold tracking-widest uppercase text-gold",children:"Group of Education"
          })]
        })]
      }),w.jsxs("div",{
        className:"hidden lg:flex items-center gap-8",children:[["Home","Institutions","Courses","About","Gallery","Contact"].map(l=>w.jsx("a",{
          href:`#${l.toLowerCase()}`,className:`text-sm font-semibold uppercase tracking-wider hover:text-gold transition-colors ${t?"text-royal-blue":"text-white"}`,children:l
        },l)),w.jsx(li,{
          className:"bg-gold hover:bg-gold/90 text-royal-blue font-bold rounded-full px-6",onClick:()=>{
            var l;
            return(l=document.getElementById("admission"))==null?void 0:l.scrollIntoView({
              behavior:"smooth"
            })
          },children:"Apply Now"
        })]
      }),w.jsx("button",{
        className:"lg:hidden text-white",onClick:()=>r(!s),children:s?w.jsx(op,{
          className:t?"text-royal-blue":"text-white"
        }):w.jsx(WO,{
          className:t?"text-royal-blue":"text-white"
        })
      })]
    }),w.jsx(np,{
      children:s&&w.jsx(ci.div,{
        initial:{
          opacity:0,height:0
        },animate:{
          opacity:1,height:"auto"
        },exit:{
          opacity:0,height:0
        },className:"lg:hidden bg-white border-t border-gray-100 overflow-hidden",children:w.jsxs("div",{
          className:"flex flex-col p-4 gap-4",children:[["Home","Institutions","Courses","About","Gallery","Contact"].map(l=>w.jsx("a",{
            href:`#${l.toLowerCase()}`,className:"text-royal-blue font-semibold uppercase tracking-wider",onClick:()=>r(!1),children:l
          },l)),w.jsx(li,{
            className:"bg-royal-blue text-white w-full",onClick:()=>{
              var l;
              r(!1),(l=document.getElementById("admission"))==null||l.scrollIntoView({
                behavior:"smooth"
              })
            },children:"Apply Now"
          })]
        })
      })
    })]
  })
},Q6=()=>{
  const[t,i]=A.useState(0);
  return A.useEffect(()=>{
    const s=setInterval(()=>{
      i(r=>(r+1)%kc.length)
    },3e3);
    return()=>clearInterval(s)
  },[]),w.jsxs("section",{
    id:"home",className:"relative h-screen w-full overflow-hidden bg-black",children:[w.jsx(np,{
      mode:"wait",children:w.jsxs(ci.div,{
        initial:{
          opacity:0,scale:1.1
        },animate:{
          opacity:1,scale:1
        },exit:{
          opacity:0
        },transition:{
          duration:1
        },className:"absolute inset-0",children:[w.jsx("div",{
          className:"absolute inset-0 bg-gradient-to-r from-royal-blue/80 to-transparent z-10"
        }),w.jsx("img",{
          src:kc[t].image,alt:"Hero",className:"w-full h-full object-cover",referrerPolicy:"no-referrer"
        })]
      },t)
    }),w.jsx("div",{
      className:"absolute inset-0 z-20 flex items-center",children:w.jsx("div",{
        className:"container mx-auto px-4",children:w.jsxs(ci.div,{
          initial:{
            x:-50,opacity:0
          },animate:{
            x:0,opacity:1
          },transition:{
            delay:.5
          },className:"max-w-3xl",children:[w.jsx(Lp,{
            className:"bg-gold text-royal-blue mb-4 px-4 py-1 text-sm font-bold uppercase tracking-widest",children:"AICTE / NCTE Approved"
          }),w.jsxs("h1",{
            className:"text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight",children:["SHAHEED PRAMOD ",w.jsx("br",{
              
            }),w.jsx("span",{
              className:"text-gold",children:"Group of Education"
            })]
          }),w.jsx("p",{
            className:"text-xl md:text-2xl text-white/90 mb-8 font-medium",children:kc[t].subtitle
          }),w.jsxs("div",{
            className:"flex flex-wrap gap-4",children:[w.jsx(li,{
              size:"lg",className:"bg-gold hover:bg-gold/90 text-royal-blue font-bold px-8 py-6 text-lg rounded-full",onClick:()=>{
                var s;
                return(s=document.getElementById("admission"))==null?void 0:s.scrollIntoView({
                  behavior:"smooth"
                })
              },children:"Apply Now"
            }),w.jsx(li,{
              size:"lg",variant:"outline",className:"border-white text-white hover:bg-white hover:text-royal-blue font-bold px-8 py-6 text-lg rounded-full",onClick:()=>{
                var s;
                return(s=document.getElementById("courses"))==null?void 0:s.scrollIntoView({
                  behavior:"smooth"
                })
              },children:"Explore all Courses"
            }),w.jsxs(li,{
              size:"lg",variant:"ghost",className:"text-white hover:text-gold font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2",onClick:()=>{
                var s;
                return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({
                  behavior:"smooth"
                })
              },children:[w.jsx(lm,{
                className:"w-5 h-5"
              }),"Free Career Counseling"]
            })]
          })]
        })
      })
    }),w.jsx("div",{
      className:"absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2",children:kc.map((s,r)=>w.jsx("button",{
        onClick:()=>i(r),className:`h-1.5 rounded-full transition-all duration-300 ${t===r?"w-8 bg-gold":"w-4 bg-white/50"}`
      },r))
    })]
  })
},W6=()=>w.jsx("section",{
  id:"institutions",className:"py-24 bg-gray-50",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsxs("div",{
      className:"text-center mb-16",children:[w.jsx("h2",{
        className:"text-4xl md:text-5xl font-bold text-royal-blue mb-4",children:"Our Institutions"
      }),w.jsx("div",{
        className:"h-1.5 w-24 bg-gold mx-auto rounded-full"
      }),w.jsx("p",{
        className:"mt-6 text-gray-600 max-w-2xl mx-auto text-lg",children:"A multi-college integrated platform dedicated to excellence in various professional fields."
      })]
    }),w.jsx("div",{
      className:"grid md:grid-cols-3 gap-8",children:Y6.map((t,i)=>w.jsx(ci.div,{
        whileHover:{
          y:-10
        },className:"group cursor-pointer",onClick:()=>window.open(t.link,"_blank"),children:w.jsxs(fp,{
          className:"overflow-hidden border-none shadow-xl h-full flex flex-col",children:[w.jsxs("div",{
            className:"relative h-64 overflow-hidden",children:[w.jsx("img",{
              src:t.image,alt:t.name,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",referrerPolicy:"no-referrer"
            }),w.jsx("div",{
              className:"absolute top-4 left-4",children:w.jsx(Lp,{
                className:"bg-royal-blue text-white",children:t.badge
              })
            }),w.jsx("div",{
              className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6",children:w.jsx(li,{
                className:"w-full bg-gold text-royal-blue font-bold",children:"Visit Now"
              })
            })]
          }),w.jsxs(dp,{
            className:"p-6 flex-grow flex flex-col",children:[w.jsx("h3",{
              className:"text-xl font-bold text-royal-blue mb-2 group-hover:text-gold transition-colors",children:t.name
            }),w.jsx("p",{
              className:"text-gray-600 mb-4 flex-grow",children:t.description
            }),w.jsxs("div",{
              className:"flex items-center text-gold font-bold gap-2",children:["Learn More ",w.jsx(tu,{
                className:"w-4 h-4"
              })]
            })]
          })]
        })
      },t.name))
    })]
  })
}),$6=()=>w.jsx("section",{
  id:"courses",className:"py-24 bg-white",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsxs("div",{
      className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",children:[w.jsxs("div",{
        children:[w.jsx("h2",{
          className:"text-4xl md:text-5xl font-bold text-royal-blue mb-4",children:"Academic Programs"
        }),w.jsx("div",{
          className:"h-1.5 w-24 bg-gold rounded-full"
        })]
      }),w.jsx("p",{
        className:"text-gray-600 max-w-md text-lg",children:"Explore our wide range of professional courses designed to build successful careers."
      })]
    }),w.jsx("div",{
      className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8",children:q6.map((t,i)=>w.jsx(ci.div,{
        initial:{
          opacity:0,y:20
        },whileInView:{
          opacity:1,y:0
        },transition:{
          delay:i*.1
        },viewport:{
          once:!0
        },children:w.jsxs(fp,{
          className:"overflow-hidden border border-gray-100 hover:border-gold/50 transition-all hover:shadow-2xl group",children:[w.jsxs("div",{
            className:"relative h-48 overflow-hidden",children:[w.jsx("img",{
              src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",referrerPolicy:"no-referrer"
            }),w.jsx("div",{
              className:"absolute inset-0 bg-royal-blue/20 group-hover:bg-transparent transition-colors"
            }),w.jsx(Lp,{
              className:"absolute top-4 right-4 bg-white text-royal-blue font-bold",children:t.category
            })]
          }),w.jsxs(dp,{
            className:"p-6",children:[w.jsx("h3",{
              className:"text-2xl font-bold text-royal-blue mb-4",children:t.title
            }),w.jsxs("div",{
              className:"space-y-3 mb-6",children:[w.jsxs("div",{
                className:"flex items-center gap-3 text-sm text-gray-600",children:[w.jsx($1,{
                  className:"w-4 h-4 text-gold"
                }),w.jsxs("span",{
                  children:[w.jsx("strong",{
                    children:"Duration:"
                  })," ",t.duration]
                })]
              }),w.jsxs("div",{
                className:"flex items-center gap-3 text-sm text-gray-600",children:[w.jsx(PO,{
                  className:"w-4 h-4 text-gold"
                }),w.jsxs("span",{
                  children:[w.jsx("strong",{
                    children:"Eligibility:"
                  })," ",t.eligibility]
                })]
              }),w.jsxs("div",{
                className:"flex items-center gap-3 text-sm text-gray-600",children:[w.jsx(ew,{
                  className:"w-4 h-4 text-gold"
                }),w.jsxs("span",{
                  children:[w.jsx("strong",{
                    children:"Scope:"
                  })," ",t.scope]
                })]
              })]
            }),w.jsx(li,{
              className:"w-full bg-royal-blue hover:bg-royal-blue/90 text-white font-bold group-hover:bg-gold group-hover:text-royal-blue transition-colors",onClick:()=>{
                var s;
                return(s=document.getElementById("admission"))==null?void 0:s.scrollIntoView({
                  behavior:"smooth"
                })
              },children:"Apply Now"
            })]
          })]
        })
      },t.title))
    })]
  })
}),J6=()=>w.jsxs("section",{
  id:"about",className:"py-24 bg-royal-blue text-white overflow-hidden relative",children:[w.jsx("div",{
    className:"absolute top-0 right-0 w-1/3 h-full bg-gold/10 skew-x-12 translate-x-1/2"
  }),w.jsx("div",{
    className:"container mx-auto px-4 relative z-10",children:w.jsxs("div",{
      className:"grid md:grid-cols-2 gap-16 items-center",children:[w.jsxs(ci.div,{
        initial:{
          x:-100,opacity:0
        },whileInView:{
          x:0,opacity:1
        },viewport:{
          once:!0
        },className:"relative",children:[w.jsx("div",{
          className:"absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold"
        }),w.jsx("div",{
          className:"absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold"
        }),w.jsx("div",{
          className:"rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl",children:w.jsx("img",{
            src:"https://i.ibb.co/2Y35bC0v/photo-6253643297364577727-y.jpg",alt:"Director",className:"w-full aspect-[4/5] object-cover",referrerPolicy:"no-referrer"
          })
        }),w.jsxs("div",{
          className:"absolute bottom-6 left-6 right-6 glass p-6 rounded-xl border-gold/50",children:[w.jsx("h3",{
            className:"text-2xl font-bold text-royal-blue",children:"Shyam Nandan Yadav"
          }),w.jsx("p",{
            className:"text-royal-blue/80 font-bold uppercase tracking-widest text-xs",children:"Director, SHAHEED PRAMOD Group of Education"
          })]
        })]
      }),w.jsxs(ci.div,{
        initial:{
          x:100,opacity:0
        },whileInView:{
          x:0,opacity:1
        },viewport:{
          once:!0
        },children:[w.jsx("h2",{
          className:"text-gold text-xl font-bold uppercase tracking-widest mb-4",children:"Message from the Director"
        }),w.jsxs("h3",{
          className:"text-4xl md:text-5xl font-bold mb-8 leading-tight",children:["Empowering Future Through ",w.jsx("br",{
            
          }),w.jsx("span",{
            className:"text-gold",children:"Quality Education"
          })]
        }),w.jsxs("div",{
          className:"space-y-6 text-lg text-white/80 leading-relaxed",children:[w.jsx("p",{
            children:'"Under the visionary leadership of Shri Shyam Nandan Yadav, we are committed to delivering quality education, discipline, and career-focused learning."'
          }),w.jsx("p",{
            children:"Our mission is to bridge the gap between academic learning and industry requirements. We believe in nurturing not just professionals, but responsible citizens who can contribute meaningfully to society."
          }),w.jsxs("div",{
            className:"grid grid-cols-2 gap-8 pt-8",children:[w.jsxs("div",{
              className:"flex items-center gap-4",children:[w.jsx("div",{
                className:"bg-gold/20 p-3 rounded-lg",children:w.jsx(Z1,{
                  className:"w-8 h-8 text-gold"
                })
              }),w.jsxs("div",{
                children:[w.jsx("h4",{
                  className:"font-bold text-2xl",children:"15+"
                }),w.jsx("p",{
                  className:"text-sm opacity-70",children:"Years Excellence"
                })]
              })]
            }),w.jsxs("div",{
              className:"flex items-center gap-4",children:[w.jsx("div",{
                className:"bg-gold/20 p-3 rounded-lg",children:w.jsx(iw,{
                  className:"w-8 h-8 text-gold"
                })
              }),w.jsxs("div",{
                children:[w.jsx("h4",{
                  className:"font-bold text-2xl",children:"5000+"
                }),w.jsx("p",{
                  className:"text-sm opacity-70",children:"Students Trained"
                })]
              })]
            })]
          })]
        })]
      })]
    })
  })]
}),eV=()=>w.jsx("section",{
  className:"py-24 bg-white",children:w.jsx("div",{
    className:"container mx-auto px-4",children:w.jsxs("div",{
      className:"grid md:grid-cols-2 gap-12",children:[w.jsxs(ci.div,{
        whileHover:{
          scale:1.02
        },className:"bg-gray-50 p-12 rounded-3xl border-l-8 border-royal-blue shadow-lg",children:[w.jsx("div",{
          className:"bg-royal-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6",children:w.jsx(tu,{
            className:"text-royal-blue w-8 h-8"
          })
        }),w.jsx("h3",{
          className:"text-3xl font-bold text-royal-blue mb-4",children:"Our Mission"
        }),w.jsx("p",{
          className:"text-xl text-gray-600 leading-relaxed",children:"“To provide quality, affordable and skill-based education to every student, ensuring they are ready for the challenges of the modern world.”"
        })]
      }),w.jsxs(ci.div,{
        whileHover:{
          scale:1.02
        },className:"bg-gray-50 p-12 rounded-3xl border-l-8 border-gold shadow-lg",children:[w.jsx("div",{
          className:"bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6",children:w.jsx(tu,{
            className:"text-gold w-8 h-8"
          })
        }),w.jsx("h3",{
          className:"text-3xl font-bold text-royal-blue mb-4",children:"Our Vision"
        }),w.jsx("p",{
          className:"text-xl text-gray-600 leading-relaxed",children:"“To become a leading educational hub in Bihar, recognized for academic excellence, innovation, and holistic development of students.”"
        })]
      })]
    })
  })
}),tV=()=>w.jsx("section",{
  className:"py-24 bg-gray-50",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsxs("div",{
      className:"text-center mb-16",children:[w.jsx("h2",{
        className:"text-4xl md:text-5xl font-bold text-royal-blue mb-4",children:"World-Class Facilities"
      }),w.jsx("div",{
        className:"h-1.5 w-24 bg-gold mx-auto rounded-full"
      })]
    }),w.jsx("div",{
      className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",children:[{
        name:"Smart Classrooms",icon:w.jsx(Jb,{
          
        }),img:"https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
      },{
        name:"Computer Labs",icon:w.jsx(iw,{
          
        }),img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
      },{
        name:"Library",icon:w.jsx(Jb,{
          
        }),img:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
      },{
        name:"Practical Labs",icon:w.jsx(Z1,{
          
        }),img:"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80"
      },{
        name:"Hostel",icon:w.jsx($1,{
          
        }),img:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80"
      }].map((t,i)=>w.jsx(ci.div,{
        whileHover:{
          y:-5
        },className:"group",children:w.jsxs("div",{
          className:"relative h-64 rounded-2xl overflow-hidden mb-4 shadow-md",children:[w.jsx("img",{
            src:t.img,alt:t.name,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",referrerPolicy:"no-referrer"
          }),w.jsx("div",{
            className:"absolute inset-0 bg-royal-blue/40 group-hover:bg-royal-blue/20 transition-colors flex items-center justify-center",children:w.jsxs("div",{
              className:"text-white text-center p-4",children:[w.jsx("div",{
                className:"mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:oS.cloneElement(t.icon,{
                  className:"w-8 h-8"
                })
              }),w.jsx("h4",{
                className:"font-bold text-lg",children:t.name
              })]
            })
          })]
        })
      },t.name))
    })]
  })
}),nV=()=>w.jsx("section",{
  className:"py-24 bg-white overflow-hidden",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsxs("div",{
      className:"text-center mb-16",children:[w.jsx("h2",{
        className:"text-4xl md:text-5xl font-bold text-royal-blue mb-4",children:"Student Testimonials"
      }),w.jsx("div",{
        className:"h-1.5 w-24 bg-gold mx-auto rounded-full"
      })]
    }),w.jsxs(f3,{
      opts:{
        align:"start",loop:!0
      },className:"w-full max-w-5xl mx-auto",children:[w.jsx(d3,{
        children:F6.map((t,i)=>w.jsx(h3,{
          className:"md:basis-1/2 lg:basis-1/3 p-4",children:w.jsx(fp,{
            className:"h-full border-none shadow-lg bg-gray-50",children:w.jsxs(dp,{
              className:"p-8",children:[w.jsx("div",{
                className:"flex gap-1 mb-6",children:[...Array(t.rating)].map((s,r)=>w.jsx(tD,{
                  className:"w-5 h-5 fill-gold text-gold"
                },r))
              }),w.jsxs("p",{
                className:"text-gray-600 italic mb-8",children:['"',t.review,'"']
              }),w.jsxs("div",{
                className:"flex items-center gap-4",children:[w.jsx("img",{
                  src:t.photo,alt:t.name,className:"w-12 h-12 rounded-full border-2 border-gold"
                }),w.jsxs("div",{
                  children:[w.jsx("h4",{
                    className:"font-bold text-royal-blue",children:t.name
                  }),w.jsx("p",{
                    className:"text-xs font-bold text-gold uppercase tracking-widest",children:t.course
                  })]
                })]
              })]
            })
          })
        },i))
      }),w.jsxs("div",{
        className:"hidden md:block",children:[w.jsx(m3,{
          className:"bg-royal-blue text-white hover:bg-gold hover:text-royal-blue border-none"
        }),w.jsx(p3,{
          className:"bg-royal-blue text-white hover:bg-gold hover:text-royal-blue border-none"
        })]
      })]
    })]
  })
}),iV=()=>{
  const[t,i]=A.useState({
    name:"",phone:"",email:"",dob:"",gender:"",course:"",tenthMarks:"",twelfthMarks:"",graduationMarks:"",address:"",photoName:""
  }),s=r=>{
    r.preventDefault();
    const l=`*Admission Registration Form*

*Personal Details:*
Name: ${t.name}
Phone: ${t.phone}
Email: ${t.email}
DOB: ${t.dob}
Gender: ${t.gender}

*Academic Details:*
10th Marks: ${t.tenthMarks}%
12th Marks: ${t.twelfthMarks}%
Graduation: ${t.graduationMarks||"N/A"}

*Course Applied:*
${t.course}

*Address:*
${t.address}

*Photo Uploaded:* ${t.photoName?"Yes ("+t.photoName+")":"No"}`;
    window.open(`https://wa.me/918877612728?text=${encodeURIComponent(l)}`,"_blank")
  };
  return w.jsxs("section",{
    id:"admission",className:"py-24 bg-royal-blue relative overflow-hidden",children:[w.jsx("div",{
      className:"absolute inset-0 opacity-10",children:w.jsx("img",{
        src:"input_file_11.png",alt:"bg",className:"w-full h-full object-cover",referrerPolicy:"no-referrer"
      })
    }),w.jsx("div",{
      className:"container mx-auto px-4 relative z-10",children:w.jsxs("div",{
        className:"max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2",children:[w.jsxs("div",{
          className:"p-12 bg-gold text-royal-blue flex flex-col justify-center",children:[w.jsx("h2",{
            className:"text-4xl font-bold mb-6",children:"Start Your Journey Today"
          }),w.jsx("p",{
            className:"text-lg mb-8 opacity-90",children:"Fill out the form to get a call back from our expert career counselors. We'll help you choose the right path for your future."
          }),w.jsxs("div",{
            className:"space-y-4",children:[w.jsxs("div",{
              className:"flex items-center gap-4",children:[w.jsx("div",{
                className:"bg-royal-blue/10 p-2 rounded-full",children:w.jsx(nu,{
                  className:"w-5 h-5"
                })
              }),w.jsx("span",{
                className:"font-bold",children:"8877612728, 0621 2273439"
              })]
            }),w.jsxs("div",{
              className:"flex items-center gap-4",children:[w.jsx("div",{
                className:"bg-royal-blue/10 p-2 rounded-full",children:w.jsx(nw,{
                  className:"w-5 h-5"
                })
              }),w.jsx("span",{
                className:"font-bold",children:"shaheedpramodb.ed@gmail.com"
              })]
            })]
          })]
        }),w.jsxs("div",{
          className:"p-12",children:[w.jsx("h3",{
            className:"text-2xl font-bold text-royal-blue mb-8",children:"Student Registration"
          }),w.jsxs("form",{
            onSubmit:s,className:"space-y-6",children:[w.jsxs("div",{
              className:"grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Full Name"
                }),w.jsx(is,{
                  placeholder:"Enter your name",className:"rounded-xl border-gray-200",required:!0,value:t.name,onChange:r=>i({
                    ...t,name:r.target.value
                  })
                })]
              }),w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Phone Number"
                }),w.jsx(is,{
                  placeholder:"Enter mobile number",className:"rounded-xl border-gray-200",required:!0,value:t.phone,onChange:r=>i({
                    ...t,phone:r.target.value
                  })
                })]
              })]
            }),w.jsxs("div",{
              className:"grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Email Address"
                }),w.jsx(is,{
                  type:"email",placeholder:"Enter email",className:"rounded-xl border-gray-200",required:!0,value:t.email,onChange:r=>i({
                    ...t,email:r.target.value
                  })
                })]
              }),w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Date of Birth"
                }),w.jsx(is,{
                  type:"date",className:"rounded-xl border-gray-200",required:!0,value:t.dob,onChange:r=>i({
                    ...t,dob:r.target.value
                  })
                })]
              })]
            }),w.jsxs("div",{
              className:"grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Gender"
                }),w.jsxs(tS,{
                  onValueChange:r=>i({
                    ...t,gender:r
                  }),children:[w.jsx(iS,{
                    className:"rounded-xl border-gray-200",children:w.jsx(nS,{
                      placeholder:"Select Gender"
                    })
                  }),w.jsxs(sS,{
                    children:[w.jsx(Ri,{
                      value:"Male",children:"Male"
                    }),w.jsx(Ri,{
                      value:"Female",children:"Female"
                    }),w.jsx(Ri,{
                      value:"Other",children:"Other"
                    })]
                  })]
                })]
              }),w.jsxs("div",{
                className:"space-y-2",children:[w.jsx("label",{
                  className:"text-sm font-bold text-gray-700",children:"Select Course"
                }),w.jsxs(tS,{
                  onValueChange:r=>i({
                    ...t,course:r
                  }),children:[w.jsx(iS,{
                    className:"rounded-xl border-gray-200",children:w.jsx(nS,{
                      placeholder:"Choose a course"
                    })
                  }),w.jsxs(sS,{
                    children:[w.jsx(Ri,{
                      value:"B.Ed",children:"B.Ed"
                    }),w.jsx(Ri,{
                      value:"D.El.Ed",children:"D.El.Ed"
                    }),w.jsx(Ri,{
                      value:"B.Sc Nursing",children:"B.Sc Nursing"
                    }),w.jsx(Ri,{
                      value:"GNM",children:"GNM"
                    }),w.jsx(Ri,{
                      value:"ANM",children:"ANM"
                    }),w.jsx(Ri,{
                      value:"BCA",children:"BCA"
                    }),w.jsx(Ri,{
                      value:"BBA",children:"BBA"
                    })]
                  })]
                })]
              })]
            }),w.jsxs("div",{
              className:"border-t border-gray-100 pt-6",children:[w.jsx("h4",{
                className:"text-sm font-bold text-royal-blue mb-4 uppercase tracking-wider",children:"Academic Details"
              }),w.jsxs("div",{
                className:"grid md:grid-cols-3 gap-4",children:[w.jsxs("div",{
                  className:"space-y-2",children:[w.jsx("label",{
                    className:"text-xs font-bold text-gray-500",children:"10th (%)"
                  }),w.jsx(is,{
                    placeholder:"e.g. 85",className:"rounded-xl border-gray-200",required:!0,value:t.tenthMarks,onChange:r=>i({
                      ...t,tenthMarks:r.target.value
                    })
                  })]
                }),w.jsxs("div",{
                  className:"space-y-2",children:[w.jsx("label",{
                    className:"text-xs font-bold text-gray-500",children:"12th (%)"
                  }),w.jsx(is,{
                    placeholder:"e.g. 82",className:"rounded-xl border-gray-200",required:!0,value:t.twelfthMarks,onChange:r=>i({
                      ...t,twelfthMarks:r.target.value
                    })
                  })]
                }),w.jsxs("div",{
                  className:"space-y-2",children:[w.jsx("label",{
                    className:"text-xs font-bold text-gray-500",children:"Graduation (%)"
                  }),w.jsx(is,{
                    placeholder:"Optional",className:"rounded-xl border-gray-200",value:t.graduationMarks,onChange:r=>i({
                      ...t,graduationMarks:r.target.value
                    })
                  })]
                })]
              })]
            }),w.jsxs("div",{
              className:"space-y-2",children:[w.jsx("label",{
                className:"text-sm font-bold text-gray-700",children:"Upload Passport Photo"
              }),w.jsx("div",{
                className:"relative",children:w.jsx(is,{
                  type:"file",accept:"image/*",className:"rounded-xl border-gray-200 cursor-pointer pt-2",onChange:r=>{
                    var c;
                    const l=(c=r.target.files)==null?void 0:c[0];
                    l&&i({
                      ...t,photoName:l.name
                    })
                  }
                })
              })]
            }),w.jsxs("div",{
              className:"space-y-2",children:[w.jsx("label",{
                className:"text-sm font-bold text-gray-700",children:"Permanent Address"
              }),w.jsx(P6,{
                placeholder:"Full address with PIN code",className:"rounded-xl border-gray-200 h-24",required:!0,value:t.address,onChange:r=>i({
                  ...t,address:r.target.value
                })
              })]
            }),w.jsx(li,{
              type:"submit",className:"w-full bg-royal-blue hover:bg-gold hover:text-royal-blue text-white font-bold py-6 rounded-xl transition-all shadow-lg",children:"Complete Registration"
            })]
          })]
        })]
      })
    })]
  })
},sV=()=>w.jsx("section",{
  id:"gallery",className:"py-24 bg-white",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsx("div",{
      className:"flex flex-col md:flex-row justify-between items-center mb-16",children:w.jsxs("div",{
        className:"text-center md:text-left mb-8 md:mb-0",children:[w.jsx("h2",{
          className:"text-4xl md:text-5xl font-bold text-royal-blue mb-4",children:"Campus Gallery"
        }),w.jsx("div",{
          className:"h-1.5 w-24 bg-gold rounded-full"
        })]
      })
    }),w.jsx("div",{
      className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:X6.map((t,i)=>w.jsx("div",{
        children:w.jsxs(jz,{
          children:[w.jsx(zz,{
            nativeButton:!1,render:w.jsxs(ci.div,{
              whileHover:{
                scale:1.05
              },className:"cursor-pointer rounded-xl overflow-hidden h-64 shadow-lg group relative",children:[w.jsx("img",{
                src:t,alt:`Gallery ${i}`,className:"w-full h-full object-cover",referrerPolicy:"no-referrer"
              }),w.jsx("div",{
                className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:w.jsx(tu,{
                  className:"text-white w-8 h-8"
                })
              })]
            })
          }),w.jsx(kz,{
            className:"max-w-4xl p-0 overflow-hidden bg-transparent border-none",children:w.jsx("img",{
              src:t,alt:"Preview",className:"w-full h-auto rounded-xl",referrerPolicy:"no-referrer"
            })
          })]
        })
      },i))
    })]
  })
}),oV=()=>w.jsx("section",{
  id:"contact",className:"py-24 bg-gray-50",children:w.jsx("div",{
    className:"container mx-auto px-4",children:w.jsxs("div",{
      className:"grid lg:grid-cols-2 gap-16",children:[w.jsxs("div",{
        children:[w.jsx("h2",{
          className:"text-4xl font-bold text-royal-blue mb-8",children:"Get In Touch"
        }),w.jsxs("div",{
          className:"space-y-8",children:[w.jsxs("div",{
            className:"flex gap-6",children:[w.jsx("div",{
              className:"bg-white p-4 rounded-2xl shadow-md text-gold h-fit",children:w.jsx(ZO,{
                className:"w-6 h-6"
              })
            }),w.jsxs("div",{
              children:[w.jsx("h4",{
                className:"font-bold text-xl text-royal-blue mb-2",children:"Our Address"
              }),w.jsx("p",{
                className:"text-gray-600",children:"Susta Madhopur, Muzaffarpur, Bihar - 842002"
              })]
            })]
          }),w.jsxs("div",{
            className:"flex gap-6",children:[w.jsx("div",{
              className:"bg-white p-4 rounded-2xl shadow-md text-gold h-fit",children:w.jsx(nu,{
                className:"w-6 h-6"
              })
            }),w.jsxs("div",{
              children:[w.jsx("h4",{
                className:"font-bold text-xl text-royal-blue mb-2",children:"Call Us"
              }),w.jsx("p",{
                className:"text-gray-600",children:"0621 2273439, 8877612728, 8969094175"
              })]
            })]
          }),w.jsxs("div",{
            className:"flex gap-6",children:[w.jsx("div",{
              className:"bg-white p-4 rounded-2xl shadow-md text-gold h-fit",children:w.jsx(nw,{
                className:"w-6 h-6"
              })
            }),w.jsxs("div",{
              children:[w.jsx("h4",{
                className:"font-bold text-xl text-royal-blue mb-2",children:"Email Us"
              }),w.jsx("p",{
                className:"text-gray-600",children:"shaheedpramodb.ed@gmail.com"
              })]
            })]
          })]
        }),w.jsx("div",{
          className:"mt-12 flex gap-4",children:[J1,tw,iD,sw].map((t,i)=>w.jsx("a",{
            href:"#",className:"bg-royal-blue text-white p-3 rounded-full hover:bg-gold hover:text-royal-blue transition-all",children:w.jsx(t,{
              className:"w-5 h-5"
            })
          },i))
        })]
      }),w.jsx("div",{
        className:"rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px]",children:w.jsx("iframe",{
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.428581005128!2d85.384298!3d26.080355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed112233445566%3A0x1122334455667788!2sSusta%20Madhopur%2C%20Muzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712710000000!5m2!1sen!2sin",width:"100%",height:"100%",style:{
            border:0
          },allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"
        })
      })]
    })
  })
}),rV=()=>w.jsx("footer",{
  className:"bg-royal-blue text-white pt-24 pb-12",children:w.jsxs("div",{
    className:"container mx-auto px-4",children:[w.jsxs("div",{
      className:"grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",children:[w.jsxs("div",{
        className:"col-span-1 lg:col-span-1",children:[w.jsxs("div",{
          className:"flex items-center gap-3 mb-6",children:[w.jsx("img",{
            src:"https://i.ibb.co/7tLhYn0B/photo-6266973922368622069-y.jpg",alt:"SHAHEED PRAMOD Group of Education Logo",className:"h-12 w-12 object-contain rounded-full bg-white p-1",referrerPolicy:"no-referrer"
          }),w.jsxs("div",{
            children:[w.jsx("h2",{
              className:"text-xl font-bold",children:"SHAHEED PRAMOD"
            }),w.jsx("p",{
              className:"text-[10px] text-gold font-bold uppercase tracking-widest",children:"Group of Education"
            })]
          })]
        }),w.jsx("p",{
          className:"text-white/70 leading-relaxed mb-6",children:"Empowering the next generation of professionals through quality education, modern facilities, and expert guidance."
        }),w.jsxs("div",{
          className:"flex gap-4",children:[w.jsx("img",{
            src:"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/NCTE_logo.png/220px-NCTE_logo.png",alt:"NCTE",className:"h-10 opacity-50 grayscale hover:grayscale-0 transition-all"
          }),w.jsx("img",{
            src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Indian_Nursing_Council_logo.png/220px-Indian_Nursing_Council_logo.png",alt:"INC",className:"h-10 opacity-50 grayscale hover:grayscale-0 transition-all"
          })]
        }),w.jsxs("div",{
          className:"flex items-center gap-4 mt-6",children:[w.jsx("a",{
            href:"https://www.facebook.com/share/1BQadJ64X2/",target:"_blank",rel:"noreferrer",className:"text-white/50 hover:text-[#1877F2] transition-colors bg-white/10 p-2 rounded-full hover:bg-white",children:w.jsx(J1,{
              className:"w-5 h-5"
            })
          }),w.jsx("a",{
            href:"https://www.instagram.com/shaheedpramodhighereducation?igsh=MXZzYWhlMmh2Zmg3MQ==",target:"_blank",rel:"noreferrer",className:"text-white/50 hover:text-[#E1306C] transition-colors bg-white/10 p-2 rounded-full hover:bg-white",children:w.jsx(tw,{
              className:"w-5 h-5"
            })
          }),w.jsx("a",{
            href:"https://youtube.com/@shahidpramodgroupofeducation?si=_NuRHU1CCGUr0fMN",target:"_blank",rel:"noreferrer",className:"text-white/50 hover:text-[#FF0000] transition-colors bg-white/10 p-2 rounded-full hover:bg-white",children:w.jsx(sw,{
              className:"w-5 h-5"
            })
          })]
        })]
      }),w.jsxs("div",{
        children:[w.jsx("h4",{
          className:"text-xl font-bold mb-6 border-b-2 border-gold w-fit pb-2",children:"Quick Links"
        }),w.jsx("ul",{
          className:"space-y-4 text-white/70",children:["Home","About Us","Institutions","Academic Courses","Admission","Gallery","Contact"].map(t=>w.jsx("li",{
            children:w.jsxs("a",{
              href:"#",className:"hover:text-gold transition-colors flex items-center gap-2",children:[w.jsx(W1,{
                className:"w-4 h-4"
              })," ",t]
            })
          },t))
        })]
      }),w.jsxs("div",{
        children:[w.jsx("h4",{
          className:"text-xl font-bold mb-6 border-b-2 border-gold w-fit pb-2",children:"Our Colleges"
        }),w.jsxs("ul",{
          className:"space-y-4 text-white/70",children:[w.jsx("li",{
            children:w.jsxs("a",{
              href:"https://shaheedpramod.in",target:"_blank",className:"hover:text-gold transition-colors flex items-center gap-2",children:[w.jsx(yh,{
                className:"w-4 h-4"
              })," SHAHEED PRAMOD B.Ed College"]
            })
          }),w.jsx("li",{
            children:w.jsxs("a",{
              href:"https://shaheedpramod.in",target:"_blank",className:"hover:text-gold transition-colors flex items-center gap-2",children:[w.jsx(yh,{
                className:"w-4 h-4"
              })," SHAHEED PRAMOD Higher Education"]
            })
          }),w.jsx("li",{
            children:w.jsxs("a",{
              href:"https://spnursing.in",target:"_blank",className:"hover:text-gold transition-colors flex items-center gap-2",children:[w.jsx(yh,{
                className:"w-4 h-4"
              })," SHAHEED PRAMOD Nursing Institute"]
            })
          })]
        })]
      }),w.jsxs("div",{
        children:[w.jsx("h4",{
          className:"text-xl font-bold mb-6 border-b-2 border-gold w-fit pb-2",children:"Newsletter"
        }),w.jsx("p",{
          className:"text-white/70 mb-4",children:"Subscribe to get latest updates on admissions and events."
        }),w.jsxs("div",{
          className:"flex gap-2",children:[w.jsx(is,{
            placeholder:"Email Address",className:"bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl"
          }),w.jsx(li,{
            className:"bg-gold text-royal-blue font-bold rounded-xl",children:"Join"
          })]
        })]
      })]
    }),w.jsx("div",{
      className:"border-t border-white/10 pt-8 text-center text-white/50 text-sm",children:w.jsx("p",{
        children:"© 2026 SHAHEED PRAMOD Group of Education. All Rights Reserved. | Designed for Excellence"
      })
    })]
  })
}),aV=()=>{
  const[t,i]=A.useState(null),s=[{
    name:"B.Ed College",phone:"918877612728",wa:"918877612728"
  },{
    name:"Higher Education",phone:"919955657050",wa:"919955657050"
  },{
    name:"Nursing Institute",phone:"916202792816",wa:"916202792816"
  }];
  return w.jsxs("div",{
    className:"fixed bottom-8 right-8 z-50 flex flex-col gap-4",children:[w.jsx(np,{
      children:t&&w.jsxs(ci.div,{
        initial:{
          opacity:0,y:20,scale:.9
        },animate:{
          opacity:1,y:0,scale:1
        },exit:{
          opacity:0,y:20,scale:.9
        },className:"absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100",children:[w.jsxs("div",{
          className:"flex justify-between items-center mb-3",children:[w.jsx("h3",{
            className:"font-bold text-royal-blue text-sm",children:t==="whatsapp"?"Chat on WhatsApp":"Call Us"
          }),w.jsx("button",{
            onClick:()=>i(null),className:"text-gray-400 hover:text-gray-600",children:w.jsx(op,{
              className:"w-4 h-4"
            })
          })]
        }),w.jsx("div",{
          className:"flex flex-col gap-2",children:s.map(r=>w.jsxs("a",{
            href:t==="whatsapp"?`https://wa.me/${r.wa}`:`tel:+${r.phone}`,target:"_blank",rel:"noreferrer",className:`flex items-center gap-3 p-3 rounded-xl transition-colors ${t==="whatsapp"?"bg-green-50 hover:bg-green-100 text-green-700":"bg-blue-50 hover:bg-blue-100 text-royal-blue"}`,onClick:()=>i(null),children:[t==="whatsapp"?w.jsx(lm,{
              className:"w-4 h-4"
            }):w.jsx(nu,{
              className:"w-4 h-4"
            }),w.jsxs("div",{
              className:"flex flex-col",children:[w.jsx("span",{
                className:"text-xs font-bold",children:r.name
              }),w.jsxs("span",{
                className:"text-[10px] opacity-80",children:["+",r.phone]
              })]
            })]
          },r.name))
        })]
      })
    }),w.jsxs("button",{
      onClick:()=>i(t==="whatsapp"?null:"whatsapp"),className:"bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative hover:scale-110 transition-transform",children:[w.jsx(lm,{
        className:"w-6 h-6"
      }),w.jsx("span",{
        className:"absolute right-full mr-4 bg-white text-green-500 font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",children:"WhatsApp Us"
      })]
    }),w.jsxs("button",{
      onClick:()=>i(t==="call"?null:"call"),className:"bg-royal-blue text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative hover:scale-110 transition-transform",children:[w.jsx(nu,{
        className:"w-6 h-6"
      }),w.jsx("span",{
        className:"absolute right-full mr-4 bg-white text-royal-blue font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",children:"Call Now"
      })]
    }),w.jsxs("a",{
      href:"#admission",className:"bg-gold text-royal-blue p-4 rounded-full shadow-2xl flex items-center justify-center group relative hover:scale-110 transition-transform",children:[w.jsx(ew,{
        className:"w-6 h-6"
      }),w.jsx("span",{
        className:"absolute right-full mr-4 bg-white text-gold font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",children:"Apply Now"
      })]
    })]
  })
};
function lV(){
  return w.jsxs("div",{
    className:"min-h-screen flex flex-col",children:[w.jsxs("header",{
      className:"fixed top-0 left-0 right-0 z-50",children:[w.jsx(K6,{
        
      }),w.jsx(Z6,{
        
      })]
    }),w.jsxs("main",{
      className:"flex-grow",children:[w.jsx(Q6,{
        
      }),w.jsx(W6,{
        
      }),w.jsx($6,{
        
      }),w.jsx(J6,{
        
      }),w.jsx(eV,{
        
      }),w.jsx(tV,{
        
      }),w.jsx(nV,{
        
      }),w.jsx(iV,{
        
      }),w.jsx(sV,{
        
      }),w.jsx(oV,{
        
      })]
    }),w.jsx(rV,{
      
    }),w.jsx(aV,{
      
    })]
  })
}A2.createRoot(document.getElementById("root")).render(w.jsx(A.StrictMode,{
  children:w.jsx(lV,{
    
  })
}));

