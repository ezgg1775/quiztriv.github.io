import React, { useState } from 'react';
import categories from '@/assets/categories.json';
import PageFooter from '../PageFooter';
import playSound from '@/helpers/playSound';

export default function MainHome() {
  const [showAgreement, setShowAgreement] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  function handleTitleHover(e) {
    e.target.classList.add('jello-vertical');
    e.target.style.color = categories[Math.floor(Math.random() * categories.length)].color;
    e.target.addEventListener('animationend', () => e.target.classList.remove('jello-vertical'));
  }

  const handleTitleLeave = (e) => (e.target.style.color = 'white');

  const handleAgreeLinkClick = () => {
    setShowAgreement(true);
  };

  const handleAgree = () => {
    setShowAgreement(false);
  };

  const handlePlayClick = () => {
    playSound('pop');
    document.getElementById('newGameDialog')?.showModal();
  };

  const handleHowToPlayClick = () => {
    setShowHowToPlay(true);
  };

  return (
    <main className='mainHome max-w-6xl relative mx-auto w-full min-h-[25rem] flex gap-4 flex-col justify-between items-center px-5 md:px-10 py-20 lg:col-start-2 lg:row-start-1 lg:row-end-3 text-center text-white'>
      <article>
        <h1 className='text-6xl font-medium w-full uppercase z-10 relative' translate='no'>
          {'QUIZTRIV'.split('').map((letter, index) => (
            <span
              key={index}
              id={letter + index + 10}
              className='relative inline-block transition-all duration-300'
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleLeave}
            >
              {letter}
            </span>
          ))}
        </h1>
        <div className='bg-[#1c233a] absolute w-full lg:w-[41.7vw] h-40 top-16 left-0'></div>
        <p className='mb-20 relative'>
          A KNOWLEDGE SHOWDOWN!
        </p>
      </article>

      <button
        onClick={handlePlayClick}
        id='play'
        href='play'
        className='btn-primary uppercase px-6 py-4 text-lg max-w-md w-full mx-auto mt-10'
      >
        Play
      </button>

      <button
        onClick={handleHowToPlayClick}
        className='btn-primary uppercase px-6 py-4 text-lg max-w-md w-full mx-auto mt-4'
      >
        How to Play
      </button>

      {showHowToPlay && (
        <div className='modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50'></div>
      )}

      {showHowToPlay && (
        <div id='howToPlayModal' className='modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
          <div className='modal-content bg-white p-8 rounded-md shadow-md'>
            <button
              onClick={() => setShowHowToPlay(false)}
              className='exit-button absolute top-2 right-2 text-lg cursor-pointer'
              style={{ color: 'black' }}
            >
              ✕
            </button>
            <h2 className='text-2xl font-bold mb-4 text-black'>How to Play</h2>
            <p className='mb-4 text-black'>
              Welcome to <strong className="font-bold">Quiztriv!</strong> Here are the instructions on how to play the game:
              There's a game modes <strong className="font-bold"> CLASSIC, TIME AND INFINITE</strong>, in <strong className="font-bold">CLASSIC</strong> the user can answer the question in a normal way.
              In <strong className="font-bold">TIME</strong>, the game has a timer set, it depends on the user what time they chose,
              and last is <strong className="font-bold">INFINITE</strong>, there is no time, it's infinite. You can answer a lot of questions until your all lives are gone.
              <br></br>
              Now let's talk about your <strong className="font-bold">WILDCARDS</strong>, the developer assigns you WILDCARDS. The <strong className="font-bold">Skip Questions, The 50/50 and your LIVES</strong>.
              In <strong className="font-bold">Skip Questions</strong>, you literally skip one question and show the correct answer immediately. In <strong className="font-bold">50/50</strong>, it will remove two wrong answers, then the remaining answer is the correct one and the wrong one.
              Then last is <strong className="font-bold">LIVES</strong>, it indicates how many lives you have left.
            </p>
          </div>
        </div>
      )}

<button
  onClick={handleAgreeLinkClick}
  className={`text-white bg-blue-500 underline cursor-pointer animate-bounce ${showAgreement && 'hidden'}`}
>
  User's Agreement
</button>

      {showAgreement && (
  <div id='userAgreementModal' className='modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
    <div className='modal-content bg-white p-8 rounded-md shadow-md' style={{ backgroundColor: '#fff' }}>
      <button
        onClick={() => setShowAgreement(false)}
        className='exit-button absolute top-2 right-2 text-lg cursor-pointer'
        style={{ color: 'black' }}
      >
        ✕
      </button>
      <h2 className='text-2xl font-bold mb-4 text-black'>QuizTriv User's Agreement</h2>
      <p className='mb-4 text-black'>
        By participating in our trivia quiz, you agree to the following terms and conditions:
      </p>
            <ol className='mb-4 text-black'>
              <li>
                You agree to respect the intellectual property rights of QUIZTRIV.
              </li> 
              <li>
                The quiz content, including questions and answers, is the intellectual property of QUIZTRIV. Participants agree not to reproduce, distribute, or use this content without explicit permission.
              </li>
              <li>
                All information provided during registration must be accurate and complete. QUIZTRIV reserves the right to disqualify any participant with false or misleading information.
              </li>
              <li>
                Participants must comply with any eligibility requirements specified for the trivia quiz. QUIZTRIV reserves the right to disqualify any participant who fails to meet these requirements.
              </li>
              <li>
                QUIZTRIV will collect and process personal information in accordance with applicable privacy laws. By participating, participants consent to the collection, use, and disclosure of their personal information for the purposes of the trivia quiz.
              </li>
              <li>
                QUIZTRIV is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the trivia quiz.
              </li>
              {/* Add more terms as needed */}
            </ol>
            <button
        onClick={handleAgree}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        Agree
      </button>
    </div>
  </div>
      )}

      <PageFooter />
    </main>
  );
}
