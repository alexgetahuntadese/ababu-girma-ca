import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Participant {
  id: string;
  name: string;
  isHost: boolean;
  isMuted: boolean;
  isVideoOn: boolean;
  joinedAt: number;
  avatar?: string;
}

export interface SyncContextType {
  sessionId: string;
  participants: Participant[];
  currentUser: Participant | null;
  isConnected: boolean;
  joinSession: (sessionId: string, userName: string, isHost?: boolean) => void;
  leaveSession: () => void;
  updateParticipant: (id: string, updates: Partial<Participant>) => void;
  toggleMute: () => void;
  toggleVideo: () => void;
}

const SyncContext = createContext<SyncContextType | undefined>(undefined);

export const useSyncContext = () => {
  const context = useContext(SyncContext);
  if (!context) {
    throw new Error('useSyncContext must be used within a SyncProvider');
  }
  return context;
};

interface SyncProviderProps {
  children: ReactNode;
}

export const SyncProvider: React.FC<SyncProviderProps> = ({ children }) => {
  const [sessionId, setSessionId] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [currentUser, setCurrentUser] = useState<Participant | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Simulate real-time sync with localStorage and polling
  useEffect(() => {
    if (!sessionId) return;

    const syncInterval = setInterval(() => {
      const storedSession = localStorage.getItem(`session_${sessionId}`);
      if (storedSession) {
        const sessionData = JSON.parse(storedSession);
        setParticipants(sessionData.participants || []);
      }
    }, 1000);

    return () => clearInterval(syncInterval);
  }, [sessionId]);

  const joinSession = (newSessionId: string, userName: string, isHost = false) => {
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const newUser: Participant = {
      id: userId,
      name: userName,
      isHost,
      isMuted: false,
      isVideoOn: true,
      joinedAt: Date.now(),
      avatar: userName.split(' ').map(n => n[0]).join('').toUpperCase()
    };

    // Get existing session data or create new session
    const existingSession = localStorage.getItem(`session_${newSessionId}`);
    let sessionData = { participants: [] };
    
    if (existingSession) {
      sessionData = JSON.parse(existingSession);
    } else if (isHost) {
      // If this is a host creating a new session, initialize it
      sessionData = { participants: [] };
    }

    // Add new participant
    const updatedParticipants = [...sessionData.participants, newUser];
    
    // Save to localStorage (simulating backend sync)
    localStorage.setItem(`session_${newSessionId}`, JSON.stringify({
      participants: updatedParticipants,
      lastUpdated: Date.now(),
      createdAt: Date.now(),
      hostId: isHost ? userId : sessionData.hostId || null
    }));

    setSessionId(newSessionId);
    setCurrentUser(newUser);
    setParticipants(updatedParticipants);
    setIsConnected(true);
  };

  const leaveSession = () => {
    if (!currentUser || !sessionId) return;

    // Remove current user from session
    const existingSession = localStorage.getItem(`session_${sessionId}`);
    if (existingSession) {
      const sessionData = JSON.parse(existingSession);
      const updatedParticipants = sessionData.participants.filter(
        (p: Participant) => p.id !== currentUser.id
      );
      
      localStorage.setItem(`session_${sessionId}`, JSON.stringify({
        ...sessionData,
        participants: updatedParticipants,
        lastUpdated: Date.now()
      }));
    }

    setSessionId('');
    setCurrentUser(null);
    setParticipants([]);
    setIsConnected(false);
  };

  const updateParticipant = (id: string, updates: Partial<Participant>) => {
    if (!sessionId) return;

    const updatedParticipants = participants.map(p => 
      p.id === id ? { ...p, ...updates } : p
    );

    setParticipants(updatedParticipants);

    // Update localStorage
    const existingSession = localStorage.getItem(`session_${sessionId}`);
    if (existingSession) {
      const sessionData = JSON.parse(existingSession);
      localStorage.setItem(`session_${sessionId}`, JSON.stringify({
        ...sessionData,
        participants: updatedParticipants,
        lastUpdated: Date.now()
      }));
    }

    // Update current user if it's them
    if (currentUser?.id === id) {
      setCurrentUser({ ...currentUser, ...updates });
    }
  };

  const toggleMute = () => {
    if (!currentUser) return;
    updateParticipant(currentUser.id, { isMuted: !currentUser.isMuted });
  };

  const toggleVideo = () => {
    if (!currentUser) return;
    updateParticipant(currentUser.id, { isVideoOn: !currentUser.isVideoOn });
  };

  return (
    <SyncContext.Provider value={{
      sessionId,
      participants,
      currentUser,
      isConnected,
      joinSession,
      leaveSession,
      updateParticipant,
      toggleMute,
      toggleVideo
    }}>
      {children}
    </SyncContext.Provider>
  );
};
