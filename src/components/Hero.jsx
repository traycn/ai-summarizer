import { logo } from '../assets';

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sum_logo" className='w-28 object-contain' />

        <button type='button'
          onClick={() => window.open('https://github.com/traycn')}
          className='black_btn'>
            Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading <i>some</i> with Sum. An open-source article summarizer that condeses articles into easily digestible summaries.
      </h2>
    </header>
  )
}

export default Hero 