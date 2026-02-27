
import React from 'react';
import { Button } from './Button';
import { Send, Mail } from 'lucide-react';

export const ReferralForm: React.FC = () => {
  const formSubmitUrl = "https://formsubmit.co/wade521@gmail.com";

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 text-slate-900">
          <Send className="w-8 h-8 text-[#a81255]" />
          Enter Referral Details
        </h2>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
          <Mail className="w-3 h-3" />
          Emailed to Wade
        </div>
      </div>
      
      <form 
        action={formSubmitUrl} 
        method="POST" 
        className="space-y-6"
      >
        {/* FormSubmit Configuration Fields */}
        <input type="hidden" name="_subject" value="New Referral Submission" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Full Name</label>
            <input 
              name="Your Full Name"
              required 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
              placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
            <input 
              name="Your Email"
              required 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
              placeholder="john@example.com" 
            />
          </div>
        </div>

        <div className="h-px bg-slate-100 my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Referral Contact Name</label>
            <input 
              name="Referral Contact Name"
              required 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
              placeholder="Who are you referring?" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Referral Company</label>
            <input 
              name="Referral Company"
              required 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
              placeholder="Their Company Name" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Referral Email or Phone (Optional)</label>
          <input 
            name="Referral Contact Info"
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
            placeholder="How can Wade contact them?" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Notes & Context</label>
          <textarea 
            name="Notes"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a81255] focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
            rows={3} 
            placeholder="How do you know them? What are they looking for?" 
          />
        </div>

        <Button fullWidth className="text-lg py-4" type="submit">
          Submit Referral Details
        </Button>
        <p className="text-center text-xs text-slate-400">
          By clicking submit, your referral information will be emailed directly to Wade Hirsch.
        </p>
      </form>
    </div>
  );
};
