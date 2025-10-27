import React, { useState } from 'react';

export default function TermsandConditions() {
  const [search, setSearch] = useState('');
  const [agree, setAgree] = useState(false);

  const clauses = [
    { id: 'intro', title: '1. Introduction', body: `Welcome to Rice App! These Terms and Conditions govern your use of our application. By accessing or using Rice App you agree to be bound by these terms.` },
    { id: 'account', title: '2. Account & Registration', body: `You may register for an account to access additional features. You are responsible for keeping your credentials secure. You must be 13+ to register.` },
    { id: 'services', title: '3. Services', body: `Rice App provides rice-related content and user features. We reserve the right to modify or discontinue features without notice.` },
    { id: 'user_content', title: '4. User Content', body: `You retain ownership of content you post, but you grant Rice App a license to host and display it as needed to operate the service.` },
    { id: 'prohibited', title: '5. Prohibited Conduct', body: `You agree not to post illegal, abusive, or infringing content. You must not attempt to reverse-engineer, spam, or otherwise misuse the app.` },
    { id: 'payments', title: '6. Payments & Subscriptions', body: `Paid features (if any) are billed according to the plan chosen. Refunds are handled per our refund policy.` },
    { id: 'privacy', title: '7. Privacy', body: `Our Privacy Policy explains how we collect and use personal data. By using Rice App you consent to that collection and use.` },
    { id: 'disclaimer', title: '8. Disclaimer & Limitation of Liability', body: `The app is provided "as is". Rice App is not liable for indirect or consequential damages. Maximum liability is limited to fees paid in the last 12 months (if any).` },
    { id: 'termination', title: '9. Termination', body: `We may suspend or terminate accounts for breach of terms. On termination, your right to access the service ends but certain provisions survive.` },
    { id: 'changes', title: '10. Changes to Terms', body: `We may update these Terms; material changes will be notified by email or in-app notice. Continued use after changes means you accept them.` },
    { id: 'governing', title: '11. Governing Law', body: `These Terms are governed by the laws of the jurisdiction in which Rice App is incorporated.` },
    { id: 'contact', title: '12. Contact', body: `If you have questions about these Terms, contact us at support@riceapp.example.` },
  ];

  const filtered = clauses.filter(c => {
    const t = `${c.title} ${c.body}`.toLowerCase();
    return t.includes(search.trim().toLowerCase());
  });

  return (
  
    <div className="d-flex flex-column min-vh-100 ">
  
      <header className="bg-white border-bottom">
        <div className="container py-5" >
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 mb-2 fw-bold " style={{textAlign:"center"}}>Terms & Conditions</h1>
              <p className="lead text-muted mb-0"   style={{textAlign:"center"}}>Understand the rules and policies for using Rice App</p>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0">
              <button className="btn btn-outline-warning me-2" onClick={() => window.print()} aria-label="Print terms">Print</button>
              <button className="btn btn-success" onClick={() => { navigator.clipboard?.writeText(window.location.href); alert('Page link copied to clipboard'); }}>Share</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-fill">
        <div className="container py-5">
          <div className="row g-4">
            {/* Content column */}
            <div className="col-12 col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="mb-3 d-flex">
                    <input
                      className="form-control me-2"
                      placeholder="Search within terms..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      aria-label="Search terms"
                    />
                    <button className="btn btn-dark" onClick={() => setSearch('')}>Clear</button>
                  </div>

                  <div className="accordion" id="termsAccordion">
                    {filtered.map((c, idx) => (
                      <div className="accordion-item" key={c.id}>
                        <h2 className="accordion-header" id={`heading-${c.id}`}>
                          <button className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${c.id}`} aria-expanded={idx === 0} aria-controls={`collapse-${c.id}`}>
                            <span className="me-3 text-muted">{c.title.split('.')[0]}</span>
                            <strong className="ms-1">{c.title.replace(/^\d+\.\s*/, '')}</strong>
                          </button>
                        </h2>
                        <div id={`collapse-${c.id}`} className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} aria-labelledby={`heading-${c.id}`} data-bs-parent="#termsAccordion">
                          <div className="accordion-body">
                            <p className="mb-0">{c.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {filtered.length === 0 && (
                      <div className="text-center py-5 text-muted">
                        No results found for "{search}". Try different keywords or clear the search.
                      </div>
                    )}
                  </div>

                  <hr />

                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <input id="agree" type="checkbox" className="form-check-input me-2" checked={agree} onChange={e => setAgree(e.target.checked)} />
                      <label className="form-check-label" htmlFor="agree">I have read and agree to the Terms</label>
                    </div>
                    <div>
                      <button className="btn btn-success" disabled={!agree} onClick={() => alert('Thanks — you agreed to the Terms')} aria-disabled={!agree}>Continue</button>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>

            {/* Sidebar */}
            <aside className="col-12 col-md-4">
              <div className="position-sticky" style={{ top: 20 }}>
                <div className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">On this page</h6>
                    <ul className="list-unstyled mb-0">
                      {clauses.map(c => (
                        <li key={c.id}><a className="d-block py-1" href={`#collapse-${c.id}`}>{c.title}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card shadow-sm" style={{backgroundColor:"lavenderblush"}}>
                  <div className="card-body text-center">
                    <h6 className="mb-2">Need help?</h6>
                    <p className="small text-muted">Reach our support team for clarification or to request changes.</p>
                    <a href="#contact" className="btn btn-outline-success btn-sm">Contact us</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
      </main>

      
     
    </div>
  );
}
