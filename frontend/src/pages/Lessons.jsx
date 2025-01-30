import React, { useState } from 'react';
import "../Css/Lessons.css";

const lessonsContent = {
  spanish: {
    title: 'Learn Spanish',
    lessons: [
      {
        title: 'Lesson 1: Greetings',
        content: [
          'Hola (Hello)',
          'Adiós (Goodbye)',
          'Buenos días (Good morning)',
          'Buenas noches (Good evening)',
          '¿Cómo estás? (How are you?)',
        ],
      },
      {
        title: 'Lesson 2: Common Phrases',
        content: [
          'Gracias (Thank you)',
          'Por favor (Please)',
          'Lo siento (Sorry)',
          '¿Cuánto cuesta? (How much is it?)',
        ],
      },
      {
        title: 'Lesson 3: Numbers',
        content: [
          'Uno (One)',
          'Dos (Two)',
          'Tres (Three)',
          'Cuatro (Four)',
          'Cinco (Five)',
        ],
      },
      {
        title: 'Lesson 4: Colors',
        content: [
          'Rojo (Red)',
          'Azul (Blue)',
          'Verde (Green)',
          'Amarillo (Yellow)',
          'Negro (Black)',
        ],
      },
      {
        title: 'Lesson 5: Days of the Week',
        content: [
          'Lunes (Monday)',
          'Martes (Tuesday)',
          'Miércoles (Wednesday)',
          'Jueves (Thursday)',
          'Viernes (Friday)',
          'Sábado (Saturday)',
          'Domingo (Sunday)',
        ],
      },
      {
        title: 'Lesson 6: Months of the Year',
        content: [
          'Enero (January)',
          'Febrero (February)',
          'Marzo (March)',
          'Abril (April)',
          'Mayo (May)',
          'Junio (June)',
          
          'Julio (July)',
          'Agosto (August)',
          'Septiembre (September)',
          'Octubre (October)',
          'Noviembre (November)',
          'Diciembre (December)',
        ],
      },
    ],
  },
  french: {
    title: 'Learn French',
    lessons: [
      {
        title: 'Lesson 1: Greetings',
        content: [
          'Bonjour (Hello)',
          'Bonsoir (Good evening)',
          'Salut (Hi)',
          'Au revoir (Goodbye)',
        ],
      },
      {
        title: 'Lesson 2: Common Phrases',
        content: [
          'Merci (Thank you)',
          'Excusez-moi (Excuse me)',
          'Comment ça va? (How are you?)',
          'Où est...? (Where is...?)',
        ],
      },
      {
        title: 'Lesson 3: Numbers',
        content: [
          'Un (One)',
          'Deux (Two)',
          'Trois (Three)',
          'Quatre (Four)',
          'Cinq (Five)',
        ],
      },
      {
        title: 'Lesson 4: Colors',
        content: [
          'Rouge (Red)',
          'Bleu (Blue)',
          'Vert (Green)',
          'Jaune (Yellow)',
          'Noir (Black)',
        ],
      },
      {
        title: 'Lesson 5: Days of the Week',
        content: [
          'Lundi (Monday)',
          'Mardi (Tuesday)',
          'Mercredi (Wednesday)',
          'Jeudi (Thursday)',
          'Vendredi (Friday)',
          'Samedi (Saturday)',
          'Dimanche (Sunday)',
        ],
      },
      {
        title: 'Lesson 6: Months of the Year',
        content: [
          'Janvier (January)',
          'Février (February)',
          'Mars (March)',
          'Avril (April)',
          'Mai (May)',
          'Juin (June)',
          'Juillet (July)',
          'Août (August)',
          'Septembre (September)',
          'Octobre (October)',
          'Novembre (November)',
          'Décembre (December)',
        ],
      },
    ],
  },
  german: {
    title: 'Learn German',
    lessons: [
      {
        title: 'Lesson 1: Greetings',
        content: [
          'Hallo (Hello)',
          'Guten Morgen (Good morning)',
          'Gute Nacht (Good night)',
          'Auf Wiedersehen (Goodbye)',
        ],
      },
      {
        title: 'Lesson 2: Common Phrases',
        content: [
          'Danke (Thank you)',
          'Bitte (Please)',
          'Wie geht\'s? (How are you?)',
          'Entschuldigung (Excuse me)',
        ],
      },
      {
        title: 'Lesson 3: Numbers',
        content: [
          'Eins (One)',
          'Zwei (Two)',
          'Drei (Three)',
          'Vier (Four)',
          'Fünf (Five)',
        ],
      },
      {
        title: 'Lesson 4: Colors',
        content: [
          'Rot (Red)',
          'Blau (Blue)',
          'Grün (Green)',
          'Gelb (Yellow)',
          'Schwarz (Black)',
        ],
      },
      {
        title: 'Lesson 5: Days of the Week',
        content: [
          'Montag (Monday)',
          'Dienstag (Tuesday)',
          'Mittwoch (Wednesday)',
          'Donnerstag (Thursday)',
          'Freitag (Friday)',
          'Samstag (Saturday)',
          'Sonntag (Sunday)',
        ],
      },
      {
        title: 'Lesson 6: Months of the Year',
        content: [
          'Januar (January)',
          'Februar (February)',
          'März (March)',
          'April (April)',
          'Mai (May)',
          'Juni (June)',
          'Juli (July)',
          'August (August)',
          'September (September)',
          'Oktober (October)',
          'November (November)',
          'Dezember (December)',
        ],
      },
    ],
  },
  italian: {
    title: 'Learn Italian',
    lessons: [
      {
        title: 'Lesson 1: Greetings',
        content: [
          'Ciao (Hello)',
          'Buongiorno (Good morning)',
          'Buona sera (Good evening)',
          'Arrivederci (Goodbye)',
        ],
      },
      {
        title: 'Lesson 2: Common Phrases',
        content: [
          'Grazie (Thank you)',
          'Per favore (Please)',
          'Come stai? (How are you?)',
          'Dove è...? (Where is...?)',
        ],
      },
      {
        title: 'Lesson 3: Numbers',
        content: [
          'Uno (One)',
          'Due (Two)',
          'Tre (Three)',
          'Quattro (Four)',
          'Cinque (Five)',
        ],
      },
      {
        title: 'Lesson 4: Colors',
        content: [
          'Rosso (Red)',
          'Blu (Blue)',
          'Verde (Green)',
          'Giallo (Yellow)',
          'Nero (Black)',
        ],
      },
      {
        title: 'Lesson 5: Days of the Week',
        content: [
          'Lunedì (Monday)',
          'Martedì (Tuesday)',
          'Mercoledì (Wednesday)',
          'Giovedì (Thursday)',
          'Venerdì (Friday)',
          'Sabato (Saturday)',
          'Domenica (Sunday)',
        ],
      },
      {
        title: 'Lesson 6: Months of the Year',
        content: [
          'Gennaio (January)',
          'Febbraio (February)',
          'Marzo (March)',
          'Aprile (April)',
          'Maggio (May)',
          'Giugno (June)',
          'Luglio (July)',
          'Agosto (August)',
          'Settembre (September)',
          'Ottobre (October)',
          'Novembre (November)',
          'Dicembre (December)',
        ],
      },
    ],
  },
};

const Lessons = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="lessons-container">
      <h1>{lessonsContent[selectedLanguage].title}</h1>
      
      <div className="language-selector">
        <label htmlFor="language">Choose a language: </label>
        <select id="language" onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
        </select>
      </div>

      <div className="lessons">
        {lessonsContent[selectedLanguage].lessons.map((lesson, index) => (
          <div key={index} className="lesson">
            <h2>{lesson.title}</h2>
            <ul>
              {lesson.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
