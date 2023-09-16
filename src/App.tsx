import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";


export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-6 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com amor no NLW da Rocketseat</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline"><Github className="w-4 h-4 mr-2" /> Github</Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea className="resize-none p-4 leading-relaxed" placeholder="Inclua o prompt para a IA..." />
            <Textarea className="resize-none p-4 leading-relaxed" placeholder="Resultado gerado pela IA" />
          </div>
          <p className="text-small text-muted-foreground">Lembre-se: Lorem ipsum dolor sit amet <code className="text-violet-400">{'{transcription}'} </code> elit. Vero hic corporis optio sequi excepturi, animi voluptatum commodi a nam odit fugit tenetur autem ad doloremque voluptatibus, velit repellat accusamus ea.</p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}

