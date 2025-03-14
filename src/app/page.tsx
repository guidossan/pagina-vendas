"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/button"
import {
  CheckCircle2,
  Instagram,
  Clock,
  Users,
  Heart,
  MessageCircle,
  Hash,
  CheckSquare,
  Headphones,
  Calendar,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/carousel"
import { Card, CardContent } from "../components/card"

const HeadphonesIcon = Headphones

export default function SalesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Aumente sua presença no Instagram com posts prontos para Direito Previdenciário
              </h1>
              <p className="text-xl opacity-90">
                Pacote completo de conteúdo editável para advogados que desejam atrair mais clientes e se destacar nas
                redes sociais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold">
                  QUERO ADQUIRIR AGORA
                </Button>
                <Button size="lg" variant="outline" className="text-blue hover:bg-white/10" >
                  SAIBA MAIS
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Pacote de posts para Direito Previdenciário"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-2xl max-w-full h-auto sm:w-[200px] md:w-[300px] lg:w-[500px] mx-auto block"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
                  Oferta Especial
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Example Carousel */}
      <section className="py-16 bg-white" id="examples">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Exemplos do Nosso Conteúdo</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Veja alguns exemplos do conteúdo de alta qualidade que você receberá
          </p>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                        <Image
                          src={`/placeholder.svg?height=400&width=400&text=Exemplo+${index}`}
                          alt={`Exemplo de post ${index}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que investir em conteúdo especializado?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Instagram className="text-blue-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Destaque-se no Instagram</h3>
              <p className="text-gray-600">
                Conteúdo profissional e de alta qualidade que diferencia seu escritório da concorrência.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Economize tempo</h3>
              <p className="text-gray-600">
                Posts prontos para usar, permitindo que você foque no atendimento aos seus clientes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-700 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atraia mais clientes</h3>
              <p className="text-gray-600">
                Conteúdo educativo e atrativo que gera confiança e converte seguidores em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Estáticos Section with Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                POSTS ESTÁTICOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">30 Posts Estáticos Profissionais</h2>
              <p className="text-gray-600 mb-6">
                Templates profissionais com conteúdo informativo sobre aposentadorias, benefícios, revisões e dicas
                práticas para seus seguidores.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Totalmente editáveis no Canva",
                  "Legendas otimizadas para engajamento",
                  "Design profissional e moderno",
                  "Conteúdo jurídico validado por especialistas",
                  "Hashtags estratégicas incluídas",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-blue-700 hover:bg-blue-800">Ver mais exemplos</Button>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Post+${index}`}
                    alt={`Exemplo de post estático ${index}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reels Section with Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                REELS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">15 Roteiros para Reels Engajadores</h2>
              <p className="text-gray-600 mb-6">
                Roteiros prontos para gravação de vídeos curtos e dinâmicos que explicam conceitos do Direito
                Previdenciário de forma simples e atrativa.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Roteiros completos passo a passo",
                  "Sugestões de hashtags estratégicas",
                  "Temas de alta conversão",
                  "Dicas de gravação e edição",
                  "Textos para legendas incluídos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-amber-500 hover:bg-amber-600">Ver mais exemplos</Button>
            </div>

            <div className="md:w-1/2">
              <div className="relative mx-auto max-w-xs">
                {/* Instagram Reels Mock */}
                <div className="border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl bg-white p-2">
                  <div className="rounded-2xl overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-4">
                      <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <Carousel className="w-full" orientation="vertical">
                      <CarouselContent className="-mt-1 h-[500px]">
                        {[1, 2, 3].map((index) => (
                          <CarouselItem key={index} className="pt-1 h-full">
                            <div className="p-1 h-full">
                              <Image
                                src={`/placeholder.svg?height=500&width=280&text=Reel+${index}`}
                                alt={`Exemplo de reel ${index}`}
                                width={280}
                                height={500}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-1/2 -translate-x-1/2 top-4 -translate-y-1/2" />
                      <CarouselNext className="left-1/2 -translate-x-1/2 bottom-4 translate-y-1/2" />
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section with Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                STORIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">20 Templates para Stories Interativos</h2>
              <p className="text-gray-600 mb-6">
                Templates para stories interativos com perguntas e respostas, enquetes e conteúdo educativo que geram
                engajamento com seu público.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Formatos interativos para maior engajamento",
                  "Modelos de enquetes sobre temas previdenciários",
                  "Designs modernos e profissionais",
                  "Fácil personalização no Canva",
                  "Estratégias para aumentar visualizações",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-blue-700 hover:bg-blue-800">Ver mais exemplos</Button>
            </div>

            <div className="md:w-1/2">
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="relative">
                    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white p-1">
                      <Image
                        src={`/placeholder.svg?height=400&width=220&text=Story+${index}`}
                        alt={`Exemplo de story ${index}`}
                        width={220}
                        height={400}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              BÔNUS EXCLUSIVOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Materiais Complementares Inclusos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Além do conteúdo principal, você receberá bônus exclusivos para maximizar seus resultados nas redes
              sociais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Calendário Editorial",
                desc: "Planejamento completo para 3 meses de postagens",
                icon: Calendar,
              },
              {
                title: "Guia de Hashtags",
                desc: "As melhores hashtags para advogados previdenciários",
                icon: Hash,
              },
              {
                title: "Checklist de Perfil",
                desc: "Otimize seu perfil para atrair mais clientes",
                icon: CheckSquare,
              },
              {
                title: "Suporte por 30 dias",
                desc: "Tire suas dúvidas sobre o uso do material",
                icon: HeadphonesIcon,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-amber-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Galeria de Exemplos</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Veja mais exemplos do conteúdo que você receberá no pacote
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Exemplo+${i + 1}`}
                  alt={`Exemplo de conteúdo ${i + 1}`}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">Exemplo de {i % 3 === 0 ? "Post" : i % 3 === 1 ? "Reel" : "Story"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
              Ver galeria completa
            </Button>
          </div>
        </div>
      </section>

      {/* Testemunhas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que dizem nossos clientes</h2>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4].map((i) => (
                <CarouselItem key={i} className="md:basis-1/2 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={`/placeholder.svg?height=64&width=64`}
                          alt={`Advogado ${i}`}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Dr. Nome do Advogado</h4>
                        <p className="text-sm text-gray-500">Advogado Previdenciário</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "Este pacote de conteúdo transformou minha presença no Instagram. Economizei horas de trabalho e
                      consegui atrair novos clientes logo nas primeiras semanas de uso."
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Invista no crescimento do seu escritório</h2>
            <p className="text-xl mb-8 opacity-90">Pacote completo de conteúdo para Direito Previdenciário</p>

            <div className="bg-white text-gray-900 rounded-lg p-8 shadow-xl">
              <div className="flex justify-center items-center mb-6">
                <div className="text-5xl font-bold text-blue-900">R$ XXX</div>
                <div className="ml-2 text-gray-500 line-through text-xl">R$ XXX</div>
              </div>

              <p className="text-gray-600 mb-6">Pagamento único - Acesso imediato a todo o conteúdo</p>

              <ul className="space-y-3 text-left mb-8">
                {[
                  "30 Posts Estáticos com legendas",
                  "15 Roteiros para Reels",
                  "20 Templates para Stories",
                  "Bônus exclusivos",
                  "Suporte por 30 dias",
                  "Atualizações gratuitas",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-6">
                QUERO ADQUIRIR AGORA
              </Button>

              <p className="mt-4 text-sm text-gray-500">Pagamento seguro via PIX, cartão de crédito ou boleto</p>
            </div>

            <p className="mt-8 text-white/80">Oferta por tempo limitado. Garanta já o seu pacote!</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Como recebo o material após a compra?",
                a: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à área de membros, onde poderá baixar todo o conteúdo.",
              },
              {
                q: "Os posts são realmente editáveis?",
                a: "Sim! Todo o material é fornecido em formatos editáveis compatíveis com Canva e outros editores populares, permitindo que você personalize com suas cores, logo e informações.",
              },
              {
                q: "Preciso dar créditos ao usar o conteúdo?",
                a: "Não é necessário. Após a compra, você tem direito de uso total do conteúdo em suas redes sociais, sem necessidade de atribuição.",
              },
              {
                q: "O conteúdo é atualizado conforme mudanças na legislação?",
                a: "Sim! Oferecemos atualizações gratuitas sempre que houver mudanças significativas na legislação previdenciária que afetem o conteúdo do pacote.",
              },
              {
                q: "Posso usar o material em mais de um perfil?",
                a: "A licença é para uso em um único perfil profissional. Para uso em múltiplos perfis, entre em contato conosco para conhecer nossas opções corporativas.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua presença digital?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Não perca mais tempo criando conteúdo do zero. Comece hoje mesmo a atrair mais clientes com nosso pacote
            especializado em Direito Previdenciário.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg">
            QUERO ADQUIRIR AGORA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Pacote Direito Previdenciário</h3>
              <p className="text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-500">
                Termos de Uso
              </Link>
              <Link href="#" className="hover:text-amber-500">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-amber-500">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

