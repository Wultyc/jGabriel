export const state = () => ({
    projectName: 'jGabriel',
    externalPages: [
        { name:'notebook', icon:'', url:'https://notebook.jgabriel.eu', showOnNavBar: true},
    ],
    links:[
        { name:'github', icon:'fab fa-github', url:'http://github.com/wultyc', showOnNavBar: true},
        { name:'twitter', icon:'fab fa-twitter', url:'https://twitter.com/wultyc', showOnNavBar: true},
        { name:'linkedin', icon:'fab fa-linkedin', url:'https://linkedin.com/in/j-gabriel/', showOnNavBar: false},
        { name:'instagram', icon:'fab fa-instagram', url:'https://instagram.com/wultyc', showOnNavBar: false},
    ],
    contactInfo: {
        'email': 'jorge.gfm.azevedo@outlook.pt',
    }

  })
  
  export const mutations = {
    SET_projectName (state, value) {
      state.projectName = value
    },
    SET_externalPages (state, value) {
      state.externalPages = value
    },
    SET_links (state, value) {
      state.links = value
    },
    SET_contactInfo (state, value) {
      state.contactInfo = value
    }
  }