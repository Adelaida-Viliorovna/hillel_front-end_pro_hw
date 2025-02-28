import React from "react";
import { Typography, Link, Box } from "@mui/material";

function AboutMe() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Лизогуб Анастасія Олексіївна</Typography>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Контактна інформація:</Typography>
        <Typography>
          Телефон:{" "}
          <Link href="tel:+380678651132">+38 (067) 86-511-32</Link>
        </Typography>
        <Typography>
          Email:{" "}
          <Link href="mailto:adelaida.viliorovna@gmail.com">
            adelaida.viliorovna@gmail.com
          </Link>
        </Typography>
        <Typography>
          GitHub:{" "}
          <Link
            href="https://github.com/Adelaida-Viliorovna"
            target="_blank"
            rel="noopener"
          >
            https://github.com/Adelaida-Viliorovna
          </Link>
        </Typography>
        <Typography>Telegram: @adelaida_viliorovna</Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Освіта:</Typography>
        <Typography>
          Магістратура
          <br />
          Дніпровський металургійний інститут Українського державного
          університету науки і технологій, 2025
          <br />
          Спеціальність: 122 «Комп'ютерні науки», освітня програма «Програмування
          веб-систем» (диплом з відзнакою)
          <br />
          Музична школа (фортепіано) — закінчено з відзнакою
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Навички та інструменти:</Typography>
        <Typography>
          Маю базові навички роботи з HTML, CSS, JavaScript, Git, React, Cypress,
          MUI, MongoDB Atlas, Vite і VS Code.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Курси:</Typography>
        <Typography>Front-end Basic, Hillel IT School</Typography>
        <Typography>
          Сертифікат:{" "}
          <Link
            href="https://certificate.ithillel.ua/view/69109649"
            target="_blank"
            rel="noopener"
          >
            https://certificate.ithillel.ua/view/69109649
          </Link>
        </Typography>
        <Typography>Front-end Pro, Hillel IT School (поточний курс)</Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Досвід роботи:</Typography>
        <Typography>
          Немає досвіду роботи, але маю бажання та мотивацію навчатися і
          розвиватися в IT-сфері.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Особисті якості:</Typography>
        <Typography>
          Швидко вчуся та здатна адаптуватися до нових умов
          <br />
          Творча особистість (діджитал художник, письменник-покатківець)
          <br />
          Відповідальна, уважна до деталей, відкритість до нового досвіду
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Особисте:</Typography>
        <Typography>
          Дата народження: 26.02.2002
          <br />
          Місце проживання: Дніпро, Україна
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMe;
