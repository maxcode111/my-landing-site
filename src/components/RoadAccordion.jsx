import Accordion from 'react-bootstrap/Accordion';
import './RoadAccordion.css';
import htmlicon from './img/html.png'
import cssicon from './img/css-3.png'
import jsicon from './img/java-script.png'
import bootstrapicon from './img/bootstrap.png'
import reacticon from './img/physics.png'

function RoadAccordion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><img src={htmlicon} className = "acIcon" alt = ""/>HTML</Accordion.Header>
        <Accordion.Body>
        HTML не является языком программирования; это язык разметки, и используется, чтобы сообщать вашему браузеру, как отображать веб-страницы, которые вы посещаете. Он может быть сложным или простым, в зависимости от того, как хочет веб-дизайнер. HTML состоит из ряда элементов, которые вы используете, чтобы вкладывать или оборачивать различные части контента, чтобы заставить контент отображаться или действовать определённым образом. Ограждающие теги могут сделать слово или изображение ссылкой на что-то ещё, могут сделать слова курсивом, сделать шрифт больше или меньше и так далее. Например, возьмём следующую строку контента:
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><img src={cssicon} className = "acIcon" alt = ""/>CSS</Accordion.Header>
        <Accordion.Body>
        SS (Cascading Style Sheets) — это код, который вы используете для стилизации вашей веб-страницы. Основы CSS помогут вам понять, что вам нужно для начала работы. Мы ответим на такие вопросы как: Как сделать мой текст черным или красным? Как сделать так, чтобы контент появлялся в определённом месте на экране? Как украсить мою веб-страницу с помощью фоновых изображений и цветов?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><img src={jsicon} className = "acIcon" alt = ""/>JavaScript</Accordion.Header>
        <Accordion.Body>
        JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например, node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык с динамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный (например, функциональное программирование) стили программирования. Подробнее о JavaScript.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><img src={reacticon} className = "acIcon" alt = ""/>React</Accordion.Header>
        <Accordion.Body>
        Как гласит официальный слоган, React - это библиотека для создания пользовательских интерфейсов. React не является фреймворком – он даже не рассчитан исключительно для web. Он используется для визуализации и в связке с другими библиотеками. Например, React Native можно использовать для создания мобильных приложений; React 360 можно использовать для создания приложений виртуальной реальности; помимо того есть и другие варианты.

Для создания веб-приложений разработчики используют React в тандеме с ReactDOM. React and ReactDOM часто обсуждаются в том же пространстве и используются для решения тех же проблем, что и другие настоящие фреймворки для веб-разработки. Когда мы ссылаемся на React как на «фреймворк», мы подразумеваем это разговорное понимание.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><img src={bootstrapicon} className = "acIcon" alt = ""/>bootstrap + другие библиотеки</Accordion.Header>
        <Accordion.Body>
        React-Bootstrap — это библиотека React-компонентов, подходящих для повторного использования, которая реализует возможности популярного шаблона Bootstrap от Twitter. На GitHub у неё около 11 тысяч звёзд. Вероятно, широкую популярность она снискала благодаря своей простоте и удобству работы с ней.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RoadAccordion;