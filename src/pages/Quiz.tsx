
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Users, Mic, MicOff, Video, VideoOff, Trophy } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [participants] = useState([
    { id: 1, name: 'You', score: 85, isMuted: false, isVideoOn: true, isActive: true },
    { id: 2, name: 'Alex', score: 92, isMuted: false, isVideoOn: true, isActive: false },
    { id: 3, name: 'Sarah', score: 78, isMuted: true, isVideoOn: false, isActive: false },
    { id: 4, name: 'Mike', score: 88, isMuted: false, isVideoOn: true, isActive: true },
  ]);

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
      type: "multiple-choice"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1,
      type: "multiple-choice"
    },
    {
      id: 3,
      question: "What is 15 × 8?",
      options: ["110", "120", "130", "140"],
      correct: 1,
      type: "multiple-choice"
    }
  ];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 10);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      // Quiz complete
      navigate('/results');
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-4">
      {/* Header */}
      <div className="container mx-auto mb-6">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-semibold">Quiz Session</h1>
              <p className="text-white/70 text-sm">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-4 h-4" />
              <span className="font-mono text-lg">{timeLeft}s</span>
            </div>
            <Badge className="bg-green-500 text-white">
              Score: {score}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Participants */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-medium mb-4">Participants</h3>
            {participants.slice(0, 2).map((participant) => (
              <div key={participant.id} className={`bg-white/10 backdrop-blur-md rounded-lg p-3 border ${participant.isActive ? 'border-green-400 shadow-green-400/20 shadow-lg' : 'border-white/20'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-sm">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white text-sm font-medium">{participant.name}</p>
                    <p className="text-white/70 text-xs">Score: {participant.score}</p>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                  {participant.isVideoOn ? (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs">
                          {participant.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ) : (
                    <VideoOff className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  {participant.isMuted ? (
                    <MicOff className="w-3 h-3 text-red-400" />
                  ) : (
                    <Mic className="w-3 h-3 text-green-400" />
                  )}
                  {participant.isVideoOn ? (
                    <Video className="w-3 h-3 text-green-400" />
                  ) : (
                    <VideoOff className="w-3 h-3 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center Quiz Area */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <Progress value={(timeLeft / 30) * 100} className="flex-1 mr-4" />
                  <Badge variant="outline" className="text-white border-white/30">
                    {timeLeft}s
                  </Badge>
                </div>
                <CardTitle className="text-white text-2xl mb-4">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  {currentQ.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className={`w-full p-4 text-left justify-start text-lg transition-all duration-200 ${
                        selectedAnswer === index 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-400' 
                          : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                      }`}
                    >
                      <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </Button>
                  ))}
                </div>
                
                <div className="flex justify-center pt-6">
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-2"
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Participants */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-medium mb-4">More Participants</h3>
            {participants.slice(2).map((participant) => (
              <div key={participant.id} className={`bg-white/10 backdrop-blur-md rounded-lg p-3 border ${participant.isActive ? 'border-green-400 shadow-green-400/20 shadow-lg' : 'border-white/20'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-sm">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white text-sm font-medium">{participant.name}</p>
                    <p className="text-white/70 text-xs">Score: {participant.score}</p>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                  {participant.isVideoOn ? (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs">
                          {participant.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ) : (
                    <VideoOff className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  {participant.isMuted ? (
                    <MicOff className="w-3 h-3 text-red-400" />
                  ) : (
                    <Mic className="w-3 h-3 text-green-400" />
                  )}
                  {participant.isVideoOn ? (
                    <Video className="w-3 h-3 text-green-400" />
                  ) : (
                    <VideoOff className="w-3 h-3 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
