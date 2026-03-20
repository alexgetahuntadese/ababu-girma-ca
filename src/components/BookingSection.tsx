import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const roomTypes = [
  { value: "standard", label: "Standard Room" },
  { value: "deluxe", label: "Deluxe Room" },
  { value: "suite", label: "Executive Suite" },
  { value: "presidential", label: "Presidential Suite" },
];

const guestOptions = ["1", "2", "3", "4", "5+"];

const BookingSection = () => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomType, setRoomType] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !roomType || !guests || !name.trim() || !phone.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (checkOut <= checkIn) {
      toast({ title: "Invalid dates", description: "Check-out must be after check-in.", variant: "destructive" });
      return;
    }
    if (name.trim().length > 100) {
      toast({ title: "Name too long", description: "Please use fewer than 100 characters.", variant: "destructive" });
      return;
    }

    toast({
      title: "Booking Request Sent!",
      description: `Thank you ${name.trim()}! We'll confirm your ${roomType} room for ${format(checkIn, "MMM d")} – ${format(checkOut, "MMM d")} shortly.`,
    });

    setCheckIn(undefined);
    setCheckOut(undefined);
    setRoomType("");
    setGuests("");
    setName("");
    setPhone("");
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section id="booking" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="text-accent text-sm font-medium text-center mb-2">Reservations</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Book Your Stay
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          Select your dates and room preference. We'll get back to you with a confirmation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border shadow-card space-y-6"
        >
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Full Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={100}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Phone Number</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 9XX XXX XXX"
                maxLength={20}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Check-in</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-secondary border-border",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < today}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Check-out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-secondary border-border",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || today)}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Room & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Room Type</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Select room" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground text-sm">Guests</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  {guestOptions.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g} {g === "1" ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 gap-2 py-6 text-base shadow-glow"
          >
            <Send className="w-5 h-5" />
            Request Booking
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
