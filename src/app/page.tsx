import { Button } from '~/components/ui'
import { ThemeSwitcher } from '~/components/ui/theme-switcher'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex items-center justify-center gap-4">
        <h1 className="font-bold">My Storongest Front-End</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ThemeSwitcher />
        <Button intent="primary">Primary Button</Button>
        <Button intent="secondary">Secondary Button</Button>
        <Button intent="warning">Warning Button</Button>
        <Button intent="danger">Danger Button</Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        <a href="https://getjustd.com/" target="_blank" rel="noreferrer">
          Justd
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          Tailwind CSS
        </a>
        <a href="https://stephango.com/flexoki" target="_blank" rel="noreferrer">
          Flexoki
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          ES Lint
        </a>
      </footer>
    </div>
  )
}
