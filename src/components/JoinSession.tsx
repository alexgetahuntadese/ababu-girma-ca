
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Users } from "lucide-react";
import { useSyncContext } from "@/contexts/SyncContext";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const JoinSession = () => {
  const [sessionId, setSessionId] = useState('');
  const [userName, setUserName] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const { joinSession } = useSyncContext();
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!sessionId.trim() || !userName.trim()) {
      toast.error('Please enter both session ID and your name');
      return;
    }

    setIsJoining(true);
    
    try {
      // Check if session exists
      const existingSession = localStorage.getItem(`session_${sessionId}`);
      if (!existingSession) {
        toast.error('Session not found. Please check the session ID.');
        setIsJoining(false);
        return;
      }

      const sessionData = JSON.parse(existingSession);
      if (sessionData.participants.length >= 25) {
        toast.error('Session is full (25 participants maximum)');
        setIsJoining(false);
        return;
      }

      joinSession(sessionId, userName, false);
      toast.success('Successfully joined the session!');
      navigate(`/lobby?session=${sessionId}`);
    } catch (error) {
      toast.error('Failed to join session. Please try again.');
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Join Session
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-white/70">Your Name</Label>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <div>
          <Label className="text-white/70">Session ID</Label>
          <Input
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value.toUpperCase())}
            placeholder="Enter session ID"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <Button
          onClick={handleJoin}
          disabled={isJoining || !sessionId.trim() || !userName.trim()}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
        >
          {isJoining ? 'Joining...' : 'Join Session'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default JoinSession;
