import parrotImage from '../assets/img/1.jpg';

function About() {
  return (
    <div>
      <h2>Про мене</h2>
      <p>Це сторінка з інформацією про мене.</p>
      <p>Я люблю свою птаху, тож тут буде моя птаха:</p>
      <img src={parrotImage} alt="my-parrot" />
    </div>
  );
}

export default About;
