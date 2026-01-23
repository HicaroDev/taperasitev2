"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

export default function Footer() {


    return (
        <footer id="contato" className="relative border-t border-zinc-900 bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight font-anton uppercase">Fique Conectado</h2>
                        <p className="mb-6 text-muted-foreground">
                            Assine nossa newsletter para receber promoções exclusivas e novidades.
                        </p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="pr-12 backdrop-blur-sm bg-zinc-900/50 border-zinc-800"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-brand-red text-white transition-transform hover:scale-110"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Assinar</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-brand-red/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase font-anton">Links Rápidos</h3>
                        <nav className="space-y-2 text-sm">
                            <a href="#" className="block transition-colors hover:text-brand-red">
                                Início
                            </a>
                            <a href="#cardapio" className="block transition-colors hover:text-brand-red">
                                Cardápio
                            </a>
                            <a href="#a tapera" className="block transition-colors hover:text-brand-red">
                                A Tapera
                            </a>
                            <a href="#contato" className="block transition-colors hover:text-brand-red">
                                Contato
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase font-anton">Horário de Funcionamento</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Terça a Quinta: 18:00 - 23:00</p>
                            <p>Sexta a Domingo: 18:00 - 23:30</p>
                            <p className="pt-2 text-brand-red font-bold">Delivery em Senador Canedo</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase font-anton">Contatos</h3>
                        <address className="space-y-2 text-sm not-italic text-muted-foreground">
                            <p>Av. Itapurã, Quadra 17 Lote 12-A</p>
                            <p>Vila Santa Rosa, Sen. Canedo - GO</p>
                            <p>75251-394</p>
                            <p className="pt-2">WhatsApp: (62) 99999-9999</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold uppercase font-anton">Siga-nos</h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://www.instagram.com/taperaburger/" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-brand-red hover:text-white">
                                                <Instagram className="h-4 w-4" />
                                                <span className="sr-only">Instagram</span>
                                            </Button>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>@taperaburger</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://linktr.ee/taperaburger" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-brand-red hover:text-white">
                                                <Send className="h-4 w-4" />
                                                <span className="sr-only">Linktree</span>
                                            </Button>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Faça seu pedido</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2026 Tapera Burguer. Todos os direitos reservados.
                    </p>
                    <nav className="flex gap-4 text-sm">
                        <a href="#" className="transition-colors hover:text-brand-red">
                            Política de Privacidade
                        </a>
                        <a href="#" className="transition-colors hover:text-brand-red">
                            Termos de Uso
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
