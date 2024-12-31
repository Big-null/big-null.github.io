import meta from "../../../pages/_meta.ts";
import genAI_meta from "../../../pages/genAI/_meta.ts";
import lifeIsPossible_meta from "../../../pages/lifeIsPossible/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "genAI",
  route: "/genAI",
  children: [{
    data: genAI_meta
  }, {
    name: "index",
    route: "/genAI",
    frontMatter: {
      "title": "Intro - Techniques for Graphics Generation",
      "sidebarTitle": "Intro",
      "description": "Techniques for Graphics Generation introductions"
    }
  }, {
    name: "lecture-01",
    route: "/genAI/lecture-01",
    children: [{
      name: "lecture-01",
      route: "/genAI/lecture-01/lecture-01",
      frontMatter: {
        "title": "Lecture 1 - Basic prompts for text & code generations",
        "sidebarTitle": "Lecture 01",
        "description": "Basic prompts for text & code generations"
      }
    }]
  }, {
    name: "lecture-02",
    route: "/genAI/lecture-02",
    children: [{
      name: "lecture-02",
      route: "/genAI/lecture-02/lecture-02",
      frontMatter: {
        "title": "Lecture 2 - Advance prompting in computer vision & video",
        "sidebarTitle": "Lecture 02",
        "description": "Advance prompting in computer vision & video"
      }
    }]
  }]
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
          "title": "Lecture 1 - Introduce to Programming | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 01",
          "description": "Introduce to Programming | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-02",
      route: "/lifeIsPossible/Lecture/lecture-02",
      children: [{
        name: "lecture-02-chinese",
        route: "/lifeIsPossible/Lecture/lecture-02/lecture-02-chinese",
        frontMatter: {
          "title": "講課 2 - Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 02 Chinese",
          "description": "Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊"
        }
      }, {
        name: "lecture-02",
        route: "/lifeIsPossible/Lecture/lecture-02/lecture-02",
        frontMatter: {
          "title": "Lecture 2 - Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 02",
          "description": "Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-03",
      route: "/lifeIsPossible/Lecture/lecture-03",
      children: [{
        name: "lecture-03-chinese",
        route: "/lifeIsPossible/Lecture/lecture-03/lecture-03-chinese",
        frontMatter: {
          "title": "Lecture 3 - Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 03 Chinese",
          "description": "Introduce to HTML | Life is Possible - 生命教育 手機程式工作坊"
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
          "title": "Lecture 4 - Introduce to JavaScript | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 04 Chinese",
          "description": "Introduce to JavaScript | Life is Possible - 生命教育 手機程式工作坊"
        }
      }, {
        name: "lecture-04",
        route: "/lifeIsPossible/Lecture/lecture-04/lecture-04",
        frontMatter: {
          "title": "Lecture 4 - Introduce to JavaScript | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 04",
          "description": "Introduce to JavaScript | Life is Possible - 生命教育 手機程式工作坊"
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
          "title": "Lecture 5 - Interact JS in HTML | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 05",
          "description": "Interact JS in HTML | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-06",
      route: "/lifeIsPossible/Lecture/lecture-06",
      children: [{
        name: "lecture-06-chinese",
        route: "/lifeIsPossible/Lecture/lecture-06/lecture-06-chinese",
        frontMatter: {
          "title": "Lecture 6 - Adv topic - Github, Deployment and Planning | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 06 Chinese",
          "description": "Adv topic - Github, Deployment and Planning | Life is Possible - 生命教育 手機程式工作坊"
        }
      }, {
        name: "lecture-06",
        route: "/lifeIsPossible/Lecture/lecture-06/lecture-06",
        frontMatter: {
          "title": "Lecture 6 - Adv topic - Github, Deployment and Planning | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 06",
          "description": "Adv topic - Github, Deployment and Planning | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-07",
      route: "/lifeIsPossible/Lecture/lecture-07",
      children: [{
        name: "lecture-07-chinese",
        route: "/lifeIsPossible/Lecture/lecture-07/lecture-07-chinese",
        frontMatter: {
          "title": "講課 7 - Project Week 1 | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 07 Chinese",
          "description": "Project Week 1 | Life is Possible - 生命教育 手機程式工作坊"
        }
      }, {
        name: "lecture-07",
        route: "/lifeIsPossible/Lecture/lecture-07/lecture-07",
        frontMatter: {
          "title": "Lecture 7 - Project Week 1 | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 07",
          "description": "Project Week 1 | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-08",
      route: "/lifeIsPossible/Lecture/lecture-08",
      children: [{
        name: "lecture-08",
        route: "/lifeIsPossible/Lecture/lecture-08/lecture-08",
        frontMatter: {
          "title": "Lecture 8 - Project Week 2 | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 08",
          "description": "Project Week 2 | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-09",
      route: "/lifeIsPossible/Lecture/lecture-09",
      children: [{
        name: "lecture-09",
        route: "/lifeIsPossible/Lecture/lecture-09/lecture-09",
        frontMatter: {
          "title": "Lecture 9 - Project Week 3 | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 09",
          "description": "Project Week 3 | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-10",
      route: "/lifeIsPossible/Lecture/lecture-10",
      children: [{
        name: "lecture-10",
        route: "/lifeIsPossible/Lecture/lecture-10/lecture-10",
        frontMatter: {
          "title": "Lecture 10 - Showcase | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture 10",
          "description": "Showcase | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }, {
      name: "lecture-ex1",
      route: "/lifeIsPossible/Lecture/lecture-ex1",
      children: [{
        name: "lecture-ex1",
        route: "/lifeIsPossible/Lecture/lecture-ex1/lecture-ex1",
        frontMatter: {
          "title": "Lecture ex1 - Advance JS | Life is Possible - 生命教育 手機程式工作坊",
          "sidebarTitle": "Lecture ex1",
          "description": "Advance JS | Life is Possible - 生命教育 手機程式工作坊"
        }
      }]
    }]
  }, {
    name: "overall-chinese",
    route: "/lifeIsPossible/overall-chinese",
    frontMatter: {
      "title": "介紹 - Life is Possible - 生命教育 手機程式工作坊",
      "sidebarTitle": "Overall (中文)",
      "description": "Life is Possible - 生命教育 手機程式工作坊 介紹"
    }
  }, {
    name: "overall",
    route: "/lifeIsPossible/overall",
    frontMatter: {
      "title": "Intro - Life is Possible - 生命教育 手機程式工作坊",
      "sidebarTitle": "Overall",
      "description": "Life is Possible - 生命教育 手機程式工作坊 introductions"
    }
  }]
}];