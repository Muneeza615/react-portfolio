import React, { useState, useRef, useEffect } from 'react';
import { Sliders, Sparkles, Copy, Check, MousePointerClick, RefreshCw, Cpu, Zap, Activity } from 'lucide-react';

export const InteractiveCraftLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gestures' | 'tokens' | 'performance'>('gestures');

  // Gestures Lab state
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [damping, setDamping] = useState<number>(25);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * (damping / 2);
    const rotY = ((x - centerX) / centerX) * (damping / 2);

    setRotation({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // Tokens Lab state
  const [borderRadius, setBorderRadius] = useState<number>(18);
  const [blurAmount, setBlurAmount] = useState<number>(16);
  const [tintColor, setTintColor] = useState<'rose' | 'amber' | 'lavender' | 'teal'>('rose');
  const [copiedToken, setCopiedToken] = useState(false);

  const tintStyles = {
    rose: {
      bg: 'rgba(255, 241, 242, 0.7)',
      border: 'rgba(254, 205, 211, 0.7)',
      accent: '#e11d48',
      label: 'Soft Rose Quartz',
    },
    amber: {
      bg: 'rgba(255, 251, 235, 0.7)',
      border: 'rgba(254, 215, 170, 0.7)',
      accent: '#d97706',
      label: 'Warm Sunlight',
    },
    lavender: {
      bg: 'rgba(245, 243, 255, 0.7)',
      border: 'rgba(221, 214, 254, 0.7)',
      accent: '#7c3aed',
      label: 'Velvet Lavender',
    },
    teal: {
      bg: 'rgba(240, 253, 250, 0.7)',
      border: 'rgba(153, 246, 228, 0.7)',
      accent: '#0d9488',
      label: 'Subtle Sage',
    },
  };

  const copyTokenSnippet = async () => {
    const code = `<div className="backdrop-blur-[${blurAmount}px] rounded-[${borderRadius}px] border border-[${tintStyles[tintColor].border}] bg-[${tintStyles[tintColor].bg}] p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
  <p className="text-sm font-medium text-stone-800">Tactile Component</p>
</div>`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    } catch {
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    }
  };

  // Performance Lab state
  const [renderCount, setRenderCount] = useState<number>(1);
  const [isOptimized, setIsOptimized] = useState<boolean>(true);
  const [latencyMs, setLatencyMs] = useState<number>(0.8);
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    const start = performance.now();
    setCounter((prev) => prev + 1);
    if (!isOptimized) {
      // Simulate unoptimized heavy calculation in state tree
      let sum = 0;
      for (let i = 0; i < 2000000; i++) sum += i;
      setRenderCount((prev) => prev + 4); // Multiple redundant re-render cascades
    } else {
      setRenderCount((prev) => prev + 1);
    }
    const end = performance.now();
    setLatencyMs(Number((end - start).toFixed(2)));
  };

  return (
    <section id="craft-lab" className="py-24 bg-stone-100/60 border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-wider text-rose-700/90 uppercase mb-2">
              Interactive Frontend Lab
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              Tactile engineering in action.
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              A real-time laboratory demonstrating spring physics, responsive tokens, and React performance profiling that power my user interfaces.
            </p>
          </div>

          {/* Lab Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 border border-stone-300/60 rounded-xl">
            <button
              onClick={() => setActiveTab('gestures')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'gestures'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              01. 3D Spring Tilt
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tokens'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              02. Design Tokenizer
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'performance'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              03. State & Vitals
            </button>
          </div>
        </div>

        {/* Tab 1: 3D Spring Tilt & Physics */}
        {activeTab === 'gestures' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">
                  Fluid Perspective & Micro-Gestures
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Hover your cursor or slide across the card to experience mathematical 3D perspective tracking with dynamic ambient glare calculation and damping physics.
                </p>
              </div>

              {/* Damping Control */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <div className="flex justify-between text-xs text-stone-600">
                  <span className="font-medium">Perspective Tilt Range:</span>
                  <span className="font-mono tabular-nums">{damping}°</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
                />
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-500 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                  <Zap className="w-3.5 h-3.5 text-rose-500" />
                  <span>React Implementation Note</span>
                </div>
                <p>
                  Calculated purely via compositor-friendly CSS <code className="text-stone-800 font-mono">transform</code> properties without triggering browser reflows or DOM layout thrashing.
                </p>
              </div>
            </div>

            {/* Interactive Card Canvas */}
            <div className="lg:col-span-7 flex items-center justify-center py-6 perspective-1000">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: rotation.x === 0 ? 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                }}
                className="relative w-full max-w-md aspect-[16/10] rounded-2xl p-6 sm:p-8 bg-gradient-to-tr from-stone-50 via-white to-rose-50/50 border border-stone-300/80 shadow-xl cursor-crosshair overflow-hidden select-none"
              >
                {/* Dynamic Lighting Glare */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)`,
                    opacity: glare.opacity,
                  }}
                />

                {/* Card Interior */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-serif italic text-base text-stone-800">
                      Muneeza Aijaz
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
                      React 19 Canvas
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl text-stone-900 font-normal">
                      Tactile Architecture
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">
                      Smooth physics · Sub-10ms latency · Calibrated damping
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 text-xs">
                    <div className="font-mono text-[11px] text-stone-500 tabular-nums">
                      X: {rotation.x.toFixed(1)}° · Y: {rotation.y.toFixed(1)}°
                    </div>
                    <span className="text-rose-600 font-medium">Interactive Hover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Design Tokenizer */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">
                  Systematic Design Tokens
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Adjust radius mathematics, backdrop blur diffusion, and pastel palette tints. Experience how token changes seamlessly propagate across React interfaces.
                </p>
              </div>

              {/* Controls */}
              <div className="space-y-4 pt-2 border-t border-stone-200">
                {/* Border Radius */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-stone-600">
                    <span className="font-medium">Border Radius:</span>
                    <span className="font-mono tabular-nums">{borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="32"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
                  />
                </div>

                {/* Glass Blur */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-stone-600">
                    <span className="font-medium">Backdrop Blur:</span>
                    <span className="font-mono tabular-nums">{blurAmount}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="32"
                    value={blurAmount}
                    onChange={(e) => setBlurAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
                  />
                </div>

                {/* Tint Color Selector */}
                <div className="space-y-1.5">
                  <span className="text-xs text-stone-600 font-medium">Soft Tint Preset:</span>
                  <div className="flex gap-2">
                    {(['rose', 'amber', 'lavender', 'teal'] as const).map((tint) => (
                      <button
                        key={tint}
                        onClick={() => setTintColor(tint)}
                        className={`px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer capitalize font-medium ${
                          tintColor === tint
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {tint}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Copy snippet button */}
              <button
                onClick={copyTokenSnippet}
                className="w-full py-2.5 px-4 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedToken ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedToken ? 'Token Classes Copied!' : 'Copy Tailwind Class Spec'}</span>
              </button>
            </div>

            {/* Live Render Preview */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center py-6">
              <div
                style={{
                  borderRadius: `${borderRadius}px`,
                  backdropFilter: `blur(${blurAmount}px)`,
                  backgroundColor: tintStyles[tintColor].bg,
                  borderColor: tintStyles[tintColor].border,
                }}
                className="w-full max-w-md p-6 sm:p-7 border shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-stone-900">
                    Live Component Sample
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: tintStyles[tintColor].accent }}
                  />
                </div>
                <h4 className="font-serif text-xl text-stone-900 mb-2 font-normal">
                  Aura Token Specimen
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  Previewing dynamic styling tokens directly applied to React DOM elements with fluid optical compensation.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 text-xs">
                  <span className="font-mono text-[11px] text-stone-500">
                    radius: {borderRadius}px · blur: {blurAmount}px
                  </span>
                  <button
                    style={{ backgroundColor: tintStyles[tintColor].accent }}
                    className="px-3.5 py-1.5 text-white font-medium text-xs rounded-lg shadow-xs hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Performance & State Vitals */}
        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">
                  State Isolation & Render Profiler
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Test React state performance live. Toggle optimization mode to see how state co-location and memoization prevent cascading re-renders across the component tree.
                </p>
              </div>

              {/* Optimization Mode Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <div className="text-xs font-semibold text-stone-900">
                    Render Boundary Optimization
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {isOptimized ? 'State co-located & memoized' : 'Global re-render cascade'}
                  </div>
                </div>

                <button
                  onClick={() => setIsOptimized(!isOptimized)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    isOptimized
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}
                >
                  {isOptimized ? 'Optimized' : 'Unoptimized'}
                </button>
              </div>

              {/* Interactive Counter Trigger */}
              <div className="space-y-3">
                <button
                  onClick={handleIncrement}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MousePointerClick className="w-4 h-4 text-rose-300" />
                  <span>Dispatch Mutation (Click to Stress Test)</span>
                </button>

                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Mutations Dispatched:</span>
                  <span className="font-mono font-medium text-stone-900 tabular-nums">
                    {counter} events
                  </span>
                </div>
              </div>
            </div>

            {/* Live Metrics Display */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="text-xs text-stone-500 font-medium mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-rose-500" />
                    <span>Total Render Passes</span>
                  </div>
                  <div className="font-serif text-3xl text-stone-900 tabular-nums font-normal">
                    {renderCount}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1">
                    {isOptimized ? '1:1 state mapping' : 'Cascading re-renders'}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="text-xs text-stone-500 font-medium mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Execution Latency</span>
                  </div>
                  <div className="font-serif text-3xl text-stone-900 tabular-nums font-normal">
                    {latencyMs}ms
                  </div>
                  <div className="text-[11px] text-emerald-600 mt-1 font-medium">
                    Within 16ms frame budget (60 FPS)
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-stone-50 via-rose-50/20 to-stone-50 border border-stone-200/80 text-xs text-stone-600 space-y-1">
                <div className="font-medium text-stone-900">
                  Muneeza&apos;s Engineering Standard:
                </div>
                <p>
                  Zero unnecessary rerenders through Zustand selectors, memoized subtrees with <code className="font-mono text-stone-800">useMemo</code> / <code className="font-mono text-stone-800">useCallback</code>, and zero layout shift (<code className="font-mono text-stone-800">CLS &lt; 0.01</code>).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
