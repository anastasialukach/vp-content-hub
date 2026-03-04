"use client"
import { useState, useEffect, useCallback } from "react";

const DEMO_CONTENT = [
  {
    id: 1,
    title: "LPs Don't Fund Optimism — They Fund Endurance",
    body: "Why Most Emerging Managers Don't Persist — and What the Survivors Do Differently.\n\nThe emerging manager ecosystem has a persistence problem. Not a pipeline problem, not a talent problem — a persistence problem.\n\n82% of first-time funds don't raise a second vehicle. The standard narrative blames market conditions, LP fatigue, or fund size. But the data tells a different story.\n\nThe managers who survive share three traits:\n\n1. They treat LP relationships as 10-year compounding assets, not transactional closes\n2. They build operational infrastructure before they need it\n3. They understand that track record is necessary but insufficient — narrative coherence is what converts\n\nThe Gulf family offices I work with don't ask 'what's your IRR?' first. They ask 'why are you still here?' That question contains everything.",
    platform: "substack",
    tags: ["essay", "LP/GP", "emerging managers"],
    created_at: "2025-12-15T10:00:00Z",
    format: "text"
  },
  {
    id: 2,
    title: "Why Dubai Became the Fund Placement Capital of the Middle East",
    body: "Dubai's rise as a capital formation hub wasn't accidental — it was architectural.\n\nBetween 2019 and 2024, the number of single-family offices registered in DIFC grew by 200%+. Abu Dhabi's ADGM saw similar trajectories. But Dubai specifically became the placement hub — the city where GPs come to raise.\n\nWhy?\n\nThree structural advantages:\n\n• Zero income tax + 0% capital gains created a natural LP migration corridor from Europe and Asia\n• DIFC and ADGM built regulatory frameworks specifically designed for fund administration and placement\n• Geographic positioning — Dubai is a 4-hour flight from 3 billion people\n\nBut the real unlock was cultural. Dubai's business culture is relationship-first, execution-second. This maps perfectly onto how LP capital actually moves.\n\nThe data: 60% of Gulf family office allocations happen through warm introductions, not cold outreach. The placement agents who win here aren't the ones with the best decks — they're the ones who've had 50+ dinners with the right families.",
    platform: "substack",
    tags: ["essay", "Dubai", "MENA", "capital formation"],
    created_at: "2025-11-20T10:00:00Z",
    format: "text"
  },
  {
    id: 3,
    title: "The Interface Problem: Why AI Adoption Stalls at the Dashboard",
    body: "Enterprise AI has a UX crisis hiding in plain sight.\n\nCompanies spend $2-5M on AI infrastructure, train custom models, build data pipelines — then wrap it all in a dashboard that looks like every other SaaS tool from 2019.\n\nThe interface IS the adoption bottleneck.\n\nThree patterns I keep seeing:\n\n1. The 'AI Tab' Problem — AI features buried 3 clicks deep in existing software. Usage: <5% of licensed seats.\n2. The 'Dashboard of Dashboards' — aggregation layers that create more cognitive load than they eliminate\n3. The 'Chat-Only' Fallacy — assuming conversational UI solves everything, when most enterprise workflows need structured outputs\n\nThe companies getting this right (Dust, Linear, Notion) aren't adding AI — they're rebuilding workflows around AI as the primary interaction layer.",
    platform: "substack",
    tags: ["essay", "AI", "enterprise", "UX"],
    created_at: "2026-01-10T10:00:00Z",
    format: "text"
  },
  {
    id: 4,
    title: "The Slow Money: Why Family Offices Take 18 Months to Wire",
    body: "If you've never waited 18 months for a wire from a family office, you haven't really fundraised in the Gulf.\n\nHere's the timeline nobody talks about:\n\nMonth 1-3: Warm intro → first meeting → 'very interesting, send materials'\nMonth 4-6: Materials reviewed by internal team → second meeting → 'we like this'\nMonth 7-9: Internal committee review → questions → legal review begins\nMonth 10-12: Term negotiations → compliance checks → 'almost there'\nMonth 13-15: Final approval → wire instructions → 'next quarter'\nMonth 16-18: Wire lands.\n\nThis isn't dysfunction — it's design. Family offices preserve capital across generations by being deliberately slow. Speed is a venture capital value, not a wealth preservation value.\n\nThe emerging managers who understand this build 24-month runway into their fundraising timelines. The ones who don't run out of personal capital at month 12 and pivot to a job search.",
    platform: "substack",
    tags: ["essay", "family offices", "fundraising"],
    created_at: "2026-02-05T10:00:00Z",
    format: "text"
  },
  {
    id: 5,
    title: "Your network isn't your net worth — it's your fund's moat.",
    body: "Your network isn't your net worth — it's your fund's moat.\n\nAfter 1,000+ LP conversations across Gulf, Asia, and European family offices, here's what I know:\n\n→ 60% of allocations come through warm intros\n→ Cold outreach converts at <2%\n→ The best placement agents aren't selling — they're matchmaking\n\nThe emerging managers who raise aren't necessarily the smartest. They're the most connected.\n\nBuild the network before you need the capital.",
    platform: "twitter",
    tags: ["networking", "LP/GP", "fundraising"],
    created_at: "2026-02-28T14:00:00Z",
    format: "text"
  },
  {
    id: 6,
    title: "AI adoption speed by vertical — the data nobody shows you",
    body: "AI adoption speed by vertical — the data nobody shows you:\n\n🏦 Financial Services: 67% of firms using AI in production (McKinsey 2024)\n🏥 Healthcare: 42% — regulatory friction is real\n🏗️ Real Estate: 18% — still in 'exploring' phase\n📱 Consumer Tech: 89% — AI-native by default\n\nThe gap between 'we're exploring AI' and 'AI runs our core workflows' is 2-3 years.\n\nMost companies are in year 1.",
    platform: "twitter",
    tags: ["AI", "data", "enterprise"],
    created_at: "2026-03-01T10:00:00Z",
    format: "text"
  },
  {
    id: 7,
    title: "The real reason 82% of first-time funds don't raise Fund II",
    body: "The real reason 82% of first-time funds don't raise Fund II:\n\nIt's not returns. It's not deal flow. It's not even market timing.\n\nIt's operational infrastructure.\n\nThe GPs who survive build systems:\n• Investor relations as a product, not an afterthought\n• Portfolio support that's measurable\n• Reporting that tells a story, not just numbers\n\nLPs don't fund optimism. They fund endurance.\n\nThread 🧵",
    platform: "twitter",
    tags: ["emerging managers", "LP/GP", "venture"],
    created_at: "2026-02-20T16:00:00Z",
    format: "text"
  },
  {
    id: 8,
    title: "3 Lessons from $60M+ in Secondary Transactions",
    body: "3 lessons from executing $60M+ in secondary transactions across emerging markets:\n\n1. Trust is built in meetings, not in data rooms\nEvery major deal I've closed started with a dinner, not a deck. Gulf and Asian family offices allocate based on relationship depth. The data room confirms what they already decided.\n\n2. Speed wins — but not the way you think\nLPs don't commit fast because you rush them. They commit fast when your narrative is so clear they don't need 6 meetings to understand it. Clarity is speed.\n\n3. Your network is your fund's moat\n60% of allocations come through warm introductions. Cold outreach converts at <2%. The best placement isn't selling — it's matchmaking the right GP with the right LP thesis.\n\nBuilding Venture Protocol to codify these lessons for the next generation of emerging managers.\n\n#VentureCapital #FamilyOffices #EmergingManagers",
    platform: "linkedin",
    tags: ["secondaries", "lessons", "LP/GP"],
    created_at: "2026-02-25T09:00:00Z",
    format: "text"
  },
  {
    id: 9,
    title: "Why I left traditional VC placement to build Venture Protocol",
    body: "After 10 years in venture and alternative investments — spanning Gulf, Asia, and European family offices — I kept seeing the same pattern:\n\nThe best insights about LP/GP dynamics, capital formation, and fund strategy existed only in private conversations.\n\nFounders didn't have access. First-time GPs were learning by trial and error. Family office CIOs were making allocation decisions with incomplete pattern recognition.\n\nVenture Protocol is my attempt to change that.\n\nIt's a content, education, and podcast platform that brings institutional-grade thinking about venture capital, family offices, and capital formation to founders, operators, and investors.\n\nNot guru energy. Not motivational posts. Data-first, proper-noun, operator-level insights from someone who's been in the rooms where capital decisions happen.\n\nIf you're an emerging manager raising your first fund, a founder trying to understand how LPs think, or a family office CIO exploring direct investments — this is built for you.\n\nFollow along: @0xhappery\n\n#VentureProtocol #VentureCapital #FamilyOffices #EmergingManagers",
    platform: "linkedin",
    tags: ["venture protocol", "personal", "announcement"],
    created_at: "2026-01-15T09:00:00Z",
    format: "text"
  },
  {
    id: 10,
    title: "Dubai LP ecosystem infographic",
    body: "[HTML Infographic — Dubai as Fund Placement Capital]\n\nThis is a rich HTML article with interactive data visualization showing:\n• DIFC family office growth 2019-2024\n• LP allocation patterns by geography\n• Warm intro vs cold outreach conversion rates\n• Top 10 family office hubs globally\n\n→ View full article: GitHub Pages link",
    platform: "instagram",
    tags: ["infographic", "Dubai", "data"],
    created_at: "2026-02-10T12:00:00Z",
    format: "html_article"
  },
  {
    id: 11,
    title: "Alex Jotic — Blueprint Business Solutions",
    body: "Show Notes — Venture Protocol Podcast Episode with Alex Jotic\n\nGuest: Alex Jotic, Founder of Blueprint Business Solutions (Dubai)\n\nKey Topics:\n• Building a services business in Dubai's startup ecosystem\n• The operational gap between funded startups and execution\n• Why Dubai attracts operators, not just capital\n• Blueprint's approach to fractional COO services\n\nNotable Quotes:\n• On Dubai: 'The city selects for people who can execute under ambiguity'\n• On operators: 'Founders get the glory, operators build the machine'\n\nLinks:\n• Blueprint Business Solutions: [website]\n• Alex on LinkedIn: [profile]",
    platform: "show_notes",
    tags: ["podcast", "Dubai", "operations"],
    created_at: "2026-02-18T10:00:00Z",
    format: "text"
  },
  {
    id: 12,
    title: "Chris Haunschild — International M&A Tax",
    body: "Show Notes — Venture Protocol Podcast Episode with Chris Haunschild\n\nGuest: Chris Haunschild, International M&A Tax Attorney\n\nKey Topics:\n• Cross-border tax structuring for venture-backed companies\n• Why fund domicile matters more than founders think\n• MENA tax advantages vs reality — what actually works\n• Common mistakes emerging managers make with fund structure\n\nNotable Quotes:\n• On structuring: 'The tax tail shouldn't wag the investment dog — but it often does'\n• On MENA: 'Zero tax sounds great until you need treaty access'\n\nLinks:\n• Chris on LinkedIn: [profile]",
    platform: "show_notes",
    tags: ["podcast", "tax", "M&A", "fund structure"],
    created_at: "2026-02-22T10:00:00Z",
    format: "text"
  }
];

const PLATFORMS = [
  { key: "all", label: "All Content", icon: "+" },
  { key: "substack", label: "Essays", icon: "S" },
  { key: "twitter", label: "X / Twitter", icon: "X" },
  { key: "linkedin", label: "LinkedIn", icon: "in" },
  { key: "instagram", label: "Instagram", icon: "IG" },
  { key: "general", label: "General", icon: "G" },
];

const platformColors = {
  substack: { bg: "rgba(255, 107, 53, 0.08)", border: "rgba(255, 107, 53, 0.2)", text: "#c44d2b" },
  twitter: { bg: "rgba(29, 29, 29, 0.06)", border: "rgba(29, 29, 29, 0.15)", text: "#1a1a1a" },
  linkedin: { bg: "rgba(0, 119, 181, 0.07)", border: "rgba(0, 119, 181, 0.18)", text: "#005f8f" },
  instagram: { bg: "rgba(188, 42, 141, 0.06)", border: "rgba(188, 42, 141, 0.15)", text: "#9c1f75" },
  general: { bg: "rgba(107, 79, 187, 0.07)", border: "rgba(107, 79, 187, 0.18)", text: "#5a3d9e" },
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };
  return (
    <button onClick={handleCopy} style={{
      padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)",
      background: copied ? "rgba(52,168,83,0.1)" : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(8px)", cursor: "pointer", fontSize: "12px",
      fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "0.01em",
      color: copied ? "#2d8a4e" : "#555", transition: "all 0.2s ease",
      display: "flex", alignItems: "center", gap: "5px"
    }}>
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

function ContentCard({ item, onClick }) {
  const pc = platformColors[item.platform] || platformColors.substack;
  const preview = item.body?.substring(0, 180) + (item.body?.length > 180 ? "..." : "");
  const date = new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div onClick={onClick} style={{
      background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      borderRadius: "16px", border: "1px solid rgba(255,255,255,0.6)",
      padding: "24px", cursor: "pointer", transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)",
      position: "relative", overflow: "hidden"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)";
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
        <span style={{
          padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase",
          background: pc.bg, border: `1px solid ${pc.border}`, color: pc.text,
        }}>
          {item.platform === "general" ? "General" : item.platform === "twitter" ? "X" : item.platform}
        </span>
        <span style={{ fontSize: "12px", color: "#999", fontFamily: "'DM Sans', sans-serif" }}>{date}</span>
      </div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600,
        lineHeight: 1.3, color: "#1a1a1a", margin: "0 0 12px 0", letterSpacing: "-0.01em"
      }}>{item.title}</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", lineHeight: 1.65,
        color: "#666", margin: 0, letterSpacing: "0.005em"
      }}>{preview}</p>
      <div style={{ display: "flex", gap: "6px", marginTop: "14px", flexWrap: "wrap" }}>
        {item.tags?.slice(0, 3).map((tag, i) => (
          <span key={i} style={{
            padding: "2px 8px", borderRadius: "6px", fontSize: "11px",
            background: "rgba(0,0,0,0.03)", color: "#888",
            fontFamily: "'DM Sans', sans-serif"
          }}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ContentModal({ item, onClose }) {
  if (!item) return null;
  const pc = platformColors[item.platform] || platformColors.substack;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)", zIndex: 1000, display: "flex", justifyContent: "center",
      alignItems: "center", padding: "24px", animation: "fadeIn 0.2s ease"
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(40px) saturate(200%)",
        WebkitBackdropFilter: "blur(40px) saturate(200%)",
        borderRadius: "20px", border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        maxWidth: "680px", width: "100%", maxHeight: "85vh", overflow: "auto",
        padding: "36px", position: "relative"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "16px", right: "16px", width: "32px", height: "32px",
          borderRadius: "50%", border: "none", background: "rgba(0,0,0,0.05)",
          cursor: "pointer", fontSize: "16px", color: "#666", display: "flex",
          alignItems: "center", justifyContent: "center", transition: "background 0.15s"
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.1)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.05)"}>×</button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{
            padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase",
            background: pc.bg, border: `1px solid ${pc.border}`, color: pc.text,
          }}>
            {item.platform === "general" ? "General" : item.platform === "twitter" ? "X" : item.platform}
          </span>
          <span style={{ fontSize: "12px", color: "#999", fontFamily: "'DM Sans', sans-serif" }}>
            {new Date(item.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600,
          lineHeight: 1.25, color: "#1a1a1a", margin: "0 0 24px 0", letterSpacing: "-0.02em"
        }}>{item.title}</h2>

        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "14.5px", lineHeight: 1.75,
          color: "#444", whiteSpace: "pre-wrap", letterSpacing: "0.005em"
        }}>{item.body}</div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(0,0,0,0.06)"
        }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {item.tags?.map((tag, i) => (
              <span key={i} style={{
                padding: "3px 10px", borderRadius: "6px", fontSize: "11px",
                background: "rgba(0,0,0,0.04)", color: "#777",
                fontFamily: "'DM Sans', sans-serif"
              }}>#{tag}</span>
            ))}
          </div>
          <CopyButton text={item.body} />
        </div>
      </div>
    </div>
  );
}

function SettingsPanel({ config, setConfig, onConnect, connected, loading }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      borderRadius: "16px", border: "1px solid rgba(255,255,255,0.6)",
      padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
    }}>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600,
        color: "#1a1a1a", margin: "0 0 6px 0"
      }}>Connect to Supabase</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888",
        margin: "0 0 20px 0", lineHeight: 1.5
      }}>
        {connected
          ? "Connected — pulling live content from your content_queue table."
          : "Enter your Supabase credentials to load live content. Demo content is shown until connected."}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          value={config.url} placeholder="Supabase URL (https://xxxx.supabase.co)"
          onChange={e => setConfig(c => ({ ...c, url: e.target.value }))}
          style={{
            padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", outline: "none", transition: "border 0.2s",
            color: "#333"
          }}
          onFocus={e => e.target.style.borderColor = "rgba(0,0,0,0.25)"}
          onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.1)"}
        />
        <input
          value={config.key} placeholder="Anon Key"
          onChange={e => setConfig(c => ({ ...c, key: e.target.value }))}
          type="password"
          style={{
            padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px", outline: "none", transition: "border 0.2s",
            color: "#333"
          }}
          onFocus={e => e.target.style.borderColor = "rgba(0,0,0,0.25)"}
          onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.1)"}
        />
        <button onClick={onConnect} disabled={loading || !config.url || !config.key} style={{
          padding: "10px 20px", borderRadius: "10px", border: "none",
          background: connected ? "rgba(52,168,83,0.1)" : "#1a1a1a",
          color: connected ? "#2d8a4e" : "#fff",
          fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600,
          cursor: loading ? "wait" : "pointer", letterSpacing: "0.02em",
          transition: "all 0.2s", opacity: (!config.url || !config.key) ? 0.4 : 1
        }}>
          {loading ? "Connecting..." : connected ? "✓ Connected" : "Connect"}
        </button>
      </div>
    </div>
  );
}

export default function VPContentHub() {
  const [activeTab, setActiveTab] = useState("all");
  const [content, setContent] = useState(DEMO_CONTENT);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [supaConfig, setSupaConfig] = useState({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    key: process.env.NEXT_PUBLIC_SUPABASE_KEY || "",
  });
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDemo, setIsDemo] = useState(true);

  const fetchFromSupabase = useCallback(async (config) => {
    const c = config || supaConfig;
    if (!c.url || !c.key) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${c.url}/rest/v1/content_queue?select=*&order=created_at.desc`,
        {
          headers: {
            apikey: c.key,
            Authorization: `Bearer ${c.key}`,
            "Content-Type": "application/json"
          }
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.length > 0) {
        setContent(data);
        setConnected(true);
        setIsDemo(false);
      } else {
        setContent(DEMO_CONTENT);
        setConnected(true);
        setIsDemo(true);
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
    }
    setLoading(false);
  }, [supaConfig]);

  // Auto-connect on mount if env vars are set
  useEffect(() => {
    if (supaConfig.url && supaConfig.key) {
      fetchFromSupabase(supaConfig);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered = content.filter(item => {
    const matchesPlatform = activeTab === "all" || item.platform === activeTab;
    const matchesSearch = !searchQuery ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.body?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPlatform && matchesSearch;
  });

  const stats = {
    total: content.length,
    essays: content.filter(c => c.platform === "substack").length,
    social: content.filter(c => ["twitter", "linkedin", "instagram"].includes(c.platform)).length,
    general: content.filter(c => c.platform === "general").length,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f3ef 0%, #ebe7e0 25%, #f0ece5 50%, #e8e4dc 75%, #f2efe8 100%)",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }
      `}</style>

      {/* Subtle grain texture overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        opacity: 0.5
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <header style={{ marginBottom: "40px", animation: "slideUp 0.5s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{
                display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px"
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontWeight: 600,
                  letterSpacing: "0.2em", textTransform: "uppercase", color: "#999"
                }}>Venture Protocol</span>
                <span style={{
                  fontSize: "9px", padding: "2px 8px", borderRadius: "4px",
                  background: isDemo ? "rgba(255,152,0,0.1)" : "rgba(52,168,83,0.1)",
                  color: isDemo ? "#c47d15" : "#2d8a4e", fontWeight: 600,
                  letterSpacing: "0.06em", textTransform: "uppercase"
                }}>{isDemo ? "Demo" : "Live"}</span>
              </div>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "42px",
                fontWeight: 300, color: "#1a1a1a", margin: 0, letterSpacing: "-0.03em",
                lineHeight: 1.1
              }}>Content Hub</h1>
            </div>
            <button onClick={() => setShowSettings(!showSettings)} style={{
              padding: "8px 16px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
              fontWeight: 500, color: "#555", transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: "6px"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.8)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.5)"}>
              {connected ? "⚡" : "◎"} {showSettings ? "Hide" : "Settings"}
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "24px", marginTop: "20px", flexWrap: "wrap"
          }}>
            {[
              { label: "Total Items", value: stats.total },
              { label: "Essays", value: stats.essays },
              { label: "Social Posts", value: stats.social },
              { label: "General", value: stats.general },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "26px",
                  fontWeight: 600, color: "#1a1a1a"
                }}>{s.value}</span>
                <span style={{ fontSize: "12px", color: "#999", letterSpacing: "0.02em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Settings Panel */}
        {showSettings && (
          <div style={{ marginBottom: "28px", animation: "slideUp 0.3s ease" }}>
            <SettingsPanel
              config={supaConfig}
              setConfig={setSupaConfig}
              onConnect={fetchFromSupabase}
              connected={connected}
              loading={loading}
            />
          </div>
        )}

        {/* Search */}
        <div style={{ marginBottom: "20px" }}>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search content..."
            style={{
              width: "100%", padding: "12px 18px", borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(255,255,255,0.45)", backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
              outline: "none", color: "#333", transition: "all 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.02)"
            }}
            onFocus={e => {
              e.target.style.borderColor = "rgba(0,0,0,0.15)";
              e.target.style.background = "rgba(255,255,255,0.7)";
            }}
            onBlur={e => {
              e.target.style.borderColor = "rgba(0,0,0,0.06)";
              e.target.style.background = "rgba(255,255,255,0.45)";
            }}
          />
        </div>

        {/* Platform Tabs */}
        <div style={{
          display: "flex", gap: "4px", marginBottom: "28px", flexWrap: "wrap",
          padding: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "14px",
          backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.4)"
        }}>
          {PLATFORMS.map(p => (
            <button key={p.key} onClick={() => setActiveTab(p.key)} style={{
              padding: "8px 16px", borderRadius: "10px", border: "none",
              background: activeTab === p.key ? "rgba(255,255,255,0.8)" : "transparent",
              boxShadow: activeTab === p.key ? "0 1px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px",
              fontWeight: activeTab === p.key ? 600 : 400,
              color: activeTab === p.key ? "#1a1a1a" : "#888",
              transition: "all 0.2s", display: "flex", alignItems: "center", gap: "6px",
              letterSpacing: "0.01em"
            }}>
              <span style={{ fontSize: "11px" }}>{p.icon}</span>
              {p.label}
              <span style={{
                fontSize: "10px", padding: "1px 6px", borderRadius: "6px",
                background: activeTab === p.key ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.03)",
                color: "#999"
              }}>
                {p.key === "all" ? content.length : content.filter(c => c.platform === p.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "16px"
        }}>
          {filtered.map((item, i) => (
            <div key={item.id || i} style={{ animation: `slideUp ${0.3 + i * 0.05}s ease` }}>
              <ContentCard item={item} onClick={() => setSelectedItem(item)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: "center", padding: "60px 20px",
            fontFamily: "'Cormorant Garamond', serif", fontSize: "20px",
            color: "#aaa", fontStyle: "italic"
          }}>
            No content found{searchQuery ? ` for "${searchQuery}"` : " in this category"}.
          </div>
        )}

        {/* Footer */}
        <footer style={{
          marginTop: "60px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,0.05)",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "13px",
            color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase"
          }}>Venture Protocol © 2026</span>
          <span style={{
            fontSize: "11px", color: "#ccc", fontFamily: "'DM Sans', sans-serif"
          }}>Phase 1 — Content Hub</span>
        </footer>
      </div>

      {/* Modal */}
      <ContentModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
