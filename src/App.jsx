export default function App() {
  const skills = [
    "Roblox Lua / Luau",
    "Data persistence (ProfileService / DataStore2)",
    "TeleportService / reserved servers",
    "UI programming (ScreenGui, Roact optional)",
    "Gamepasses / Developer Products",
    "Permissions and admin tools",
    "Optimisation and clean code",
    "Version control and teamwork",
  ];

  const services = [
    {
      name: "Systems scripting",
      items: [
        "Rebirths and progression",
        "Leaderstats and stats UI",
        "Shops and inventories",
        "Codes and boosters",
        "Quests and achievements",
      ],
    },
    {
      name: "Back end",
      items: [
        "ProfileService / DataStore2",
        "Party servers and matchmaking",
        "Rate limits and anti-exploit",
        "Telemetry and debug logs",
      ],
    },
    {
      name: "Game UX",
      items: [
        "Menus and settings",
        "Notifications and toasts",
        "Onboarding and tutorials",
        "Responsive UI layouts",
      ],
    },
  ];

  const contactLinks = [
    { label: "Roblox Profile", href: "https://www.roblox.com/users/1989236672/profile" },
    { label: "Talent Hub", href: "https://create.roblox.com/talent/creators/1989236672" },
    { label: "Discord", href: "https://discord.gg/2NGhsURjad" },
    { label: "Email", href: "mailto:sirdwalker2@gmail.com" },
  ];

   const bots = [
    {
      title: "Walker's Helper",
      desc: "Admin toolkit with slash commands, temp bans, logging, 8ball, roll, userinfo, serverinfo, help menus, and uptime keep-alive. Designed for Roblox military groups and gaming servers.",
      stack: ["Python", "discord.py", "JSON storage", "Replit uptime"],
      links: [
        { label: "Join Server", href: "https://discord.gg/2NGhsURjad" }
      ],
    },
  ];

  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-10 backdrop-blur bg-gray-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">SirDWalker</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="opacity-80 hover:opacity-100">Work</a>
            <a href="#skills" className="opacity-80 hover:opacity-100">Skills</a>
            <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
            <a href="#bots" className="opacity-80 hover:opacity-100">Bots</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Roblox scripter and systems designer.
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              I build reliable game systems in Lua: data saving, party servers, permissions, rebirths, and polished UI logic. I can improve existing code or ship complete features from scratch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-2xl bg-white text-gray-900 font-medium">Hire me</a>
              <a href="#work" className="px-4 py-2 rounded-2xl border border-white/20">See work</a>
            </div>
            <p className="mt-3 text-sm opacity-80">Based in the UK. Available part time, commissions welcome.</p>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
            <div className="grid grid-cols-3 gap-3">
              {["Rebirths","Party servers","Housing saves","Permissions","Gamepasses","UI logic","Anti-exploit","Quests","Leaderboards"].map((t,i)=> (
                <div key={i} className="rounded-xl border border-white/10 p-3 text-center text-xs opacity-90">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Featured systems</h3>
          <p className="mt-2 text-gray-300">
            Showcase coming soon. In the meantime, reach out and I can share live demos privately.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-white/10 p-5 bg-gray-900">
              <h4 className="text-lg font-semibold">New demos in progress</h4>
              <p className="mt-2 text-sm opacity-90">
                Rebirth system, party servers, housing saves. Request access if you want an early preview.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Skills</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((k, i) => (
              <div key={i} className="rounded-xl border border-white/10 p-4 bg-gray-900 text-sm opacity-95">{k}</div>
            ))}
          </div>
        </section>

        <section id="services" className="py-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Services</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 p-5 bg-gray-900">
                <h4 className="text-lg font-semibold">{svc.name}</h4>
                <ul className="mt-3 space-y-2 text-sm opacity-95 list-disc pl-5">
                  {svc.items.map((it, i) => (<li key={i}>{it}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

     {/* Discord Bots */}
     <section id="bots" className="py-12">
       <h3 className="text-2xl md:text-3xl font-semibold">Discord Bots</h3>
       <p className="mt-2 text-gray-300 text-sm">
         Custom bots built for Roblox communities — moderation, payouts, utilities, and automation.
       </p>

       <div className="mt-6 grid md:grid-cols-3 gap-6">
         {bots.map((b, idx) => (
           <article key={idx} className="rounded-2xl border border-white/10 p-5 bg-gray-900">
             <h4 className="text-lg font-semibold">{b.title}</h4>
             <p className="mt-2 text-sm opacity-90">{b.desc}</p>

             <div className="mt-4 flex flex-wrap gap-2">
               {b.stack.map((tag, i) => (
                 <span key={i} className="text-xs px-2 py-1 rounded-full border border-white/10 opacity-80">
                   {tag}
                 </span>
               ))}
             </div>

             <div className="mt-4 flex flex-wrap gap-3">
               {b.links.map((l, i) => (
                 <a key={i} href={l.href} target="_blank" className="text-sm underline opacity-90 hover:opacity-100">
                   {l.label}
                 </a>
               ))}
             </div>
           </article>
         ))}
       </div>
     </section>

        
        <section className="py-12">
          <h3 className="text-2xl md:text-3xl font-semibold">How I work</h3>
          <ol className="mt-6 grid md:grid-cols-4 gap-6 text-sm">
            {[
              { h: "Scope", p: "We define a clear feature list and success criteria." },
              { h: "Milestones", p: "I set short deliverables that you can test in game." },
              { h: "Build", p: "I ship clean, documented code with sensible modules." },
              { h: "Handover", p: "Testing, fixes, and a short readme so you can maintain it." },
            ].map((st, i) => (
              <li key={i} className="rounded-2xl border border-white/10 p-5 bg-gray-900">
                <p className="text-sm opacity-70">Step {i+1}</p>
                <p className="text-base font-semibold mt-1">{st.h}</p>
                <p className="opacity-90 mt-2">{st.p}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Testimonials</h3>
          <p className="mt-2 text-gray-300 text-sm">Add short quotes from collaborators or clients here.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl border border-white/10 p-5 bg-gray-900 text-sm opacity-90">
                “SirDWalker shipped exactly what we needed and was easy to work with.”
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-3xl border border-white/10 p-8 bg-gray-900">
            <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>
            <p className="mt-2 text-gray-300 text-sm">
              I reply quickly. Tell me your feature and your deadline, and I will suggest milestones and a fair price.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {contactLinks.map((c, i) => (
                <a key={i} href={c.href} className="px-4 py-2 rounded-2xl border border-white/20 text-sm hover:bg-white hover:text-gray-900 transition">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs opacity-60">
            
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SirDWalker. Roblox development portfolio.
      </footer>
    </div>
  );
}
