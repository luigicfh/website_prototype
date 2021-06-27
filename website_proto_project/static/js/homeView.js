"use-strict";

window.addEventListener("load", (e) => {

  const text = document.querySelector(".text_text");
  const terminalBody = document.querySelector(".terminal-body");
  let width = 10;

  const topBarText = function () {
    const clientH = document.documentElement.clientHeight;
    const clientW = document.documentElement.clientWidth;

    text.innerHTML = `LMOS V1.0 — -bash — ${clientW}x${clientH}`;
  };

  const loadingConsole = function () {
    const textDIV = document.querySelector(".terminal-body-text");
    const typeDIV = document.querySelector(".terminal-type-div");
    const textArr = [
      "Pretending to load something important...<br>",
      "Adding salt and pepper... 🧂<br>",
      "BTW YOU look awesome today...😉",
    ];
    let time = 800;

    textArr.forEach((item) => {
      setTimeout(() => {
        textDIV.insertAdjacentHTML("beforeend", item);
      }, time);

      time += 1300;
    });

    setTimeout(() => {
      textDIV.innerHTML = `<span class="welcome_text">Welcome to my website/OS! [Version 1.0].</span><br>My name is <span class="name">Luis Moreno</span>, I am a <span class="role">Software Engineer</span> from <span class="country">El Salvador</span>.<br>I would be delighted to build something for you.<br> Feel free to navigate my site executing the commands below (w/o *):<br><ul><li>* about</li><li>* exp</li><li>* skills</li></ul>`;
      typeDIV.insertAdjacentHTML(
        "afterbegin",
        `<div class="user">im_not_a_real_terminal:~$</div>`
      );
      typeDIV.style.display = "flex";
      typeDIV.querySelector(".command").focus();
    }, 4500);
  };

  const runCommand = function () {
    const typeDIV = document.querySelector(".terminal-type-div");
    const command = typeDIV.querySelector(".command");
    const cursor = typeDIV.querySelector(".cursor");
    const body = document.querySelector(".terminal-body");
    const dateTime = new Date();

    command.innerHTML = command.textContent.trim();
    const newCommand = typeDIV.cloneNode(true);
    cursor.style.display = "none";
    const newCommandValue = newCommand.querySelector(".command");
    const commandStringDIV = document.createElement("div");
    const successStringDIV = document.createElement("div");
    const commandString = `Executing command ${command.textContent} - ${String(
      dateTime.getHours()
    ).padStart(2, 0)}:${String(dateTime.getMinutes()).padStart(2, 0)}...`;
    const finishedCommand = `Executed successfully! - ${String(
      dateTime.getHours()
    ).padStart(2, 0)}:${String(dateTime.getMinutes()).padStart(2, 0)}`;
    commandStringDIV.innerHTML = commandString;
    successStringDIV.innerHTML = finishedCommand;
    cursor.remove();
    command.removeAttribute("contenteditable");
    command.removeAttribute("role");
    command.removeAttribute("aria-multiline");
    typeDIV.classList.add("executed_command");
    typeDIV.classList.remove("terminal-type-div");
    newCommandValue.innerHTML = "";
    body.appendChild(commandStringDIV);
    setTimeout(() => {
      body.appendChild(successStringDIV);
      body.appendChild(newCommand);
      newCommandValue.focus();
    }, 1000);

    return command.textContent;
  };

  const openApp = function () {
    const app = document.querySelector("#appdiv");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".dot");

    setTimeout(() => {
      app.style.bottom = "50%";
      app.style.zIndex = "101";
      setTimeout(() => {
        app.style.right = "0px";
        app.style.bottom = "0px";
        app.classList.add("app_open");
        app.classList.remove("app_closed");
        closeBtn.style.display = "block";
        setTimeout(() => {
          // overlay.classList.add("overlay_show");
        }, 200);
      }, 300);
    }, 300);
  };

  const closeApp = function (e) {
    if (e.target.style.display === "block") {
      const app = document.querySelector("#appdiv");
      const overlay = document.querySelector(".overlay");
      const container = document.querySelector(".container");
      const command = document.querySelectorAll(".command");

      container.style.opacity = "0";

      app.removeAttribute("style");

      app.classList.remove("app_open");
      app.classList.add("app_closed");

      overlay.classList.remove("overlay_show");

      container.remove();
      e.target.style.display = "none";

      command.forEach((item) => {
        if (item.getAttribute("contenteditable")) {
          item.focus();
        }
      });
    }
  };

  const renderAbout = function () {
    const appDIV = document.querySelector("#appdiv");

    const markup = `<div class="container overflow-auto about_container">
        <span class="close_btn_div">
          <div style="visibility:hidden" class=".close_button">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          </div>
          <h1 class="about-title"><strong>About Me</strong></h1>
        </span>
        <hr>
        <div class="row">
          <div class="avatar col-md-6 col-12">
            <img src="/static/images/me.jpg" alt="" />
          </div>
          <div class="text_section col-md-6 col-12">
            Luis Moreno <br> Father👨‍👦‍👦 | Husband💑 | Software Engineer🤓<br><br>
            Let me start by saying that aside from my family, the thing I love the most is coding 💻. <br>I have experience building frontend, backend and desktop applications/services using different technologies and frameworks, I feel confident enough to say I can build or integrate anything you throw at me 😉.<br> I also have experience in other roles involving personnel management, teaching & business analysis.
          </div>
        </div>
        <hr>
        <div class="links">
            <div class="links_row">
              
              <div class="linkedin">
                <a target="blank" href="https://www.linkedin.com/in/luis-moreno-71b410140/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
              </div>
              <div class="github">
                <a target="blank" href="https://github.com/luigicfh">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </div>`;

    appDIV.insertAdjacentHTML("afterbegin", markup);
  };

  let count = 0;

  const skills = [
    {
      labels: [
        "Front-end",
        "Back-end",
        "API's",
        "System Integrations",
        "Data Migrations",
        "Scripting",
      ],
      data: [9, 8, 9, 7, 7, 9],
      colors: [
        "#003375",
        "#f47a55",
        "#fe655d",
        "#8ca6b8",
        "#2bab4d",
        "#ebdc48",
      ],
      text: "Development Skills",
    },
    {
      labels: ["Python", "JavaScript", "SQL"],
      data: [9, 9, 6],
      colors: ["#3774aa", "#efd81d", "#0072c7"],
      text: "Programming Languages",
    },
    {
      labels: ["HTML", "CSS"],
      data: [9, 9],
      colors: ["#f1662a", "#1572b6"],
      text: "Other Web Development Skills",
    },
    {
      labels: ["Django", "Django REST Framework", "AngularJS", "Kivy"],
      data: [9, 9, 6, 6],
      colors: ["#0c4b33", "#a30000", "#dd1b16", "#3f4142"],
      text: "Frameworks/Libraries",
    },
  ];

  const renderSkills = function () {
    const appDiv = document.querySelector("#appdiv");

    const markup = `<div class="container overflow-auto skills_container">
        <span class="close_btn_div">
          <div style="visibility:hidden" class=".close_button">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          </div>
          <h1 class="skills-title"><strong>Skills</strong></h1>
        </span>
        <hr>
        <div class="row">
          <div class="avatar col-md-12 col-12">
            <div class="chart_container">
              <canvas id="languagesChart" width="400" height="200"></canvas>
              <div class="carets">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </div>
            </div>
            
          </div>
        </div>
        <hr>
        <div class="links">
            <div class="links_row">
              
              <div class="linkedin">
                <a target="blank" href="https://www.linkedin.com/in/luis-moreno-71b410140/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
              </div>
              <div class="github">
                <a target="blank" href="https://github.com/luigicfh">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </div>`;

    appDiv.insertAdjacentHTML("afterbegin", markup);
    setTimeout(() => {
      renderChart(skills[count]);
      const nextBtn = document.querySelector(".carousel-control-next-icon");
      const prevBtn = document.querySelector(".carousel-control-prev-icon");

      nextBtn.addEventListener("click", nextSkill);
      prevBtn.addEventListener("click", prevSkill);
      window.addEventListener("keydown", arrowHandler);
    }, 500);
  };

  const arrowHandler = function (e) {
    if (e.key === "ArrowRight") {
      nextSkill();
    } else if (e.key === "ArrowLeft") {
      prevSkill();
    }
  };

  const nextSkill = function () {
    count++;
    if (count <= 3) {
      const chart = document.querySelector("#languagesChart");
      const container = document.querySelector(".chart_container");
      chart.remove();

      const markup = `<canvas id="languagesChart" width="400" height="200"></canvas>`;

      container.insertAdjacentHTML("afterbegin", markup);
      renderChart(skills[count]);
    } else {
      count = 0;
      const chart = document.querySelector("#languagesChart");
      const container = document.querySelector(".chart_container");
      chart.remove();

      const markup = `<canvas id="languagesChart" width="400" height="200"></canvas>`;

      container.insertAdjacentHTML("afterbegin", markup);
      renderChart(skills[count]);
    }
  };

  const prevSkill = function () {
    count--;
    if (count >= 0) {
      const chart = document.querySelector("#languagesChart");
      const container = document.querySelector(".chart_container");
      chart.remove();

      const markup = `<canvas id="languagesChart" width="400" height="200"></canvas>`;

      container.insertAdjacentHTML("afterbegin", markup);
      renderChart(skills[count]);
    } else {
      count = 2;
      const chart = document.querySelector("#languagesChart");
      const container = document.querySelector(".chart_container");
      chart.remove();

      const markup = `<canvas id="languagesChart" width="400" height="200"></canvas>`;

      container.insertAdjacentHTML("afterbegin", markup);
      renderChart(skills[count]);
    }
  };

  const renderChart = function (myData) {
    const ctx = document.querySelector("#languagesChart");

    const languagesChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: myData.labels,
        datasets: [
          {
            label: "Python",
            data: myData.data,
            backgroundColor: myData.colors,
          },
        ],
      },
      options: {
        label: {
          display: false,
        },
        plugins: {
          title: {
            display: true,
            text: myData.text,
            fontSize: 50,
          },
          legend: {
            display: false,
          },
        },
        animation: true,
        indexAxis: "y",
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            max: 10,
          },
        },
        responsive: true,
      },
    });
  };

  const executeCommand = function (val) {
    switch (val) {
      case "about":
        openApp();
        setTimeout(() => {
          renderAbout();
        }, 900);
        break;
      case "exp":
        openApp();
        break;
      case "skills":
        openApp();
        renderSkills();
        break;
      case "cls":
        break;
      default:
        break;
    }
  };

  const terminal = function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const commandVal = runCommand();

      executeCommand(commandVal);
    }
  };

  const closeAppBtn = document.querySelector(".dot");

  closeAppBtn.addEventListener("click", closeApp);

  loadingConsole();
  topBarText();
  window.addEventListener("keyup", terminal);
  window.addEventListener("resize", topBarText);
  terminalBody.addEventListener("click", function () {
    const command = document.querySelectorAll(".command");
    command.forEach((item) => {
      if (item.getAttribute("contenteditable")) {
        item.focus();
      }
    });
  });
})


