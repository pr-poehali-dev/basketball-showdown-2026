import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-championship-black via-gray-900 to-championship-black">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/img/2f528dae-5d1e-4156-88ca-04e88c97e2d8.jpg)' }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="mb-6">
            <Badge variant="outline" className="bg-gold text-championship-black border-gold px-6 py-2 text-sm font-semibold">
              EIN: 36-5149730
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            INTERCONTINENTAL
            <br />
            <span className="text-gold">BASKETBALL LEAGUE</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Cup matches of the strongest teams from different continents with a $10 million prize fund
          </p>
          
          {/* Championship Match Announcement */}
          <div className="bg-black/50 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Calendar" className="text-gold mr-3" size={28} />
              <span className="text-gold font-semibold text-lg">September 24, 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              CHAMPIONSHIP MATCH
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Icon name="MapPin" className="text-gold mr-2" size={20} />
              <span className="text-gray-300 animate-pulse bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent font-semibold">
                🌟 LIVE • Crypto.com Arena, Los Angeles
              </span>
            </div>
            <div className="text-sm text-gray-400 mb-6">
              Laser Light Show • David Gilmour • Shine on You Crazy Diamond
            </div>
          </div>
        </div>
      </header>

      {/* Teams Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            TEAMS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Lakers */}
            <Card className="bg-gradient-to-br from-purple-900 via-purple-800 to-gold-dark border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="/img/90e572e3-a2be-4a1f-8efa-af8a4de8aa02.jpg" 
                    alt="Los Angeles Lakers" 
                    className="w-24 h-24 mx-auto rounded-full border-4 border-gold object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  LOS ANGELES
                  <br />
                  <span className="text-gold">LAKERS</span>
                </h3>
                <Badge className="bg-gold text-championship-black mb-4">USA</Badge>
                <p className="text-gray-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  17-time NBA champions. Legendary team with the richest history of victories.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">17</div>
                    <div className="text-sm text-gray-400">Championships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">32</div>
                    <div className="text-sm text-gray-400">Finals</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real Madrid */}
            <Card className="bg-gradient-to-br from-white via-gray-100 to-gold-light text-championship-black border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="/img/990589d1-1569-48f9-8962-3524cf3ab4a0.jpg" 
                    alt="Real Madrid" 
                    className="w-24 h-24 mx-auto rounded-full border-4 border-gold object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  REAL MADRID
                  <br />
                  <span className="text-gold-dark">BALONCESTO</span>
                </h3>
                <Badge className="bg-championship-red text-white mb-4">SPAIN</Badge>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Royal club with 36 ACB titles. European basketball giants.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold-dark">11</div>
                    <div className="text-sm text-gray-600">Eurocups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold-dark">36</div>
                    <div className="text-sm text-gray-600">ACB Titles</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prize Fund Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            PRIZE FUND
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg">
            Biggest awards in international basketball history
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 1st Place */}
            <Card className="bg-gradient-to-br from-gold via-gold-light to-gold border-2 border-gold text-championship-black transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Trophy" size={64} className="mx-auto text-championship-black" />
                </div>
                <div className="text-6xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  $10M
                </div>
                <h3 className="text-2xl font-bold mb-4">1ST PLACE</h3>
                <p className="text-sm">
                  Ten million US dollars for the Intercontinental Basketball League championship title
                </p>
              </CardContent>
            </Card>

            {/* 2nd Place */}
            <Card className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 border-2 border-gray-400 text-championship-black transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Medal" size={64} className="mx-auto text-championship-black" />
                </div>
                <div className="text-6xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  $3M
                </div>
                <h3 className="text-2xl font-bold mb-4">2ND PLACE</h3>
                <p className="text-sm">
                  Three million US dollars for the tournament silver medal
                </p>
              </CardContent>
            </Card>

            {/* Fan Prizes */}
            <Card className="bg-gradient-to-br from-championship-red via-red-600 to-championship-red border-2 border-red-500 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Users" size={64} className="mx-auto text-white" />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  PRIZES
                </div>
                <h3 className="text-2xl font-bold mb-4">FOR FANS</h3>
                <p className="text-sm">
                  Special awards and gifts for viewers and team supporters
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-purple-900/50 via-pink-800/50 to-purple-900/50 border border-gold/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Icon name="Music" size={80} className="mx-auto text-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                LASER LIGHT SHOW
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                DAVID GILMOUR
              </h3>
              <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legendary Pink Floyd guitarist will perform
                <br />
                <span className="text-gold font-semibold">«Shine on You Crazy Diamond»</span>
              </p>
              <Button className="bg-gold text-championship-black hover:bg-gold-light font-semibold px-8 py-3 text-lg">
                Buy Tickets
                <Icon name="ExternalLink" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Intercontinental Basketball League of Cups Inc.
          </h3>
          <p className="text-gray-400 mb-4">EIN: 36-5149730</p>
          <p className="text-gray-500 text-sm">
            © 2026 Intercontinental Basketball League. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;