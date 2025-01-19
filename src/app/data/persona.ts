export const persona = {
  header: {
    template: 'Header',
    props: {
      logo: {
        path: 'assets/images/Wealthworks PartnersLogo-white.png',
        pathScroll: 'assets/images/soa-logo-small.png'
      },
      menu: {
        Home: {
          path: ''
        },
        Services: {
          path: '/services',
          submenu: {
            'Technical Accounting & IPO Services': {
              path: '/services/technical-accounting'
            },
            'SOX & Internal Audit': {
              path: '/services/sox-internal-audit'
            },
            'IT Compliance & Advisory': {
              path: '/services/it-compliance-advisory',
            },
            'RPA & Data Analytics': {
              path: '/services/rpa-analytics',
            },
            'Start-Up Services': {
              path: '/services/startup-services',
            },
            'Direct Hire & Interim Report': {
              path: '/services/interim-search-direct-hire',
            },
          },
        },
        "About Us": {
          path: '/about-us',
          submenu: {
            'Corporate Overview': {
              path: '/about-us',
              fragment: 'corporate-overview'
            },
            'Vision Statement': {
              path: '/about-us',
              fragment: 'vision-statement'
            },
            'Leadership Team': {
              path: '/about-us',
              fragment: 'leadership'
            }
          }
        }
      },
    },
  },
  layout: [
    {
      props: {},
      routes: [
        {
          path: '',
          default: true,
          layout: {
            title: 'Home',
            sections: [
              {
                type: 'carousel',
                props: {
                  slides: [
                    {
                      "path": "assets/images/wealthworks-home.jpeg",
                      "title": "Home",
                      "heading": ["Welcome to Wealthworks Partners"],
                      "description": "We are a leading professional advisory firm that support its clients as they grow and transition throughout their lifecycle and offers six service lines that cover a broad range of professional services.",
                      "visible": false
                    },
                    {
                      "path": "assets/images/TA-Services_Moment.jpg",
                      "title": "Technical Accounting & IPO Services",
                      "heading": ["Technical Accounting & IPO"],
                      "description": "Technical Accounting experts just a call away."
                    },
                    {
                      "path": "assets/images/Sox-landing.jpg",
                      "title": "SOX & Internal Audit",
                      "heading": ["SOX & Internal Audit"],
                      "description": "Building trust and complete roadmap to success."
                    },
                    {
                      "path": "assets/images/IT-Compliance_Moment.jpg",
                      "title": "IT Compliance & Advisory",
                      "heading": ["IT Compliance &", "Advisory"],
                      "description": "IT Audit, ERP, Cyber Security"
                    },
                    {
                      "path": "assets/images/RAFS_Moment.jpg",
                      "title": "RPA & Data Analytics",
                      "heading": ["Robotic Process Automation &", "Data Analytics"],
                      "description": "Driving efficiency through RPA."
                    },
                    {
                      "path": "assets/images/start-up.jpg",
                      "title": "Start-Up Services",
                      "heading": ["Hatchery & Start-Up Services"],
                      "description": "Foster your future."
                    },
                    {
                      "path": "assets/images/directHire_Moment.jpg",
                      "title": "Direct Hire & Interim Report",
                      "heading": ["Direct Hire & Interim Report"],
                      "description": "Obtain ideal placement."
                    }
                  ]
                }
              },
              {
                type: 'projection',
                props: {
                  componentName: "HomeHero1Component"
                },
              },
              {
                type: 'leadership',
                props: {
                  title: 'COMING FROM THE BIG4',
                  heading: ['Experienced Partners', '& Leadership'],
                  content: {
                    leaders:[
                      {
                        name: "Seema Rajoura",
                        role: "Founder & CEO",
                        path: 'assets/images/SeemaRajoura.jpeg',
                        site: 'https://www.linkedin.com/in/seema-rajoura/'
                      }
                    ]
                  }
                }
              },
              {
                type: 'testimonial',
                props: {
                  title: 'WHAT OUR CLIENTS ARE SAYING',
                  heading: ['Testimonials'],
                  items: [
                    {
                      "textContent": "Wealthworks Partners has been an excellent partner over the years. The resources they provide have been critical to achieving my compliance goals. Their outstanding level of partnership enabled us to do so within my cost envelope and with a vision to build scale into our compliance processes. The Wealthworks Partners team provided insights that created a strong foundation for the future while effectively meeting my immediate compliance and cost needs.",
                      "profilePath": "assets/images/icon-team.png",
                      "profileDescription": ["John Doe", "Sr. Director, Company"]
                    },
                    {
                      "textContent": "I have worked with Wealthworks Partners on a number of assignments while I was Corporate Controller for 3PAR Inc. Projects included IPO readiness, SOX and revenue recogni2on and they consistently delivered high quality results at competitive prices. They provided the right level of experience and talent for the assignment and they were able to complete their assignments on budget. I would not hesitate to engage them again in the future.",
                      "profilePath": "assets/images/Testimonials-GraybugLogo.jpg",
                      "profileDescription": ["Jim Kirkland", "Controller, Graybug"]
                    }
                  ]
                }
              },
              {
                type: 'footer'
              }
            ],
          },
        },

      ],
    },
    {
      props: {},
      routes: [
        {
          path: 'services',
          children: [
            {
              path: 'technical-accounting',
              default: true,
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesTaComponent'
                    }
                  },
                  {
                    type: 'projection',
                    props: {
                      componentName: "ServicesTaListComponent"
                    },
                  },
                  {
                    type: 'footer'
                  }
                ]
              }
            },
            {
              path: 'sox-internal-audit',
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesSoxComponent'
                    }
                  },
                  {
                    type: 'projection',
                    props: {
                      componentName: "ServicesSoxListComponent"
                    },
                  },
                  {
                    type: 'footer'
                  }
                ]
              }

            },
            {
              path: 'it-compliance-advisory',
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesItComponent'
                    }
                  },
                  {
                    type: 'projection',
                    props: {
                      componentName: "ServicesItListComponent"
                    },
                  },
                  {
                    type: 'footer'
                  }
                ]
              }
            },
            {
              path: 'rpa-analytics',
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesRPAComponent'
                    }
                  },
                  {
                    type: 'projection',
                    props: {
                      componentName: "ServicesRPAListComponent"
                    },
                  },
                  {
                    type: 'footer'
                  }
                ]
              }
            },
            {
              path: 'startup-services',
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesStartupComponent'
                    }
                  },
                  {
                    type: 'projection',
                    props: {
                      componentName: "ServicesStartupListComponent"
                    },
                  },
                  {
                    type: 'footer'
                  }
                ]
              }
            },
            {
              path: 'interim-search-direct-hire',
              layout: {
                sections: [
                  {
                    type: 'projection',
                    props: {
                      componentName: 'ServicesAlchemyComponent'
                    }
                  },
                  {
                    type: 'footer'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      props: {},
      routes: [
        {
          path: 'about-us',
          layout: {
            sections: [
              {
                type: 'projection',
                props: {
                  componentName: 'AboutUsComponent'
                }
              },
              {
                type: 'testimonial',
                props: {
                  title: 'WHAT OUR CLIENTS ARE SAYING',
                  heading: ['Testimonials'],
                  items: [
                    {
                      "textContent": "Wealthworks Partners has been an excellent partner over the years. The resources they provide have been critical to achieving my compliance goals. Their outstanding level of partnership enabled us to do so within my cost envelope and with a vision to build scale into our compliance processes. The Wealthworks Partners team provided insights that created a strong foundation for the future while effectively meeting my immediate compliance and cost needs.",
                      "profilePath": "assets/images/icon-team.png",
                      "profileDescription": ["John Doe", "Sr. Director, Company"]
                    },
                    {
                      "textContent": "I have worked with Wealthworks Partners on a number of assignments while I was Corporate Controller for 3PAR Inc. Projects included IPO readiness, SOX and revenue recogni2on and they consistently delivered high quality results at competitive prices. They provided the right level of experience and talent for the assignment and they were able to complete their assignments on budget. I would not hesitate to engage them again in the future.",
                      "profilePath": "assets/images/Testimonials-GraybugLogo.jpg",
                      "profileDescription": ["Jim Kirkland", "Controller, Graybug"]
                    }
                  ]
                }
              },
              {
                type: 'footer'
              }
            ]

          }
        }
      ]

    }

  ],

};
