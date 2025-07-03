
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Star, Users, Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  
  const results = [
    { id: 1, name: 'Alex Johnson', score: 92, rank: 1, avatar: 'AJ' },
    { id: 2, name: 'Mike Davis', score: 88, rank: 2, avatar: 'MD' },
    { id: 3, name: 'You', score: 85, rank: 3, avatar: 'Y' },
    { id: 4, name: 'Sarah Chen', score: 78, rank: 4, avatar: 'SC' },
  ];

  const userResult = results.find(r => r.name === 'You');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-4">
      {/* Header */}
      <div className="container mx-auto mb-8">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 animate-scale-in">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">Quiz Complete!</h1>
          <p className="text-white/80 text-lg animate-fade-in">Great job everyone! Here are the final results.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl">
        {/* Your Result */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-xl">Your Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{userResult?.score}</div>
                <div className="text-white/70">Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">#{userResult?.rank}</div>
                <div className="text-white/70">Rank</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
                <div className="text-white/70">4/5 Stars</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Final Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.map((result) => (
                <div 
                  key={result.id} 
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${
                    result.name === 'You' 
                      ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                    {result.rank}
                  </div>
                  
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white">
                      {result.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-semibold">{result.name}</h3>
                      {result.name === 'You' && <Badge className="bg-purple-500 text-white">You</Badge>}
                      {result.rank === 1 && <Trophy className="w-4 h-4 text-yellow-400" />}
                    </div>
                    <p className="text-white/70 text-sm">
                      {result.score >= 90 ? 'Excellent!' : result.score >= 80 ? 'Great job!' : result.score >= 70 ? 'Good work!' : 'Keep practicing!'}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{result.score}</div>
                    <div className="text-white/70 text-sm">points</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button 
            onClick={() => navigate('/lobby')}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/20"
          >
            <Users className="w-4 h-4 mr-2" />
            New Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
