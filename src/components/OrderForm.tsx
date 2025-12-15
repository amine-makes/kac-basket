import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onSubmit: () => void;
}

const OrderForm = ({ isOpen, onClose, total, onSubmit }: OrderFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed Successfully!",
      description: "We'll contact you shortly to confirm your order.",
    });
    onSubmit();
    onClose();
    setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Form Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
        <div className="bg-card border border-border rounded-xl w-full max-w-lg pointer-events-auto animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-2xl">Place Order</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <Textarea
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="notes">Order Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="mt-1"
                placeholder="Any special requests..."
              />
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Order Total</span>
                <span className="font-display text-2xl text-primary">${total.toFixed(2)}</span>
              </div>
              <Button type="submit" className="w-full btn-primary rounded-lg">
                Confirm Order
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
