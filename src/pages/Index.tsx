
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Video, Trophy, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleJoinSession = () => {
    navigate('/lobby');
  };

  const handleCreateSession = () => {
    navigate('/lobby?host=true');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-opacity-5 bg-white animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Card className="w-full max-w-md backdrop-blur-sm bg-white/90 shadow-2xl border-0 animate-scale-in">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              QuizVerse Collab
            </CardTitle>
            <CardDescription className="text-gray-600">
              Join live quiz sessions with video collaboration
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Sign In
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-reg">Email</Label>
                  <Input id="email-reg" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-reg">Password</Label>
                  <Input id="password-reg" type="password" placeholder="Create a password" />
                </div>
                <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Create Account
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">QuizVerse Collab</h1>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Profile
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
          Learn Together, Win Together
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in">
          Join live quiz sessions with up to 25 participants. Collaborate through video and voice while solving challenges together.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover-scale" onClick={handleCreateSession}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Host a Session</CardTitle>
              <CardDescription className="text-white/70">
                Create a new quiz session and invite up to 25 participants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Create Session
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover-scale" onClick={handleJoinSession}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Join a Session</CardTitle>
              <CardDescription className="text-white/70">
                Enter a session ID to join an existing quiz collaboration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Join Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Live Video & Voice</h3>
            <p className="text-white/70 text-sm">Communicate with participants through integrated video and voice chat</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Up to 25 Participants</h3>
            <p className="text-white/70 text-sm">Host large collaborative quiz sessions with your entire class</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Real-time Collaboration</h3>
            <p className="text-white/70 text-sm">Vote, discuss, and solve problems together in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
