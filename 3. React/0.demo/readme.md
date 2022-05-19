1.  HTML Components:

- Уеб компоненти ви позволяват да създавате свои собствени HTML елементи за многократна употреба, включително стил и функционалност. (<app-navbar></app-navbar>)
- уеб компонентите са стандарт (дефиниран и реализиран от браузърите)
- Можете също да използвате React, за да допълните вашите уеб компоненти и обратно.

  a) access via prob object: {prop.X} + {} / "";
  b) attributes: message,etc
  c) alles word omgezet naar reacht.createElement();
  d) <Component syntax attribute=" " />;
  e) functies:

  - func naam altijd in hoofdletter schrijven;

  const Component = (props) => {
  return (
    <div>
    -comp
    </div>
    )
    }

  - 1 comp kan meerdere keer hergebruiken, en ze kan versch. eruitzien via attributten;
  - elke comp apart kan je verschillende childeren insteken;
  - en die kinderen renderen
  - layout comp schrijven;

#Links:
https://babeljs.io -> a tool to convert your JSX code to normal JavaScript
https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEGAdRACcEATbAegMKA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact&prettier=false&targets=&version=7.17.7&externalPlugins=&assumptions=%7B%7D
https://reactjs.org/docs/cdn-links.html
custom-elements-everywhere.com -> поддръжка
Lit -> библиотека за абстракция от високо ниво на върха на уеб компоненти

HUISWERK:
https:/react-tutorial.app/app.html -> tot 9 doorlopen tegen vrijdag, Jad React cursus

<app-root>
   <app-navbar page="home"></app-navbar>
   <flashcards-questions>
       <flashcards-question></flashcards-question>
       <flashcards-question></flashcards-question>
       <flashcards-question></flashcards-question>
   </flashcards-questions>
   <app-sidebar></app-sidebar>
</app-root>
