import { Plus } from 'lucide-react'

import logo from '../assets/login-in-orbit.svg'
import letsStart from '../assets/lets-start.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export const EmptyGoals = () => {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora ?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
