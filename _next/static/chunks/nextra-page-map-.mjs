import meta from "../../../pages/_meta.ts";
import lifeIsPossible_meta from "../../../pages/lifeIsPossible/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "lifeIsPossible",
  route: "/lifeIsPossible",
  children: [{
    data: lifeIsPossible_meta
  }, {
    name: "Lecture",
    route: "/lifeIsPossible/Lecture",
    children: [{
      name: "lecture-01",
      route: "/lifeIsPossible/Lecture/lecture-01",
      children: [{
        name: "lecture-01",
        route: "/lifeIsPossible/Lecture/lecture-01/lecture-01",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 01"
        }
      }]
    }, {
      name: "lecture-02",
      route: "/lifeIsPossible/Lecture/lecture-02",
      children: [{
        name: "lecture-02-chinese",
        route: "/lifeIsPossible/Lecture/lecture-02/lecture-02-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 02 Chinese"
        }
      }, {
        name: "lecture-02",
        route: "/lifeIsPossible/Lecture/lecture-02/lecture-02",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 02"
        }
      }]
    }, {
      name: "lecture-03",
      route: "/lifeIsPossible/Lecture/lecture-03",
      children: [{
        name: "lecture-03-chinese",
        route: "/lifeIsPossible/Lecture/lecture-03/lecture-03-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.columns-three {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 03 Chinese"
        }
      }, {
        name: "lecture-03",
        route: "/lifeIsPossible/Lecture/lecture-03/lecture-03",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.columns-three {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 03"
        }
      }]
    }, {
      name: "lecture-04",
      route: "/lifeIsPossible/Lecture/lecture-04",
      children: [{
        name: "lecture-04-chinese",
        route: "/lifeIsPossible/Lecture/lecture-04/lecture-04-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 04 Chinese"
        }
      }, {
        name: "lecture-04",
        route: "/lifeIsPossible/Lecture/lecture-04/lecture-04",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 04"
        }
      }]
    }, {
      name: "lecture-05",
      route: "/lifeIsPossible/Lecture/lecture-05",
      children: [{
        name: "lecture-05-chinese",
        route: "/lifeIsPossible/Lecture/lecture-05/lecture-05-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 05 Chinese"
        }
      }, {
        name: "lecture-05",
        route: "/lifeIsPossible/Lecture/lecture-05/lecture-05",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 05"
        }
      }]
    }, {
      name: "lecture-06",
      route: "/lifeIsPossible/Lecture/lecture-06",
      children: [{
        name: "lecture-06-chinese",
        route: "/lifeIsPossible/Lecture/lecture-06/lecture-06-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 06 Chinese"
        }
      }, {
        name: "lecture-06",
        route: "/lifeIsPossible/Lecture/lecture-06/lecture-06",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 06"
        }
      }]
    }, {
      name: "lecture-07",
      route: "/lifeIsPossible/Lecture/lecture-07",
      children: [{
        name: "lecture-07-chinese",
        route: "/lifeIsPossible/Lecture/lecture-07/lecture-07-chinese",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 07 Chinese"
        }
      }, {
        name: "lecture-07",
        route: "/lifeIsPossible/Lecture/lecture-07/lecture-07",
        frontMatter: {
          "marp": true,
          "class": "invert",
          "footer": "Life is Possible - Apps workshop",
          "paginate": true,
          "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
          "sidebarTitle": "Lecture 07"
        }
      }]
    }]
  }, {
    name: "overall-chinese",
    route: "/lifeIsPossible/overall-chinese",
    frontMatter: {
      "marp": true,
      "class": "invert",
      "footer": "Life is Possible - Apps workshop",
      "paginate": true,
      "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
      "sidebarTitle": "Overall Chinese"
    }
  }, {
    name: "overall",
    route: "/lifeIsPossible/overall",
    frontMatter: {
      "marp": true,
      "class": "invert",
      "footer": "Life is Possible - Apps workshop",
      "paginate": true,
      "style": ".columns {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n",
      "sidebarTitle": "Overall"
    }
  }]
}];