import './style.css'
import midnightLogo from './Midnight-RGB_Logo-Stacked-Black.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://midnight.network//" target="_blank">
      <img src="${midnightLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Midnight SPO Monitor</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
