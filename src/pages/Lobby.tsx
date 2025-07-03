
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Copy, Settings, Mic, MicOff, Video, VideoOff, Crown } from "lucide-react";
import { toast } from "sonner";

const Lobby = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isHost = searchParams.get('host') === 'true';
  const [sessionId] = useState('QZ-' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [participants, setParticipants] = useState([
    { id: 1, name: 'You', isHost: isHost, isMuted: false, isVideoOn: true },
    { id: 2, name: 'Alex Johnson', isHost: false, isMuted: false, isVideoOn: true },
    { id: 3, name: 'Sarah Chen', isHost: false, isMuted: true, isVideoOn: false },
    { id: 4, name: 'Mike Davis', isHost: false, isMuted: false, isVideoOn: true },
  ]);

  const copySessionId = () => {
    navigator.clipboard.writeText(sessionId);
    toast.success('Session ID copied to clipboard!');
  };

  const startSession = () => {
    navigate('/quiz');
  };

  const toggleMute = () => {
    setParticipants(prev => 
      prev.map(p => p.id === 1 ? { ...p, isMuted: !p.isMuted } : p)
    );
  };

  const toggleVideo = () => {
    setParticipants(prev => 
      prev.map(p => p.id === 1 ? { ...p, isVideoOn: !p.isVideoOn } : p)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-4">
      {/* Header */}
      <div className="container mx-auto mb-8">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-semibold">Session Lobby</h1>
              <p className="text-white/70 text-sm">Waiting for participants...</p>
            </div>
          </div>
          <Button onClick={() => navigate('/')} variant="ghost" className="text-white hover:bg-white/20">
            Leave
          </Button>
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 gap-8">
        {/* Session Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Session Details
                {isHost && <Badge className="bg-yellow-500 text-yellow-900">Host</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white/70 text-sm">Session ID</label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input value={sessionId} readOnly className="bg-white/10 border-white/30 text-white" />
                  <Button size="sm" onClick={copySessionId} variant="ghost" className="text-white hover:bg-white/20">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="text-white/70 text-sm">Participants</label>
                <div className="text-2xl font-bold text-white mt-1">
                  {participants.length} / 25
                </div>
              </div>

              {!isHost && (
                <div>
                  <label className="text-white/70 text-sm">Join with Session ID</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input placeholder="Enter session ID" className="bg-white/10 border-white/30 text-white placeholder:text-white/50" />
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500">
                      Join
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Controls */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  onClick={toggleMute}
                  variant={participants[0].isMuted ? "destructive" : "secondary"}
                  className="flex-1"
                >
                  {participants[0].isMuted ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                  {participants[0].isMuted ? 'Unmute' : 'Mute'}
                </Button>
                <Button 
                  size="sm" 
                  onClick={toggleVideo}
                  variant={!participants[0].isVideoOn ? "destructive" : "secondary"}
                  className="flex-1"
                >
                  {!participants[0].isVideoOn ? <VideoOff className="w-4 h-4 mr-2" /> : <Video className="w-4 h-4 mr-2" />}
                  {!participants[0].isVideoOn ? 'Camera Off' : 'Camera On'}
                </Button>
              </div>
              
              {isHost && (
                <>
                  <Button size="sm" variant="ghost" className="w-full text-white hover:bg-white/20">
                    <Settings className="w-4 h-4 mr-2" />
                    Session Settings
                  </Button>
                  <Button 
                    onClick={startSession}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    Start Quiz Session
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Participants Grid */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
            <CardHeader>
              <CardTitle className="text-white">Participants ({participants.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {participants.map((participant) => (
                  <div key={participant.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white">
                          {participant.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="text-white font-medium truncate">{participant.name}</p>
                          {participant.isHost && <Crown className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
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
                    </div>
                    
                    {/* Mock video preview */}
                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                      {participant.isVideoOn ? (
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-lg">
                              {participant.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      ) : (
                        <VideoOff className="w-8 h-8 text-gray-500" />
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Empty slots */}
                {Array.from({ length: Math.min(6 - participants.length, 2) }).map((_, index) => (
                  <div key={`empty-${index}`} className="bg-white/5 rounded-lg p-4 border border-dashed border-white/20 flex items-center justify-center aspect-square">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-white/30 mx-auto mb-2" />
                      <p className="text-white/50 text-sm">Waiting...</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
