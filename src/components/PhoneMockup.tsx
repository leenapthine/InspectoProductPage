import { Check, Camera, Mic } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
      {/* Phone frame */}
      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="h-6 bg-white flex items-center justify-between px-6 text-xs text-black">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 border border-black rounded-sm">
              <div className="w-3 h-1 bg-black rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>
        
        {/* App content */}
        <div className="p-4 h-full bg-white">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Home Inspection</h3>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>123 Oak Street</div>
          </div>
          
          {/* Checklist */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2 flex items-center justify-center" style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--primary)' }}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Exterior</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2 flex items-center justify-center" style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--primary)' }}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Roof</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2" style={{ borderColor: 'var(--border)' }}>
              </div>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Electrical</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2" style={{ borderColor: 'var(--border)' }}>
              </div>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Basement</span>
            </div>
          </div>
          
          {/* Photo with annotation */}
          <div className="mb-4">
            <div className="relative w-full h-24 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
              {/* Annotation dot */}
              <div 
                className="absolute top-2 right-2 w-3 h-3 rounded-full border-2 border-white" 
                style={{ backgroundColor: 'var(--accent)' }}
              ></div>
              {/* Severity tag */}
              <div className="absolute bottom-2 left-2">
                <span 
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: '#FFEDE5', 
                    color: '#B9481E' 
                  }}
                >
                  Minor
                </span>
              </div>
            </div>
          </div>
          
          {/* Voice note chip */}
          <div className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#E6F2FF' }}>
            <Mic className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
            <span className="text-sm" style={{ color: 'var(--primary)' }}>
              "Outlet in living room warm to touch—retest."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}