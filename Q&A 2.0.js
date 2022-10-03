var t = 0,
        t1 = 0,
        t2 = 0,
        t3 = 0;
      const data = [
        {
          title: "这是问题",
          content: "这是答案",
        },
        {
          title: "浙大最潮的学生组织是?",
          content: "求是潮",
        },
        {
          title: "求是潮的办公室在哪里？",
          content: "小剧场B217",
        },
        {
          title: "想不出问题了随便写点什么吧",
          content: "想不出答案了随便写点什么吧",
        },
      ];

      document.getElementById("demo1").innerText = data[0].title;
      document.getElementById("demo2").innerText = data[1].title;
      document.getElementById("demo3").innerText = data[2].title;
      document.getElementById("demo4").innerText = data[3].title;

      demo1.onclick = function () {
        if (t == 0) {
          document.getElementById("demo1").innerText = data[0].title;
          document.getElementById("demo1.1").innerText = data[0].content;
          t = 1;
        } else if (t == 1) {
          document.getElementById("demo1").innerText = data[0].title;
          document.getElementById("demo1.1").innerText = "";
          t = 0;
        }
      };
      demo2.onclick = function () {
        if (t1 == 0) {
          document.getElementById("demo2").innerText = data[1].title;
          document.getElementById("demo2.2").innerText = data[1].content;
          t1 = 1;
        } else if (t1 == 1) {
          document.getElementById("demo2").innerText = data[1].title;
          document.getElementById("demo2.2").innerText = "";
          t1 = 0;
        }
      };
      demo3.onclick = function () {
        if (t2 == 0) {
          document.getElementById("demo3").innerText = data[2].title;
          document.getElementById("demo3.3").innerText = data[2].content;
          t2 = 1;
        } else if (t2 == 1) {
          document.getElementById("demo3").innerText = data[2].title;
          document.getElementById("demo3.3").innerText = "";
          t2 = 0;
        }
      };
      demo4.onclick = function () {
        if (t3 == 0) {
          document.getElementById("demo4").innerText = data[3].title;
          document.getElementById("demo4.4").innerText = data[3].content;
          t3 = 1;
        } else if (t3 == 1) {
          document.getElementById("demo4").innerText = data[3].title;
          document.getElementById("demo4.4").innerText = "";
          t3 = 0;
        }
      };