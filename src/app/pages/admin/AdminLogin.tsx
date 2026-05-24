import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login - in a real app, use Supabase Auth
    setTimeout(() => {
      if (email === 'admin@drip.com' && password === 'admin123') {
        localStorage.setItem('drip_admin_token', 'mock-token');
        toast.success('Welcome back, Admin');
        navigate('/admin');
      } else {
        toast.error('Invalid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent border border-accent/20">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-5xl font-black text-foreground mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ADMIN PORTAL</h1>
          <p className="text-foreground/40 text-xs font-bold tracking-widest uppercase">Restricted Access Only</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card p-10 border border-border space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-border text-foreground px-12 py-4 text-sm focus:outline-none focus:border-[#E8002D] transition-colors"
                placeholder="admin@dripcommunity.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-border text-foreground px-12 py-4 text-sm focus:outline-none focus:border-[#E8002D] transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-white py-5 font-black tracking-widest text-sm hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100 mt-4 shadow-[0_0_20px_rgba(232,0,45,0.2)]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {isLoading ? 'VERIFYING...' : 'LOGIN TO DASHBOARD'}
          </button>

          <button
            type="button"
            onClick={() => {
              setEmail('admin@drip.com');
              setPassword('admin123');
              setTimeout(() => {
                localStorage.setItem('drip_admin_token', 'mock-token');
                toast.success('Quick Login Successful');
                navigate('/admin');
              }, 500);
            }}
            className="w-full border border-border text-foreground/40 py-4 text-[10px] font-black tracking-widest uppercase hover:text-foreground hover:border-foreground/30 transition-all"
          >
            Quick Login (Demo)
          </button>
        </form>

        <p className="text-center mt-8 text-[10px] text-foreground/20 font-bold tracking-widest uppercase">
          Unauthorized access attempts are logged
        </p>
      </motion.div>
    </div>
  );
}
