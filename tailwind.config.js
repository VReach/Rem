/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        Font1:[
          "Josefin Sans", "serif"
        ]
      },
      height:{
        nav:[
          "75px"
        ],
        divH:[
          "625px"
        ],
        sec1:[
          "10%"
        ],
        sec2:[
          "40%"
        ],
        sec3:[
          "50%"
        ]
      },
      backgroundColor:{
        trans:[
          "#1e9ac6"
        ],
        bga:[
          "#1e77c6"
        ]
      },
      textColor:{
        t1:[
          "#1e9ac6"
        ]
      }
    },
  },
  plugins: [],
}

